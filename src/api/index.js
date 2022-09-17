import axios from 'axios';
const apiUrl = 'http://localhost:4000';

class apiModel {
  static getComments = async endpoint => {
    const result = await axios.get(apiUrl + endpoint);
    console.info(result.data);
    return result.data;
  };
}

export default apiModel;
