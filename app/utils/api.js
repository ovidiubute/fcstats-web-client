
let apiUrl;
if (ENV.API_HTTPS) {
  apiUrl = 'https://' + ENV.API_ENDPOINT;
} else {
  apiUrl = 'http://' + ENV.API_ENDPOINT + ':' + ENV.API_PORT;
}

export { apiUrl }
