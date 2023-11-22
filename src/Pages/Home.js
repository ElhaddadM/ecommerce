import React from 'react'
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import LatestProducts from "../Components/LatestProducts";
import Footer from "../Components/Footer";
function Home() {
  return (
    <div>
        <Slider />
      <div className="container my-3">
        <div className="row">
          <h1 className="text-start">Categories</h1>
          <Categories/>
        </div>
        <div className="row">
          <h1 className="text-start my-4" >Nouveaux Produits</h1>
          <LatestProducts/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home