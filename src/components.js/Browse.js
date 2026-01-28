import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <header className="fixed top-0 w-full h-[68px] flex items-center px-10 z-50 bg-black">
        <Header />
        <BrowseHeader />
      </header>
      <main className="pt-[68px]">
        <MainContainer />
        <SecondaryContainer />
      </main>
    </div>
  );
};

export default Browse;
