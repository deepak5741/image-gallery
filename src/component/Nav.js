import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/nav.css'


const Nav = () => {
    return (
     <>
  <nav>


<ul className="navUl">
<li  className="navLi">
<Link  className="Links" to="/">  
HOME
</Link>
</li>

<li className="navLi" >
<Link className="Links" to="/Gallery"> 
GALLERY
</Link>



</li>

{/* <li> */}
{/* //this  is fro default params */}
{/* <Link className="Links"  to="data/Deepak">
Data
</Link>
</li>


<li>
<Link className="Links" to="/Image">
    WALLPAPER
</Link>


</li> */}

</ul>

        </nav>
        
        </>
    )
}

export default Nav
