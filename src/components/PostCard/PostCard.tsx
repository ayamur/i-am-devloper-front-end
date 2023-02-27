import { useState, useEffect } from 'react';

// assets
import defaultPic from '../../assets/icons/profile.png'

// components
import PostManager from '../PostManager/PostManager'

//type
import { Post } from '../../types/models'
import { PostManagerFormData } from '../../types/forms'



interface PostCardProps {
  postId: number;
  post: Post;
  handlePost: (FormData: PostManagerFormData) => void;
}

const PostCard = (props: PostCardProps): JSX.Element => {
  const { post } = props

  return (
    <article>
      <h1>{post.caption}</h1>
      <img src={post.image} alt={post.caption} />
    </article>
  );
}

export default PostCard