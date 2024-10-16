import Footer from "./components/footer/Footer";
import FeaturedCategories from "./components/home/FeaturedCategories";
import LatestArticle from "./components/home/LatestArticle";
import PictureGroup from "./components/home/PictureGroup";
import MarqueeCard from "./components/marquee/MarqueeCard";
import NavBar from "./components/nav/NavBar";
export default function Home() {
  return (
    <>
      <MarqueeCard variant="default-mitti" />
      <NavBar />
      <PictureGroup />
      <FeaturedCategories />
      <LatestArticle />
      <Footer />
    </>
  );
}
