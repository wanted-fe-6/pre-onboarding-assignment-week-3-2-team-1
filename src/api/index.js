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
      console.info('비동기 에러');
    }
  };

  static getCommentsLength = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/comments`);
      return data.length;
    } catch (e) {
      console.info('비동기 에러');
    }
  };

  static getComment = async (endpoint, commentId) => {
    const { data } = await axios.get(apiUrl + '/' + endpoint + '/' + commentId);
    return data;
  };
}

export default apiModel;
