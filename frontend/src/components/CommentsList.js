import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = ({comments}) =>(
    <>
    <h3>Comments:</h3>
    {comments.map((comment,key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;

