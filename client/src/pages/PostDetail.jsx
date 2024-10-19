import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../component/PostAuthor";
import { Link, useParams } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Loader from "../component/Loader";
import DeletePost from "./DeletePost";
import axios from "axios";
const PostDetail = () => {
  const [question, setQuestion] = useState("technology");
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const { currentUser } = useContext(UserContext);
  async function generateAnswer() {
    setIsSummaryLoading(true);

    if (!post) return;
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setIsSummaryLoading(false);
  }

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
        setQuestion("summarise this: " + response.data.description);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    getPost();
  }, []);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id == post?.creator && (
              <div className="post-detail__buttons">
                <Link
                  to={`/posts/${post?._id}/edit`}
                  className="btn sm primary"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt=""
              onError={(event) => {
                event.target.src =
                  "https://img.freepik.com/premium-photo/flat-lay-black-gray-tech-gadgets-black-background_14117-686849.jpg";
                event.onerror = null;
              }}
            ></img>
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>

          <div className="response">
            <button className="btn-ai btn" onClick={generateAnswer}>
              <svg
                height="24"
                width="24"
                fill="#00000"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              Generate Summary
            </button>
            <h3> Summary:</h3>
            <br />
            {isSummaryLoading ? <Loader /> : <p>{answer}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetail;
