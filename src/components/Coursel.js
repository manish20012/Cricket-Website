import React from 'react'
import { useState } from 'react';

const Coursel = ({children}) => {
    const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % React.Children.count(children));
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  return (
    <div className="carousel">
      <button onClick={prevItem}>&lt;</button>
      <div className="carousel-item">
        {React.Children.toArray(children)[currentItem]}
      </div>
      <button onClick={nextItem}>&gt;</button>
    </div>
  );
}

export default Coursel
