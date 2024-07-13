import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailHeader from '../components/DetailHeader'
import Details from '../components/Details'
import Sidebar from '../components/Sidebar'

export default function DetailPage() {
 
  const { id } = useParams();
  const [productDetails, setProdutDetails] = useState();
const [isLoading, setIsLoading] = useState(false)
  useEffect( 
    ()=>{
  setIsLoading(true)      
      fetch(`https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=fa97294b5b044c6fbd09a48fd9aa8566&Appid=2PE59FPJFGKR3IL&Apikey=650134ab568c4f94990db98b7507664e20240712183420224761`)
    .then(res => {
      setIsLoading(false)
      return res.json();
    })
    .then(data => {
      console.log(data);
      setProdutDetails({
   id: data.id,
    title: data.name,     
    price: data.current_price,
    coverImg: "https://api.timbu.cloud/images/" + data.photos[0].url, 
    photos: data.photos.map(photo => ({
      ...photo,
      url: "https://api.timbu.cloud/images/" + photo.url
    }))
      })
    })
    }, [id]
  );
 
  return (
    <>
      <Sidebar />

      <div className="cart-page">
        <DetailHeader />
        {
        isLoading && (<img id='spinner' src='assets/img/spinner.svg' alt='' />)
        }
      {
        productDetails &&   <Details  data={productDetails}/>
      }

      </div>
    </>
  )
}
