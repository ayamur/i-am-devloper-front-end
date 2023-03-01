/* ---------==== custom forms ====--------- */

import { PostMiddlewareFunction } from 'mongoose'

/* ---------===== auth forms =====--------- */



export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}

export interface CreatePostForm {
  image: string;
  caption: string;
}

export interface UpdatePostForm {
  image: string;
  caption: string;
}

export interface DeletePostForm {
  image: string;
  caption: string;
  postId: number;
  id: number;
}

export interface PostDataType {
  id: number;
  image: string;
  caption: string;
}