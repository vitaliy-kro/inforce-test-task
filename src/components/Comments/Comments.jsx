import { CommentText, CommentTime } from './Comments.styled';

export const Comments = ({ id, comments }) => {
  return comments.map(e => {
    return e.productId === id ? (
      <CommentText key={id}>
        <CommentTime>{e.date}: </CommentTime>
        {e.description}
      </CommentText>
    ) : null;
  });
};
