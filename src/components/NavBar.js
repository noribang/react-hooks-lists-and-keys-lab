import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // console.log(links[0])

  /* Map through links array and dynamically create <a> elements. */
  const navLinks = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>
  });
  
  return (
          <nav>{/* display an <a> tag for each link here */}
            {/* Created manually.
                <a href={"#"+links[0]}>{links[0]}</a>  
                <a href={"#"+links[1]}>{links[1]}</a> 
                <a href={"#"+links[2]}>{links[2]}</a>  */}
            {navLinks}
          </nav>

  );
  
}

export default NavBar;
