import axios from 'axios';

class RequestService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  createAxios() {
    if (this.instance) return this.instance;
    this.instance = axios.create({ baseURL: `${this.baseURL}` });
    return this.instance;
  }

  async get(url, data) {
    const axios = this.createAxios();
    return await axios.get(url, data);
  }

  async post(url, data) {
    const axios = this.createAxios();
    return await axios.post(url, data);
  }

  async put(url, data) {
    const axios = this.createAxios();
    return await axios.put(url, data);
  }

  async delete(url, data) {
    const axios = this.createAxios();
    return await axios.delete(url, data);
  }
}

export default RequestService;
