import { apiBase } from './api';

class Comments {
  getComments(page){
    return apiBase.get(`/?_page=${page}&_limit=4&_order=desc&_sort=id`);
  }

  deleteComments(id){
    return apiBase.delete(`/${id}`);
  }

  async createComments({ avatar, author, description, date }) {
    const res = await apiBase.post(`/`, {
      profile_url: avatar,
      author,
      content: description,
      createdAt: date,
    });
    return res;
  }

  async getUpdateComments(id) {
    const res = await apiBase.get(`/${id}`);
    return res.data;
  }

  async updateComments({ id, avatar, author, description, date }) {
    const res = await apiBase.put(`/${id}`, {
      id,
      profile_url: avatar,
      author,
      content: description,
      createdAt: date,
    });
    return res;
  }
}

export default new Comments();