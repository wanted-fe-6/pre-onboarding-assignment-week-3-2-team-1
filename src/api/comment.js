import { withError } from '../util/withError.util';

const baseUrl = 'http://localhost:4000/comments';
const limit = 10;
const order = 'desc';
const sort = 'createdAt';
const headers = { ['Content-Type']: 'application/json' };

export default class CommentApi {
  static getCommentsAll() {
    return withError(async () => {
      const res = await fetch(baseUrl);
      const comments = await res.json();
      return comments;
    });
  }
  static getCommentsByPage({ page }) {
    return withError(async () => {
      const res = await fetch(
        `${baseUrl}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
      );
      const comments = await res.json();
      return comments;
    });
  }
  static getAComment(id) {
    return withError(async () => {
      const res = await fetch(`${baseUrl}/${id}`);
      const aComment = await res.json();
      return aComment;
    });
  }
  static createAComment(form) {
    return withError(async () => {
      const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: headers,
      });
      return await res.json();
    });
  }
  static updateAComment(id, form) {
    return withError(async () => {
      await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: headers,
      });
    });
  }
  static deleteAComment(id) {
    return withError(async () => {
      await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });
    });
  }
}
