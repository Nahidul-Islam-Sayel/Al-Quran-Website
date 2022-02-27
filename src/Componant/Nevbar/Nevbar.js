import React from 'react';
import './Nevbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Nevbar = () => {
    return (
     
        <div class="container">
        <div class="row">
          <div class="col">
          <h1 class="header-title">Al Quran</h1>
            <h3 class="header-subtitle">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</h3>
          
  
           
            {/* <div>
              <a href="" class="banner-btn"> আরো দেখুন </a>
            </div> */}
          </div>
        </div>
      </div>
    
    );
};

export default Nevbar;