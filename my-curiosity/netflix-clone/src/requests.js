const API_KEY = "71c2d80bf84dee3063aeb60907598a84";

const requests = {
    fetchTreanding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
}

export default requests;