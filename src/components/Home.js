import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
  <div className='home'>
      <div className='home__container'>
          <img 
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.png"
          alt="hero banner" />

        <div className='home__row'>
            <Product 
                id="12321341"
                title="Book"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5} />
            <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for baking"
                price={239.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71Bd8BPk6gL._AC_UY327_FMwebp_QL65_.jpg"
            />
        </div>
        <div className='home__row'>
            <Product 
                id="4903850"
                title="Samsung 49' curved gaming monitor"
                price={1299.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY327_FMwebp_QL65_.jpg"
                />
            <Product 
                id="23445930"
                title="Amazon echo (4th gen)"
                price={98.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY327_FMwebp_QL65_.jpg"/>
            <Product 
                id="89359872"
                title="Apple iPad Pro"
                price={595.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>
        <div className='home__row'>
            <Product 
                id="690305"
                title="iPhone 13 Pro Max"
                price={1200.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>
      </div>
  </div>
)}

export default Home;
