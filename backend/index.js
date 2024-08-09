const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://leetcode-api.p.rapidapi.com/user/ds8987765',
  params: {
    skip: '3',
    limit: '10'
  },
  headers: {
    'x-rapidapi-key': '4a2af98d4amsh61f2c072058dc9fp1595ddjsnac000aea2c89',
    'x-rapidapi-host': 'leetcode-api.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.getUserInfo());
} catch (error) {
	console.error(error);
}