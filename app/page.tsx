import Footer from "./components/footer/Footer";
import PictureGroup from "./components/home/PictureGroup";
import MarqueeCard from "./components/marquee/MarqueeCard";
import NavBar from "./components/nav/NavBar";
export default function Home() {
  return (
    <>
      <MarqueeCard />
      <NavBar />
      <PictureGroup />
      <Footer />
    </>
  );
}
