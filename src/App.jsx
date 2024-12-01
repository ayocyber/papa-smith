import Navbar from "./Component/Navbar"
import About from "./Pages/About"
import BestSale from "./Pages/BestSale"
import Card from "./Pages/Card"
import Discount from "./Pages/Discount"
import Footer from "./Pages/Footer"
import Herosection from "./Pages/Herosection"
import Services from "./Pages/Services"
import Subscribe from "./Pages/Subscribe"
import Testimonial from "./Pages/Testimonial"


function App() {

  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Card/>
      <Discount/>
      <Services/>
      <BestSale/>
      <Testimonial/>
      <Subscribe/>
      <Footer/>
      
    </div>
  )
}

export default App
