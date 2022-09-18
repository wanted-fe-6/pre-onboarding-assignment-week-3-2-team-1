import RequestService from '../RequestService';
import { PAGE_PER_COMMENTS } from '../../constant';

const requestService = new RequestService('http://localhost:4000');

export const getComments = async () => {
  return await requestService.get('/comments');
};

export const getCommentsByPage = async (page = 1) => {
  return await requestService.get(
    `/comments?_page=${page}&_limit=${PAGE_PER_COMMENTS}&_order=desc&_sort=id`
  );
};

export const getCommentById = async id => {
  return await requestService.get(`/comments/${id}`);
};

export const postComment = async data => {
  return await requestService.post('/comments', data);
};

export const putComment = async (id, data) => {
  return await requestService.put(`/comments/${id}`, data);
};

export const deleteComment = async id => {
  return await requestService.delete(`/comments/${id}`);
};
