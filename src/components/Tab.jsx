export default function Tab(){
  return(
    <section>
    <ul className="nav nav-underline tab-nav justify-content-center my-2">
      <li className="nav-item fw-semibold">
        <a className="nav-link active" aria-current="page" href="#">PRODUCT</a>
      </li>
      <li className="nav-item  fw-semibold">
        <a className="nav-link" href="#">TOP SELLER</a>
      </li>
      <li className="nav-item fw-semibold">
        <a className="nav-link" href="#">FEATURED</a>
      </li>      
      <li className="nav-item fw-semibold">
        <a className="nav-link" href="#">NEW ARRIVAL</a>
      </li>      
    </ul>
  </section>
  )
}