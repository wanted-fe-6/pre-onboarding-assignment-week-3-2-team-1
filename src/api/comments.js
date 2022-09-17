import { apiBase } from './api';

class Comments {
  getComments(page) {
    return apiBase.get(`/?_page=${page}&_limit=4&_order=desc&_sort=id`);
  }
}

export default new Comments();
