/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

interface Profile {
  name: string;
  photo?: string;
  id: number;
  post: { id: number };
  createdAt: string;
  updatedAt: string;
}

interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface Post {
  id: number;
  _id: string;
  profileId: number;
  postId: number;
  image: string;
  caption: string;
  createdAt: string;
  updatedAt: string;
}

export type { Profile, User, Post };
