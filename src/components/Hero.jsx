export default function Hero(){
  return(
    <section className="hero">
    <div className="container text-white mx-auto hero-content">
      <div className="row  align-items-center">
        <div className="col-lg-6 align-items-center">
          <div className="">
            <h1>ZENITH FURNITURE</h1>
            <h2>Where Quality Meet Comfort</h2>
            <p className="mb-4">Discover the epitome of epitome of elegance with Zenith Furniture. Our curated collection blend modern aesthetics ensuring each piece an expression of luxury and funtionality.</p>
            <button className="btn py-2 px-3 me-4  explore-btn">EXPLORE</button>
            <button className="btn py-2 px-3 disc-btn">DISCOVERY</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="assets/img/image 6.png" alt="" className="w-100" />
        </div>
      </div>
    </div>
  </section>
  )
}