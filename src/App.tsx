// npm modules 
import { useState,useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Posts from './pages/Posts/Posts'
import CreatePost from './pages/CreatePost/CreatePost'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as postService from './services/postService'

// stylesheets
import './App.css'

// types
import { User, Profile, Post } from './types/models'
// import { PostManagerFormData } from './types/forms'
import { CreatePostForm } from './types/forms'
import { PromiseProvider } from 'mongoose'

function App(): JSX.Element {
  const navigate = useNavigate()

  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect((): void => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const postData: Post[] = await postService.getAllPosts()
        setPosts(postData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchPosts()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleCreatePost = async (postData: CreatePostForm): Promise<void>=>{
    const makePost = await postService.createPost(postData)
    setPosts([makePost, ...posts])
    navigate('/posts')
  }

  // const handlePost = async (formData: PostManagerFormData): Promise<void> => {
  //   try {
  //     const updatedPost = await postService.updatePost(formData)
  //     setPosts(posts.map((post) => (
  //       post.id === updatedPost.id ? updatedPost : post
  //     )))
  //   } catch (error) {
  //     console.log(error);

  //   }
  // }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute user={user}>
              <Posts posts={posts}/>
            </ProtectedRoute>
          }
        />
        <Route
        path="/postpost"
        element={
          <ProtectedRoute user={user}>
            <CreatePost handleCreatePost={handleCreatePost} />
          </ProtectedRoute>
        }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
