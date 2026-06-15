import { useParams } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const Details = () => {
  const { id } = useParams();

  return (
    <section>
      <Header />
      Details page for {id}
      <MobileNav />
      <Footer />
    </section>
  );
};

export default Details;
