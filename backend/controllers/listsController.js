const getMovieLists = async (req, res) => {
    const movies = await Content.find({ isSeries: false });
    const topPicksForMovie = movies.sort((a, b) => b.year - a.year).slice(0, 10);
    const moviesForYourFriendSteve = movies.find({limit: 18}).slice(0, 10);
    const kidFriendlyMovies = 
  };