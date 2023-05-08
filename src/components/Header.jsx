import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
   <>
    <nav>
      Get Ready To Complete Your Daily Goals
    </nav>

{/* If we create the links using anchor tag the page
gets reloaded upon clicking the anchor link i.e Home, About, Contact 

Then there is no advantage of using single page application using react

We have to use link tag instead of the anchor tag
the link tag is present in the react-router-dom
package

We need to wrap the App with the Router Component

*/}
    {/* <div className='header'>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>

    </div> */}


    <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/tempId">User</Link>

    </div>

   </>
  )
}

export default Header;
