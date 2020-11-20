import axios from 'axios';

const clientId = 'we8gErLJCZ8bek19KTGJlWx9oXvUNG2K3tXuFF9U';
const clientSecret = 'QSwDkPUN6fOS9X38SHF28CF9W96lWLINcKaXPhlXL2UBd4I1KtWlsZQu71r0G4DCYnAQ9E73e8UPOINyM6clRiDJJDy8hhr23IazMBB28wa9asWPmtLelNGdCepkK9h1';
const qs = require('querystring');

export async function getAccessToken(userData) {
  const logInData = userData;
  logInData.client_id = clientId;
  logInData.client_secret = clientSecret;
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const response = await axios.post('http://localhost:8000/o/token/', qs.stringify(logInData), config);
  return response.data;
}

export async function postUser(data) {
  const response = await axios.post('http://localhost:8000/people/', data);
  return response.data;
}

export async function getPosts() {
  const response = await axios.get('http://localhost:8000/posts/');
  return response.data.slice().reverse();
}

export async function getPost(id) {
  const finalUrl = `http://localhost:8000/posts/${id}/`;
  const response = await axios.get(finalUrl);
  return response.data;
}
