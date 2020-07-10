import React, { useState } from "react";
import axios from "axios";
import { Container } from "./styled";

export default function CreatePost() {
  const [textPost, setTextPost] = useState();
  const token = localStorage.getItem("token");

  const handleTextInput = (e) => {
    setTextPost(e.target.value);
  };

  const PostCreate = () => {
    const headers = { headers: { Authorization: token } };
    const body = {
      text: textPost,
      title: "Título",
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        body,
        headers
      )
      .then(() => {
        setTextPost("");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <Container>
      <input
        onChange={handleTextInput}
        value={textPost}
        placeholder="Escreva seu Post"
      ></input>
      <button onClick={PostCreate}>Criar Post</button>
    </Container>
  );
}
