import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tab from "../components/Tab";
import Product from "../components/Product";
import Footer from "../components/Footer";
import ProductData from "../components/ProductData";
import CartPage from "./Cart";

function Home() {
  const product = ProductData.map((data) => {
    return <Product key={data.id} data={data} />;
  });
  const cartPageProduct = ProductData.map((data) => {
    return <CartPage key={data.id} data={data} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Tab />
      <section className="my-5">
        <div className="container p-0">
          <div className="product-group gap-5">{product}</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
