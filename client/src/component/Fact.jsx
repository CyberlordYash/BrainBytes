import axios from "axios";
import React, { useState } from "react";
import Loader from "./Loader";

const Fact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState("technology");
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
    setIsLoading(true);
    const tempQuestion = question;
    setQuestion("Give me a random fact about " + question);
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
      <div className="fact">
        <h1>FactShare</h1>
        <p>Enter a topic you want a fact about</p>
        <textarea
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          cols={3}
          rows={2}
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
          Generate Fact
        </button>
      </div>
      <div className="response">
        <h3> Fact:</h3>
        <br />
        {isLoading ? <Loader /> : <p>{answer}</p>}
      </div>
    </>
  );
};

export default Fact;
