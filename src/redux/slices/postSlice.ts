import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  { id: 1, title: "Post 1", description: "Description of Post 1" },
  { id: 2, title: "Post 2", description: "Description of Post 2" },
  { id: 3, title: "Post 3", description: "Description of Post 3" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const newId = state[state.length - 1].id + 1;
      const { title, description } = action.payload;
      state.push({ id: newId, title, description });
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const id = action.payload;  
      const postIndex = state.findIndex((post: any) => post.id === id);
      if (postIndex !== -1) {
        state.splice(postIndex, 1);
      }
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;

export const selectPostById = (state: any, postId: number) =>
  state.posts.find((post: any) => post.id === postId);

export default postsSlice.reducer;

