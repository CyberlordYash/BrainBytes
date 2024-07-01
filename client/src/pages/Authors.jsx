import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader";
const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users`
        );
        console.log(response.data);
        setAuthors(response.data);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    getAuthors();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ _id: id, avatar, name, posts }) => {
            return (
              <Link className="author" key={id} to={`/posts/users/${id}`}>
                <div className="author__avatar">
                  <img
                    src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                    alt={`Image of ${name}`}
                    onError={(event) => {
                      event.target.src =
                        "https://i.pinimg.com/originals/39/a4/71/39a47159059f38a954d77e5dcae6f0db.jpg";
                      event.onerror = null;
                    }}
                  ></img>
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No user data</h2>
      )}
    </section>
  );
};

export default Authors;
