import React, { useState } from "react";
import axios from "axios";

export default function MainPage() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  async function shortUrl() {

    try {
      const rsp = await axios.post("http://localhost:3000/api/v1/shorturl", {
       "url": url,
      });
      console.log(rsp)
      setShortenUrl("http://localhost:5173/"+rsp.data.url)
    } catch (error) {
      console.log("Error in shortning url " + error);
    }
  }

  return (
    <div className="flex h-screen justify-center items-center  bg-gradient-to-tr from-red-200 to-blue-400">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 ">
          URL Shortener
        </h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Original URL
        </label>
        <input
          type="url"          
          placeholder="Enter your URL"
          className="w-full border border-gray-300 px-2 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setUrl(e.target.value)}
        />
        {
             shortenUrl &&  <div>
              <span className="block text-sm font-medium text-gray-700 mt-2 mb-1">
                Shortened URL
              </span>
              <div className="w-full h-10 p-2 border border-gray-300  rounded-lg transition duration-200 ease-in-out">
                <span >{shortenUrl}</span>
              </div>
      
              </div>
        }
      
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 my-4 rounded-lg transition duration-200 ease-in-out"
          onClick={shortUrl}
        >
          Shorten URL
        </button>
      </div>
    </div>
  );
}
