import { withError } from '../util/errorHandler.util';

class CommentApi {
  constructor() {
    this.baseUrl = 'http://localhost:4000/comments';
    this.limit = 10;
    this.headers = { ['Content-Type']: 'application/json' };
  }
  getCommentsAll() {
    return withError(async () => {
      const res = await fetch(this.baseUrl);
      const comments = await res.json();
      return comments;
    });
  }
  getCommentsByPage({ page }) {
    return withError(async () => {
      const res = await fetch(`${this.baseUrl}?_page=${page}&_limit=${this.limit}`);
      const comments = await res.json();
      return comments;
    });
  }
  getAComment(id) {
    return withError(async () => {
      const res = await fetch(`${this.baseUrl}/${id}`);
      const aComment = await res.json();
      return aComment;
    });
  }
  createAComment(form) {
    return withError(async () => {
      await fetch(this.baseUrl, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: this.headers,
      });
    });
  }
  updateAComment(id, form) {
    return withError(async () => {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: this.headers,
      });
    });
  }
  deleteAComment(id) {
    return withError(async () => {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
    });
  }
}

const commentApi = new CommentApi();
export default commentApi;
