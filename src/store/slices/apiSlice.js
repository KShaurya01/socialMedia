import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getUserById: builder.query({
      query: id => `/users/${id}`,
    }),
    getUserPosts: builder.query({
      query: id => `/users/${id}/posts`,
    }),
    getUserAlbums: builder.query({
      query: id => `/users/${id}/albums`,
    }),
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPostById: builder.query({
      query: id => `/posts/${id}`,
    }),
    getPostComments: builder.query({
      query: id => `/posts/${id}/comments`,
    }),
    createPost: builder.mutation({
      query: data => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      query: ({id, data}) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserPostsQuery,
  useGetUserAlbumsQuery,
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
