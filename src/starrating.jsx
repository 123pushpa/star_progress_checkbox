import React, { useState } from 'react';
import './starrating.css';

export default function Star_Rating() {
  const [rating, setRating] = useState();
  let arr = new Array(5).fill(0);

  console.log(rating);

  return (
    <div className="conatiner">
      {arr.map((el, index) => {
        return (
          <span
            key={index}
            onClick={() => setRating(index)}
            style={{
              padding: '20px',
              height: '40px',
              width: '40px',
              fontSize: '50px',
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
