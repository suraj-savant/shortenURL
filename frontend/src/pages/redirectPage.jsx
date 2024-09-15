import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const [url, setUrl] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "/api/v1/redirect/" + params.key
        );
        setUrl(response.data.url); // Accessing data correctly
        if (response.data.url) {
          window.location.href = response.data.url; // Perform the redirect
        }
      } catch (error) {
        console.error("Error fetching URL:", error);
      }
    }
    getData();
  }, [params.key]); // Add params.key as a dependency
if(!url){
    return (
        <p>The url doesn't exist</p>
    )
}
  return (
    <>
      <p>Redirecting to: {url}</p>
    </>
  );
}
