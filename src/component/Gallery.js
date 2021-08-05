import React, { useState } from 'react'
// import GalleryDis from './GalleryDis';
import '../Style/gallery.css'

const Gallery = () => {

const [Image, setImage] = useState( null);
function  getting(e) {
    setImage( e.target.value);
}

const result=`https://source.unsplash.com/1350x500?${Image}`
    return (
    
<div className="search">
<input  className="searching"  onChange={getting} placeholder="SEARCH" type="search" ></input>
<div className="img">
  { Image==null ?  null:<img src={result} alt="photo"></img>}
</div>
</div>
)
}
export default Gallery
