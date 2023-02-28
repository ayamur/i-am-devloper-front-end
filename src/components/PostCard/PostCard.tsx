
// assets

// components

//type
import { Post } from '../../types/models'



interface PostCardProps {
  post: Post;
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
