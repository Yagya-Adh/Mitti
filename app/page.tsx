import BestSellProduct from "./components/home/BestSellProduct";
import FeaturedCategories from "./components/home/FeaturedCategories";
import LatestArticle from "./components/home/LatestArticle";
import PictureGroup from "./components/home/PictureGroup";
export default function Home() {
  return (
    <>
      <PictureGroup />
      <FeaturedCategories />
      <BestSellProduct />
      <LatestArticle />
    </>
  );
}
