import React, { createContext, useContext, useReducer } from "react";
import { commentReducer, initialState } from "./reducer"; // Make sure the path is correct
import { CommentListState, CommentDispatch } from "./types";

const CommentsStateContext = createContext<CommentListState>(initialState);
const CommentsDispatchContext = createContext<CommentDispatch>(() => {});

export const CommentsProvider: React.FC = ({ children }) => {
  // Create a state and dispatch with `useReducer` passing in the `commentReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(commentReducer, initialState);
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispatch` out of the context.
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
