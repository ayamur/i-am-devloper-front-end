// services
import * as tokenService from './tokenService'

// types
import { Post } from '../types/models' 
import { CreatePostForm } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function getAllPosts(): Promise<Post[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Post[]
  } catch (error) {
    throw error
  }
}

async function createPost(postData: CreatePostForm): Promise<Post> {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    return await response.json() as Post
  } catch (error) {
    throw (error);
  }
}

//create Post method, call backend method and in create post component(basic HTML form - attach handler/asynchornous), import create post method (something other than createPost),
//import into createPOst component and call into createPost component (form)

export { getAllPosts, createPost }