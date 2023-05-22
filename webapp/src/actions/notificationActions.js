import axios from "axios";
import {
  USER_NOTIFICATIONS_FAIL,
  USER_NOTIFICATIONS_REQUEST,
  USER_NOTIFICATIONS_SUCCESS,
} from "../constants/userConstants";

const baseUrl = "http://localhost:5001/api";

// Get notifications for current logged in user and pass to reducer
export const getNotifications = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_NOTIFICATIONS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const notifications = await axios.get(`${baseUrl}/notifications`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      withCredentials: true,
    });

    console.log("All notifications", notifications.data);

    const unreadNotifications = notifications.data.filter(
      (n) => n.read === false
    );
    console.log("unread notifications", unreadNotifications);

    dispatch({
      type: USER_NOTIFICATIONS_SUCCESS,
      payload: {
        all: notifications.data,
        unread: unreadNotifications,
      },
    });
  } catch (error) {
    dispatch({
      type: USER_NOTIFICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Mark notifications as read for current logged in user
export const markNotificationsAsRead = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_NOTIFICATIONS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const notifications = await axios.put(`${baseUrl}/notifications`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      withCredentials: true,
    });

    const unreadNotifications = notifications.data.filter(
      (n) => n.read === false
    );

    dispatch({
      type: USER_NOTIFICATIONS_SUCCESS,
      payload: {
        all: notifications.data,
        unread: unreadNotifications,
      },
    });
  } catch (error) {
    dispatch({
      type: USER_NOTIFICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
