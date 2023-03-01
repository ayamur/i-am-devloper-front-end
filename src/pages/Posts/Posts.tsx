// components
import PostCard from '../../components/PostCard/PostCard'

// types
import { Post, User } from '../../types/models'
import { DeletePostForm } from '../../types/forms'



interface PostsProps {
  posts: Post[];
  user: User | null;
  handleDeletePost: (postData: DeletePostForm) => Promise<void>;
}



const Posts = (props: PostsProps): JSX.Element => {
  const { posts, user,
    handleDeletePost } = props

  if (!posts.length) return <p>No posts yet</p>

  return (
    <>
      <div className='list'>
        {posts.map((post: Post) =>
          <>
            <PostCard post={post} key={post.id} user={user}
              handleDeletePost={handleDeletePost} />
            <hr />
          </>
        )}
      </div>
    </>
  )
}



export default Posts