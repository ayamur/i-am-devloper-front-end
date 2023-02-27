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
  // profile: { id: number };
  postId: number;
  profileId: number;
  name: Profile["name"];
  image: string;
  caption: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type { Profile, User, Post };
