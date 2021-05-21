import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
	fetch: async function ( size ) {
		const res = await axios.get(
			'https://randomuser.me/api/?results=' + size
		);
		console.log( `res table`, res );
    return res;
  }, 
	search: async function ( query ) {
		const res = await axios.get('https://dog.ceo/api/breed/' + query + '/images');
		// console.log( `res search`, res );
    return res;
  }, 
	random: async function () {
		const res = await axios.get('https://dog.ceo/api/breeds/image/random');
		// console.log( `res random`, res );
    return [res.data.message];
  }
};

export default API;
