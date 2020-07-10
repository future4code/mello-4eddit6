import React from "react";
import { Container, GoBackContainer } from "./Styled";
import { useRequestDetails } from "../../Hooks/UseRequestDetails";
import { useParams, useHistory } from "react-router-dom";
import PostCard from "../../Components/PostsCard";
import CommentsCard from "../../Components/CommentsCard";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles, Fab } from "@material-ui/core";
import { FullContainer } from "../../Styled";
import CreateComment from "../../Components/CreateComment";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const PostsPage = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const history = useHistory();

  const { details } = useRequestDetails(`/posts/${postId}`);

  const comments = details.comments;
  console.log(comments);

  return (
    <FullContainer>
      <CreateComment />
      <Container>
        <PostCard post={details} />
        {comments &&
          comments.map((comment) => {
            return <CommentsCard key={comment.id} comment={comment} />;
          })}
        <GoBackContainer>
          <Fab
            size="large"
            variant="extended"
            className={classes.margin}
            onClick={() => history.push("/posts")}
          >
            <ArrowBack className={classes.extendedIcon} />
            Voltar
          </Fab>
        </GoBackContainer>
      </Container>
    </FullContainer>
  );
};

export default PostsPage;
