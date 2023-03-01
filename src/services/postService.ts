// services
import * as tokenService from './tokenService'

// types
import { Post } from '../types/models'
import { CreatePostForm, UpdatePostForm, DeletePostForm } from '../types/forms'



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
    })
    return await response.json() as Post
  } catch (error) {
    throw (error)
  }
}

async function updatePost(postData: Post): Promise<Post> {
  try {
    const response = await fetch(`${BASE_URL}/${postData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    return await response.json() as Post
  } catch (error) {
    throw (error)
  }
}

async function deletePost(postData: DeletePostForm): Promise<Post> {
  try {
    const response = await fetch(`${BASE_URL}/${postData.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    return await response.json()
  } catch (error) {
    throw (error)
  }
}

export { getAllPosts, createPost, updatePost, deletePost }