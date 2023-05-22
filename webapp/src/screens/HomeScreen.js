import React, { useEffect } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getLikesList,
  getMatchesList,
  getUserList,
} from "../actions/userActions";
import { getNotifications } from "../actions/notificationActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import User from "../components/User";

export default function HomeScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { userListLoading, userListError, users } = userList;

  const userLikes = useSelector((state) => state.userLikes);
  const { userLikesLoading, userLikesError, likes } = userLikes;

  const userMatches = useSelector((state) => state.userMatches);
  const { userMatchesLoading, userMatchesError, matches } = userMatches;

  const userNotifications = useSelector((state) => state.userNotifications);
  const { userNotificationsLoading, userNotificationsError, notifications } =
    userNotifications;

  useEffect(() => {
    if (userInfo) {
      if (!users) {
        dispatch(getUserList());
      }
      if (!notifications) {
        dispatch(getNotifications());
      }
      if (!likes) {
        dispatch(getLikesList());
      }

      if (!matches) {
        dispatch(getMatchesList());
      }
    }
  }, [dispatch, navigate, userInfo, users, likes, notifications, matches]);

  return (
    <section
      style={{ backgroundColor: "#111213", color: "white", minHeight: "100vh" }}
    >
      {/* If not logged in */}
      {!userInfo ? (
        <Container className="p-5 mt-5" style={{ textAlign: "center" }}>
          <Image
            src="/images/index.svg"
            style={{ height: "50%", width: "50%" }}
          />
          <br />
          <h1 className="mb-3" style={{ fontWeight: "700" }}>
            Welcome to FindYourLove <span style={{ color: "#4d61fc" }}>.</span>
          </h1>
          <Button onClick={() => navigate("/login")}>
            Login now to Find a Date
          </Button>
        </Container>
      ) : (
        // If the user is logged in
        <Container className="p-5 mt-5">
          <h1 className="mb-3" style={{ fontWeight: "700" }}>
            People looking for a date near you
          </h1>
          {userListError ? (
            <Message variant="danger">{userListError}</Message>
          ) : userListLoading ||
            userLikesLoading ||
            userNotificationsLoading ? (
            <Loader />
          ) : (
            <>
              <Row>
                {users &&
                  userInfo &&
                  likes &&
                  matches &&
                  users.map((u) => (
                    <User
                      user={u}
                      key={u._id}
                      like={likes.some((user) => user._id === u._id)}
                      match={matches.some((user) => user._id === u._id)}
                    />
                  ))}
              </Row>
            </>
          )}
        </Container>
      )}
    </section>
  );
}
