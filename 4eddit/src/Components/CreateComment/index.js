import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Container } from "./styled";

export default function CreateComment() {
  const [textComment, setTextComment] = useState();
  const token = localStorage.getItem("token");
  const pathParams = useParams();

  const handleTextInput = (e) => {
    setTextComment(e.target.value);
  };

  const CommentCreate = () => {
    const headers = { headers: { Authorization: token } };
    const body = {
      text: textComment,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment`,
        body,
        headers
      )
      .then(() => {
        setTextComment("");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <Container>
      <input
        value={textComment}
        onChange={handleTextInput}
        placeholder="Comente aqui"
      ></input>
      <button onClick={CommentCreate}>ENVIAR</button>
    </Container>
  );
}
