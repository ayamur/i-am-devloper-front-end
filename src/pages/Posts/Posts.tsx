// components
import PostCard from '../../components/PostCard/PostCard';

// types
import { Post } from '../../types/models'


interface PostsProps {
  posts: Post[];
}


const Posts = (props: PostsProps): JSX.Element => {
  const { posts } = props

  if (!posts.length) return <p>No posts yet</p>

  return (
    <main className='list'>
      {posts.map((post: Post) =>
        <PostCard post={post} key={post.id}
        />
      )}
    </main>
  )
}



export default Posts

