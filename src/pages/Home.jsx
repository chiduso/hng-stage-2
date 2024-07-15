import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Tab from "../components/Tab";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProduts] = useState([]);
  const [size, setSize] = useState(10)
  useEffect(() => {    
    fetch(`https://timbu-get-all-products.reavdev.workers.dev/?organization_id=fa97294b5b044c6fbd09a48fd9aa8566&page=1&size=${size}&Appid=2PE59FPJFGKR3IL&Apikey=650134ab568c4f94990db98b7507664e20240712183420224761`)
    .then(res => {
      return res.json();
    })
    .then(data => {      
   setProduts(data.items.map(item =>({
    id: item.id,
    title: item.name,     
    price: item.current_price[0].NGN[0],
    coverImg: "https://api.timbu.cloud/images/" + item.photos[0].url,      
   })))
    })
  }, [size]);
  
  const product = products.map((data) => {
    return <Product key={data.id} data={data} />;
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
{
  (products && size < 30) && (
    <div className="container my-3 text-center ">
    <button className="btn cart-btn" onClick={
      () => {
        setSize(30);
      }
    }>
      View All
    </button>
  </div>
  )
}
      </section>

      <Footer />
    </>
  );
}

export default Home;
