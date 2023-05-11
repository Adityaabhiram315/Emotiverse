const fetch = require('node-fetch');

const url = 'https://emodex-emotions-analysis.p.rapidapi.com/rapidapi/emotions';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '28a34a8ffamshddb9051996fa6d0p1410a7jsne3aa9dc81cd8',
    'X-RapidAPI-Host': 'emodex-emotions-analysis.p.rapidapi.com'
  },
  body: {
    sentence: 'Cakes make me happy 🎂'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}