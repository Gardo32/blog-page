import React, { useState, useEffect } from 'react';
import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentsContainer = ({className, loginedUserId}) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => !comment.parent);
  const [affectedComment, setaffectedComment] = useState(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentsHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setComments((curState) => { 
      return [newComment, ...curState];
    });
  };

  const updateCommentsHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return {
          ...comment,
          desc: value,
        };
      }
  const deleteCommentsHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => comment._id !== commentId);
    setComments(updatedComments);
  }
      return comment;
    });
    setComments(updatedComments);
    setaffectedComment(null);
  };

  const getRepliesHandler = (commentId) => {
    return comments.filter((comment) => comment.parent === commentId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  return (
    <div className={`${className}`}>
      <CommentForm 
        btnLabel="Send" 
        formSubmitHanlder={(value) => addCommentsHandler(value)} 
      />
      <div className='space-y-4 mt-8'>
        {mainComments.map((comment) => () => (
          <Comment 
            key={comment._id}
            comment={comment} 
            logginedUserId={loginedUserId} 
            affectedComment={affectedComment} 
            setAffectedComment={setaffectedComment}
            addComment={addCommentsHandler}
            updateComment={updateCommentsHandler} 
            deleteComment={deleteCommentsHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;