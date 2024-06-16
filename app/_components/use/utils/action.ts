import { CommentI } from "../types/comment";

export const fetchComments = async (): Promise<CommentI[]> => {
  const response = await fetch('https://dummyjson.com/comments?limit=5');
  const data = await response.json();
  return data.comments;
};