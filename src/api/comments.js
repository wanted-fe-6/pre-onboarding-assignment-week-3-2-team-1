import { apiBase } from './api';

class Comments {
  getComments(page) {
    console.info(page);
    return apiBase.get(`/?_page=${page}&_limit=4&_order=desc&_sort=id`);
    //console.info(res.headers['x-total-count']);
  }
}

export default new Comments();
