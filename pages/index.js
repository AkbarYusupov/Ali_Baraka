import Swiper from "../component/Main/Swiper/index";
import Products from "../component/Main/products";
import AboutBottom from "../component/Main/About_bottom";
import Stories from '../component/Main/Stories/index'
import Form from '../component/Main/Form/index'
export default function Home() {
  return (
   <>
   <Swiper/>
  <div className="out_production">
  <Products/>
  <AboutBottom/>
  </div>
  <Stories/>
  <Form/>
   </>
  )
}
