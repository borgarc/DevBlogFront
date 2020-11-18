import axios from 'axios';

export async function postUser(data) {
  const response = await axios.post('http://localhost:8000/people/', data);
  return response.data;
}

export async function getUser() {
  return '';
}
