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
            _id: "10",
            user: {
              _id: "a",
              name: "Mohammad Rezaii",
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: "2022-12-31T17:22:05.092+0000",
        };
        setComments((curState) => { 
          return [newComment, ...curState];
        })

    };
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
            />
          ))}
        </div>
    </div>
  )
}

export default CommentsContainer