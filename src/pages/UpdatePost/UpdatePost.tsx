import React, { useState } from "react";
import { useLocation } from "react-router";
import { Post } from "../../types/models";
import { UpdatePostForm } from "../../types/forms";

interface UpdatePostProps {
  handleUpdatePost: (post: Post) => void;
}

const UpdatePost=(props: UpdatePostProps): JSX.Element => {
  const location = useLocation()
  const {post}=location.state
  const {handleUpdatePost}=props
  const [form, setForm] = useState<UpdatePostForm>({
    image: post.image, caption: post.caption
  })
  const handlePostModify = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }
  const handlePostSub = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    const updatedPost = {...post, ...form}
    await handleUpdatePost(updatedPost) 
    }

  return (
    <form autoComplete="off" onSubmit={handlePostSub}>
      <label>image
        <input type='text' value={form.image} onChange={handlePostModify} name='image'></input>
      </label>
      <label>caption
        <input type='text' value={form.caption} onChange={handlePostModify} name='caption'></input>
      </label>
      <button type='submit'>REEEEEEE-POST TO COMBAT IMPOSTER SYNDROME!</button>
    </form>
  )
}

export default UpdatePost