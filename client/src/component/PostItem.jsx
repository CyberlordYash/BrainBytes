import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import HeroImg from "../images/Dark.jpg";
const PostItem = ({
  postId,
  category,
  title,
  description,
  authorID,
  thumbnail,
  postID,
  createdAt,
}) => {
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  const postTitle =
    title.length > 30 ? description.substr(0, 30) + "..." : title;
  return (
    <article className="container1 post">
      <div className="box">
        <div className="post__thumbnail">
          <img
            src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`}
            alt={title}
            onError={(event) => {
              event.target.src =
                "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_04/story_29467/assets/2.jpeg?time=1680591914";
              event.onerror = null;
            }}
          ></img>
        </div>
        <div className="post__content">
          <Link to={`/posts/${postID}`}>
            <h3>{postTitle}</h3>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
          <div className="post__footer">
            <PostAuthor authorID={authorID} createdAt={createdAt} />
            <Link className="btn category" to={`/posts/categories/${category}`}>
              {category}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
