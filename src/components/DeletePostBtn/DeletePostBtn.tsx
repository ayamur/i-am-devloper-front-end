import { useNavigate } from 'react-router'
import * as tokenService from '../../services/tokenService'



type DeletePostBtnProps = {
  postId: string,
  token: string,
  userId: string
}



const DeletePostBtn: React.FC<DeletePostBtnProps> = ({ userId, postId }) => {
  const navigate = useNavigate()

  const deletePost = async () => {
    try {
      const response = await fetch(`{BASE_URL}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`,
        },
      })

      const delResponse = await response.json()
      if (delResponse.message === 'Goodbye to That Post!') {
        navigate('/posts')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={deletePost} disabled={userId !== postId}>
      Delete This Post
    </button>
  )
}



export default DeletePostBtn