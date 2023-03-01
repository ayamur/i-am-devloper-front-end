import React, { useState } from 'react'



interface CreatePostProps {
  handleCreatePost: (post: PostFormData) => void;
}

interface PostFormData {
  image: string;
  caption: string;
}



const CreatePost: React.FC<CreatePostProps> = (props) => {
  const [form, setForm] = useState<PostFormData>({
    image: '', caption: ''
  })

  const handlePostChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = evt.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))

  }
  const handlePostSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleCreatePost(form)
    setForm({
      image: '', caption: ''
    })
  }

  return (
    <form autoComplete='off' onSubmit={handlePostSubmit}>
      <label>image
        <input type='text' value={form.image} onChange={handlePostChange} name='image'>
        </input>
      </label>
      <label>caption
        <input type='text' value={form.caption} onChange={handlePostChange} name='caption'>
        </input>
      </label>
      <button type='submit'>POST TO COMBAT IMPOSTER SYNDROME!</button>
    </form>
  )
}



export default CreatePost