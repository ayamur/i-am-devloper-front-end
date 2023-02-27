// assets
// import bean from '../../assets/icons/bean.png'
// import noBean from '../../assets/icons/noBean.png'

// types
import { Post } from "../../types/models"
import { PostManagerFormData } from '../../types/forms'

interface PostManagerProps {
  post: Post;
  handlePost: (formData: PostManagerFormData) => void
}

const PostManager = (props: PostManagerProps): JSX.Element => {
  const { post, handlePost } = props
  return (
    <section>
      {`${post.name}'s eoroor`}
    </section>
  )
}

export default PostManager