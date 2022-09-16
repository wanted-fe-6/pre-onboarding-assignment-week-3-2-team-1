class CommentApi {
  constructor() {
    this.baseUrl = 'http://localhost:4000/comments';
  }
  async getComments() {
    try {
      const res = await fetch(this.baseUrl);
      const comments = await res.json();
      return comments;
    } catch (err) {
      throw new Error('Failed to get comments from server');
    }
  }
  async getAComment(id) {
    try {
      const res = await fetch(`${this.baseUrl}/${id}`);
      const aComment = await res.json();
      return aComment;
    } catch (err) {
      throw new Error('Failed to get a comment from server');
    }
  }
  async createAComment() {}
  async deleteAComment() {}
  async updateAComment() {}
}

const commentApi = new CommentApi();
export default commentApi;
