import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createPost } from "../api/posts";

export default function CreatePost() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [imageFile, setImageFile] = useState<File>();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image);

    await createPost(formData);

    history.push("/");
  };

  const onImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title:</label>
        <input id="title" {...register("title")} />

        <label htmlFor="content">Content:</label>
        <textarea id="content" {...register("content")} />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={onImageChange}
        />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}