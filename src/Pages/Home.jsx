import Cards from "../Components/Cards";
// import Carousel from "../Components/Carousel";
import FAQ from "../Components/FAQ";
import GenreSelector from "../Components/GenreSelector";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";
import Section from "../Components/Section";
import requests from "../const/request";

export default function Home() {
  return (
    <div className="bg-b1 h-full min-h-screen overflow-hidden">
      <NavBar />
      <HomeBanner />
      <Cards />
      <div>
        <Section url={requests.fetchTopAlbum} title="Top Albums" />
        <Section url={requests.fetchNewAlbum} title="New Albums" />
      </div>
      <GenreSelector />
      <FAQ />
    </div>
  );
}
