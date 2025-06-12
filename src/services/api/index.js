import apiClient from './apiClient';

export const fetchUsers = () => apiClient.get('/users');
export const fetchUserById = id => apiClient.get(`/users/${id}`);
export const fetchUserPosts = id => apiClient.get(`/users/${id}/posts`);
export const fetchUserAlbums = id => apiClient.get(`/users/${id}/albums`);

export const fetchPosts = () => apiClient.get('/posts');
export const fetchPostById = id => apiClient.get(`/posts/${id}`);
export const fetchPostComments = id => apiClient.get(`/posts/${id}/comments`);
export const createPost = data => apiClient.post('/posts', data);
export const updatePost = (id, data) => apiClient.put(`/posts/${id}`, data);
export const patchPost = (id, data) => apiClient.patch(`/posts/${id}`, data);
export const deletePost = id => apiClient.delete(`/posts/${id}`);

export const fetchComments = () => apiClient.get('/comments');
export const fetchCommentsByPostId = postId =>
  apiClient.get(`/comments?postId=${postId}`);
export const createComment = data => apiClient.post('/comments', data);
export const updateComment = (id, data) =>
  apiClient.put(`/comments/${id}`, data);
export const patchComment = (id, data) =>
  apiClient.patch(`/comments/${id}`, data);
export const deleteComment = id => apiClient.delete(`/comments/${id}`);

export const fetchAlbums = () => apiClient.get('/albums');
export const fetchAlbumPhotos = id => apiClient.get(`/albums/${id}/photos`);
export const fetchPhotos = () => apiClient.get('/photos');
