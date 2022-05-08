
import React, {useState} from 'react';
  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <a 
      id="back-to-top" 
      onClick={scrollToTop} 
      className="rounded"
      style={{display: visible ? 'inline' : 'none'}}
      role="button"
    >
        <i className="fa fa-chevron-up"></i>
        Button
    </a> 
  );
}
  
export default ScrollButton;