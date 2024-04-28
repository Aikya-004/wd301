import { API_ENDPOINT } from "../../config/constants";
import { Comment, CommentListAvailableAction, CommentDispatch } from "./types";

export const fetchComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_FAILURE,
      payload: "Unable to fetch comments",
    });
  }
};

export const addComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  comment: Comment
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.ADD_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add comment");
    }

    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.ADD_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.ADD_COMMENT_FAILURE,
      payload: "Unable to add comment",
    });
  }
};

export const refreshComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_COMMENT_FAILURE,
      payload: "Unable to fetch comments",
    });
  }
};
