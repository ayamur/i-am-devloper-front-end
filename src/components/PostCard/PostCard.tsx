import { Link } from 'react-router-dom'
import divideline from '../../assets/divideline.png'

// assets

// components
import { DeletePostForm } from '../../types/forms';

//type
import { Post, User } from '../../types/models'



interface PostCardProps {
  post: Post;
  // profile: Profile | null;
  user: User | null;
  handleDeletePost: (postData: DeletePostForm) => void;
}

const PostCard = (props: PostCardProps): JSX.Element => {
  const { post, user, handleDeletePost } = props

  return (
    <>
      <div className='postcard' key={post.id}>
        {post.image && (
          <img src={post.image} alt={post.caption} />
        )}
        <h1>Notes from the devloper!: </h1><h1 id='devcap'>{post.caption}</h1>
        {post.profileId === user?.id && (
          <>
            <Link state={{ post }} to='/posts/edit'>
              <button>
                Edit Your Oops!
              </button>
            </Link>
            <button onClick={() => handleDeletePost(post)}>
              This Never Happened! Delete The Proof!
            </button>
            <img src={divideline} alt='decorative dividing line' id='postdivide' />
          </>
        )
        }
      </div>
    </>
  )
}



export default PostCard
