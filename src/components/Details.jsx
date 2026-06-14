import { useParams } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";

const Details = () => {
  const { id } = useParams();

  return (
    <section>
      <Header />
      Details page for {id}
      <MobileNav />
    </section>
  );
};

export default Details;
