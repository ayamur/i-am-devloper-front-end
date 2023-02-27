// components
import PostCard from '../../components/PostCard/PostCard'

// types
import { Post } from '../../types/models'
import { PostManagerFormData } from '../../types/forms'

interface PostsProps {
  posts: Post[];
  handlePost: (formData: PostManagerFormData) => void
}

const Posts = (props: PostsProps): JSX.Element => {
  const { posts } = props

  if (!posts.length) return <p>No posts yet</p>

  return (
    <main className='list'>
      {posts.map((post: Post) =>
        <PostCard
          key={post.id}
          post={post}
          postId={post.id}
          handlePost={props.handlePost}
        />
      )}
    </main>
  )
}

export default Posts

