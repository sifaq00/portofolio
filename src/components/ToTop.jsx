import React, { useState, useEffect } from "react";
import ArrowDown from "../assets/arrow-down.svg";

function ToTop() {
  const [toTop,setToTop] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkScrollTop = () => {
        if (!toTop && window.pageYOffset > 0){
            setToTop(true)
        } else if (toTop && window.pageYOffset <= 0){
            setToTop(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [checkScrollTop, toTop]);
  return (
    <div>
      <button className={`fixed block right-8 bottom-0 w-24 ${toTop ? 'flex' : 'hidden'}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={ArrowDown} alt="To Top" />
      </button>
    </div>
  );
}

export default ToTop;
