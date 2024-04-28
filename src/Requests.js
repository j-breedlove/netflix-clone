// eslint-disable-next-line no-undef
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log("API", TMDB_API_KEY);
// eslint-disable-next-line no-undef
if (!process.env.REACT_APP_TMDB_API_KEY) {
  console.error("REACT_APP_TMDB_API_KEY is not set");
  // eslint-disable-next-line no-undef
  process.exit(1);
}
// eslint-disable-next-line no-undef
