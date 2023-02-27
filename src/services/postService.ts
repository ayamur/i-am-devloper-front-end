// services
import * as tokenService from './tokenService'

// types
import { Profile, Post } from '../types/models'
import { PostManagerFormData } from "../types/forms" 

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

async function updatePost(formData: PostManagerFormData): Promise<Post> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Post
  } catch (error) {
    throw error
  }
}

export { getAllPosts, updatePost }