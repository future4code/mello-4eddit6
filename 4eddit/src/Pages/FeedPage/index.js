import React, { useContext } from "react";
import PostCard from "../../Components/PostsCard";
import FeedContext from "../../Utils/Context/FeedContext";
import { Container, LogoutContainer } from "./Styled";
import { ExitToApp } from "@material-ui/icons";
import { Fab, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { FullContainer } from "../../Styled";
import CreatePost from "../../Components/CreatePost";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const token = localStorage.getItem("token");

const FeedPage = () => {
  const posts = useContext(FeedContext);
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.replace("/");
  };

  return (
    <FullContainer>
      <CreatePost />
      <Container>
        <LogoutContainer>
          <Fab
            variant="extended"
            size="large"
            className={classes.margin}
            onClick={handleLogout}
          >
            Logout
            <ExitToApp className={classes.extendedIcon} />
          </Fab>
        </LogoutContainer>

        {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </Container>
    </FullContainer>
  );
};

export default FeedPage;
