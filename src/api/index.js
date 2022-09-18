import axios from 'axios';
const apiUrl = 'http://localhost:4000';

class apiModel {
  static getComments = async page => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/comments?_page=${page}&_limit=4&_order=desc&_sort=id `
      );
      return data;
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };

  static getCommentsLength = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/comments`);
      return data.length;
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };

  static getComment = async commentId => {
    try {
      const { data } = await axios.get(`${apiUrl}/comments/${commentId}`);
      return data;
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };

  static postComment = async body => {
    try {
      const { data } = await axios.post(`${apiUrl}/comments`, { ...body });
      return data;
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };

  static putComment = async body => {
    try {
      const id = body.id;
      const { data } = await axios.put(`${apiUrl}/comments/${id}`, { ...body });
      return data;
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };

  static delComment = async commentId => {
    try {
      await axios.delete(`${apiUrl}/comments/${commentId}`);
    } catch (e) {
      throw new Error({ message: '비동기 연결 실패', errorMessage: e });
    }
  };
}

export default apiModel;
