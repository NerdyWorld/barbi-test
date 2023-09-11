import React, { useState } from "react";
import CarouselCollection from "./carouselCollection";
import { useNavigate, useParams } from "react-router-dom";
import { brandsData } from "./brandsData";


const Collection = () => {
  const navigate = useNavigate()
  const { name } = useParams();
  const brand = brandsData[name];
  if(!brand) {
    return <p>Not found any brand</p>
  }

return(
  <div className="collection-container">
    <p className='seeAll-collection' onClick={() => navigate('/seeAll/:name')}>See All</p>
    <h2 className="collection-brandName">{brand.brandName}</h2>
    <h3 className="collection-name">{brand.name}</h3>
    <CarouselCollection collections={brand.collections} />
  </div>
)
}

export default Collection;
