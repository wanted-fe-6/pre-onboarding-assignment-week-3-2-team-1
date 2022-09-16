import { apiBase } from './api';

class Comments {
  async getComments() {
    const res = await apiBase.get(`/`);
    //?_page=${page}&_limit=4&_order=desc&_sort=id
    //console.info(res.headers['x-total-count']);
    return res.data;
  }
}

export default new Comments();
