import CartContent from "@/components/CartContent";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

const Home = async () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Viúva Negra",
      price: 9.99,
      image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
    },
    {
      id: 2,
      title: "Shang-chi",
      price: 30.99,
      image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png",
    },
    {
      id: 3,
      title: "Homem Aranha",
      price: 29.9,
      image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png",
    },
    {
      id: 5,
      title: "Morbius",
      price: 1.5,
      image: "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png",
    },
    {
      id: 6,
      title: "Batman",
      price: 21.9,
      image: "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png",
    },
    {
      id: 4,
      title: "Eternos",
      price: 17.9,
      image: "https://wefit-react-web-test.s3.amazonaws.com/eternals.png",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(movies);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
