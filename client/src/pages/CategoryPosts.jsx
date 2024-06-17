import React, { useEffect, useState } from "react";

import PostItem from "../component/PostItem";
import axios from "axios";
import Loader from "../component/Loader";
import { useParams } from "react-router-dom";
const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [category]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.length > 0 ? (
          posts.map(
            ({
              _id: id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
              />
            )
          )
        ) : (
          <h2 className="center">No Posts Found</h2>
        )}
      </div>
    </section>
  );
};

export default CategoryPosts;
