import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";
import { ErrorMessage, GridContainer } from "./styles";

const fetchData = async (): Promise<Array<Movie> | null> => {
  try {
    const response = await fetch(`${process.env.API_URL as string}/movies`, {
      cache: "no-store",
    });
    const data = await response.json();

    // Used to simulate a slow connection
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return data.products;
  } catch (error) {
    return null;
  }
};

const Home = async () => {
  const movies = await fetchData();

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
