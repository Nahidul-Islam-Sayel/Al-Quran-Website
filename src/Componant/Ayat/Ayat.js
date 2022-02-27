import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
const Ayat = () => {
    const{id}= useParams();
    const[Data,setData]= useState([]);
useEffect(()=>{

    fetch(`https://api.quran.sutanlab.id/surah/${id}`)
    .then(data=>data.json())
    .then(data=>setData(data))
    console.log(Data.data)
     console.log(Data.data&&Data.data.verses.map(data=>{console.log(data.text.arab)}))
},[])
     console.log(id)
    return (
        <div className="card">
             <ul class="list-group list-group-flush">
            { id>=2&& <li class="list-group-item text-center">
                  <h3>{Data.data&&Data.data.preBismillah.text.arab}</h3>
                  <h3>{Data.data&&Data.data.preBismillah.text.transliteration.en}</h3>
                 
                  <p>{Data.data&&Data.data.preBismillah.translation.en}</p>
                 {Data.data&& <audio controls>
                
  <source src={Data.data.preBismillah.audio.primary} type="audio/ogg"/>
  <source src={Data.data.preBismillah.audio.primary} type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
}
                </li>}
             <li class="list-group-item text-center">
                  <h4>{Data.data&&Data.data.name.long}</h4>
                  <h4>{Data.data&&Data.data.name.transliteration.en}</h4>
                  <h4>{Data.data&&Data.data.name.translation.en}</h4>
               
                </li>
    {Data.data &&Data.data.verses.map(data=>
              <li class="list-group-item">
                  <h3>{data.text.arab}</h3>
                  <h5>{data.text.transliteration.en}</h5>
                  <p>{data.translation.en}</p>
                  <audio controls>
                
  <source src={data.audio.primary} type="audio/ogg"/>
  <source src={data.audio.primary} type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
                </li>
        )}
       
    
        </ul>
      </div>
    );
};

export default Ayat;