class Api {
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
  async getAComment() {}
  async createAComment() {}
  async deleteAComment() {}
  async updateAComment() {}
}

const api = new Api();
export default api;
