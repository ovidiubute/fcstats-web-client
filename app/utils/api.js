
let apiUrl;
if (ENV.API_HTTPS) {
  apiUrl = 'https://' + ENV.API_ENDPOINT + '/api';
} else {
  apiUrl = 'http://' + ENV.API_ENDPOINT + ':' + ENV.API_PORT + '/api';
}

export { apiUrl }
