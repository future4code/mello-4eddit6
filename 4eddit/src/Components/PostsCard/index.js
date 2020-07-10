import React, { useEffect, useState } from "react";
import {
  CardContainer,
  InfoBars,
  ContentContainer,
  BottomDetails,
} from "../../Styled";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const PostCard = (props) => {
  const postInfo = props.post;
  const history = useHistory();
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const goToDetails = (id) => {
    history.push(`/posts/${id}`);
  };

  const handleDirectionUp = (id) => {
    const Headers = { headers: { Authorization: token } };
    const body = {
      direction: 1,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,
        Headers
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDirectionDown = (id) => {
    const Headers = { headers: { Authorization: token } };
    const body = {
      direction: -1,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,
        Headers
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <CardContainer>
      <InfoBars>
        <Typography variant="h5">
          {isLoading ? (
            <Skeleton height={"auto"} width={200} />
          ) : (
            postInfo.username
          )}
        </Typography>
      </InfoBars>
      <ContentContainer>
        <Typography variant="h5">
          {isLoading ? <Skeleton width={200} /> : postInfo.title}
        </Typography>
        <Typography variant="h6">
          {isLoading ? <Skeleton width={200} /> : postInfo.text}
        </Typography>
      </ContentContainer>
      <InfoBars>
        <BottomDetails>
          <ArrowUpward
            onClick={() => {
              handleDirectionUp(postInfo.id);
            }}
          />
          <Typography>
            {isLoading ? (
              <Skeleton height={16} width={20} />
            ) : (
              postInfo.votesCount
            )}
          </Typography>
          <ArrowDownward
            onClick={() => {
              handleDirectionDown(postInfo.id);
            }}
          />
        </BottomDetails>
        <BottomDetails>
          {postId ? (
            <Typography>
              {isLoading ? (
                <Skeleton height={16} width={20} />
              ) : (
                postInfo.commentsCount
              )}{" "}
              comentários
            </Typography>
          ) : (
            <Typography onClick={() => goToDetails(postInfo.id)}>
              {isLoading ? (
                <Skeleton height={16} width={20} />
              ) : (
                postInfo.commentsCount
              )}{" "}
              comentários
            </Typography>
          )}
        </BottomDetails>
      </InfoBars>
    </CardContainer>
  );
};

export default PostCard;
