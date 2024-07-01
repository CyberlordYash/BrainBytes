import axios from "axios";
import React, { useState } from "react";
import Loader from "./Loader";

const Ai = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
    setIsLoading(true);
    const tempQuestion = question;
    setQuestion("write notes about " + question);
    console.log(prompt);
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_GEMINI_KEY}`,
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setIsLoading(false);
    setQuestion(tempQuestion);
  }

  return (
    <>
      <div className="ai">
        <h1>Gen AI</h1>
        <p>Give a title for ai to write in detail about</p>
        <textarea
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          cols={20}
          rows={5}
          className="ai-textarea"
        ></textarea>
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
          Generate ans
        </button>
      </div>
      <div className="response">
        <h3> Response will appear here</h3>
        <br />
        {isLoading ? <Loader /> : <p>{answer}</p>}
        <button class="Btn">
          <span class="text">Copy</span>
          <span class="svgIcon">
            <svg
              fill="white"
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Ai;
