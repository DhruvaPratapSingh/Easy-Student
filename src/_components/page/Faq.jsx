import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Faq() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-screen flex flex-col items-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-3">
        <form
          onSubmit={generateAnswer}
          className="text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform sticky top-0 "
        >
          <h1 className="text-4xl font-bold text-blue-500 mb-4 animate-bounce">
            Chat AI
          </h1>
          <input
            required
            className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
              generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex-1 overflow-y-auto text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform p-4">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Faq;
