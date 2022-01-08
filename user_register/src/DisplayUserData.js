import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userData from "./apis/userData";
const DisplayUSerData = () => {
  const [data, setData] = useState();
  const retrieveData = async () => {
    const res = await userData.get("/userData");
    return res.data;
  };

  const removeData = async (id) => {
    await userData.delete(`/userData/${id}`);
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };
  useEffect(() => {
    const getUserData = async () => {
      const allUserData = await retrieveData();
      if (allUserData) setData(allUserData);
    };
    getUserData();
  }, []);
  console.log(data);
  return (
    <div className="ui container">
      <h1>User data</h1>
      <div className="ui segment">
        {!data ? (
          <div className="ui active dimmer">
            <div className="ui text loader">Loader</div>
          </div>
        ) : (
          <div className="ui relaxed divided list">
            {data.map((user, index) => {
              const { username, city, profession } = user;
              return (
                <div className="item" key={index}>
                  <div className="content">
                    <p className="header">{username}</p>
                    <p className="description">{city}</p>
                    <p className="content">{profession}</p>
                  </div>
                  <button
                    className="ui negative basic button"
                    onClick={(e) => removeData(user.id)}
                  >
                    Delete
                  </button>
                  <p className="ui positive basic button">
                    <Link to={{ pathname: "/edit", state: user }}>Edit</Link>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <p className="ui primary basic button">
        <Link to="/register" className="item">
          Register
        </Link>
      </p>
    </div>
  );
};
export default DisplayUSerData;
