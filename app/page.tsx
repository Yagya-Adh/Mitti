import PictureGroup from "./components/home/PictureGroup";
import FeaturedCategories from "./components/home/FeaturedCategories";
import AutoSlide from "./components/home/AutoSlide";
import BestSellProduct from "./components/home/BestSellProduct";
import LatestArticle from "./components/home/LatestArticle";
export default function Home() {
  return (
    <>
      <PictureGroup />
      <FeaturedCategories />
      <AutoSlide />
      <BestSellProduct />
      <LatestArticle />
    </>
  );
}
