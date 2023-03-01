//npm modules 
import { Link } from 'react-router-dom'

//type
import { Post, User } from '../../types/models'
import { DeletePostForm } from '../../types/forms'



interface PostCardProps {
  post: Post;
  user: User | null;
  handleDeletePost: (postData: DeletePostForm) => void;
}



const PostCard = (props: PostCardProps): JSX.Element => {
  const { post, user, handleDeletePost } = props

  return (
    <>
      <div className='postcard' key={post.id}>
        <h4 className='cardfont'>Notes from the devloper!: </h4><h2 id='devcap' className='cardfont'>"{post.caption}"</h2>
        {post.image && (
          <img src={post.image} alt={post.caption} />
        )}
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
            <hr />
          </>
        )
        }
      </div>
    </>
  )
}



export default PostCard










// icebox asset
// import divideline from '../../assets/divideline.png'