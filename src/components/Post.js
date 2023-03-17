import React from "react";
import "./Post.css";
import {Link } from 'react-router-dom';

const Post = ({ post: { title, body,imgUrl, author }, index }) => {
    console.log(index);

    return (
	<div className="post-container">
	<Link to={`/resPage/${index}`} params={{ id: index }}><h1 className="heading">{title}</h1></Link>
	<img className="image" src={imgUrl} alt="post" />
	<p>{body}</p>
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
	</div>
);
};

export default Post;
