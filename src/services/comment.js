class CommentApi {
  constructor() {
    this.baseUrl = 'http://localhost:4000/comments';
    this.limit = 10;
    this.headers = { ['Content-Type']: 'application/json' };
  }
  async getCommentsAll() {
    try {
      const res = await fetch(this.baseUrl);
      const comments = await res.json();
      return comments;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get all comments from server');
    }
  }
  async getCommentsByPage({ page }) {
    try {
      const res = await fetch(`${this.baseUrl}?_page=${page}&_limit=${this.limit}`);
      const comments = await res.json();
      return comments;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get comments by page from server');
    }
  }
  async getAComment(id) {
    try {
      const res = await fetch(`${this.baseUrl}/${id}`);
      const aComment = await res.json();
      return aComment;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get a comment from server');
    }
  }
  async createAComment(form) {
    try {
      await fetch(this.baseUrl, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: this.headers,
      });
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create a comment');
    }
  }
  async updateAComment(id, form) {
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: this.headers,
      });
    } catch (err) {
      console.error(err);
      throw new Error('Failed to update a comment');
    }
  }
  async deleteAComment(id) {
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
      throw new Error('Failed to delete a comment');
    }
  }
}

const commentApi = new CommentApi();
export default commentApi;
