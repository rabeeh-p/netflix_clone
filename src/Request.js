// const key = process.env.REACT_APP_IMDB_API_KEY
// const key = '688e067184bb748d0ad0680ca259b4f3'
const key =process.env.REACT_APP_TMDB_API_KEY;

console.log(key,'keyyy');
console.log(process.env.REACT_APP_TMDB_API_KEY,'itemmmmmmmm'); // Should log the correct API key


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  };

  export default requests