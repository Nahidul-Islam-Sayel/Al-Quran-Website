import React, { useEffect, useState } from 'react';
import './Sura.css'
import Photo from '../Image/BG.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Sura = () => {
    const[Data,setData]= useState([]);
    useEffect(()=>{
        fetch('https://api.quran.sutanlab.id/surah')
        .then(data=>data.json())
        .then(data=>console.log(setData(data)))
        console.log(Data)
        // console.log(Data.data[0].name.transliteration.en)
        // console.log(Data.data[0].name.transliteration.en)
        //   console.log(Data.data.map(data=>data.name.long))
        
    },[])
    return (
        <div>
         
        <section className="services">
  <div className="services-title text-center">
 
  </div>

  <div className="section-center clearfix">
{
Data.data&&  Data.data.map(data=>
 <Link to={`Surah/${data.number}`}>
    <article className="service-card">
   
      <div className="service-img-container">

        <img src={Photo} className="service-img" alt="" />

        <span className="service-icon">
          <i className="fas fa-mortar-pestle fa-fw"></i>
        </span>
      </div>

      <div className="service-info">
    
        <h4 className="service-info-title">
          {data.name.long}
         
        </h4>
        <h4 className="service-info-title">
          {data.name.transliteration.en}
         
        </h4>
     
       
       
      </div>
    </article>

    </Link>
)}

  </div>
</section>
    </div>
    );
};

export default Sura;