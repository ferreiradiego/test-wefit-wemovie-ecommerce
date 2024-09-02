import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";
import { ErrorMessage, GridContainer } from "./styles";

const fetchData = async (): Promise<Array<Movie> | null> => {
  try {
    const response = await fetch("https://wefit-movies.vercel.app/api/movies");
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error("Erro ao buscar os filmes");
    return data.products;
  } catch (error) {
    // console.error("Ocorreu um erro ao buscar os filmes", error);
    return null;
  }
};

const Home = async () => {
  const movies = await fetchData();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(movies);

  if (!movies) {
    return (
      <ErrorMessage>
        <h1>Ocorreu algum erro ao buscar os Filmes!</h1>
      </ErrorMessage>
    );
  }

  return (
    <GridContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridContainer>
  );
};

export default Home;
