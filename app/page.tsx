import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import SectionOne from "./component/Sections/SectionOne";
import SectionTwo from "./component/Sections/SectionTwo";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}
