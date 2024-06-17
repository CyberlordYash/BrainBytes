import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
const DeletePost = ({ postId: id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const location = useLocation();
  //redirecting to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const removePost = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 200) {
        if (location.pathname == "/myposts/${currentUser.id}") {
          navigate(0);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("couldn't delete post");
    }
  };
  return (
    <Link className="btn sm danger" onClick={() => removePost(id)}>
      Delete
    </Link>
  );
};

export default DeletePost;