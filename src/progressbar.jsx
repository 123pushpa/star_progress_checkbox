// import React, { useState } from 'react';
// import './progressbar.css';

// export default function Progressbar() {
//   const [isScrollValue, setScrollValue] = useState(30);

//   // const handleScroll=(e)=>{

//   //   e.preventDefault();

//   //   const range=e.deltaY<0?5:-5;

//   //   setScrollValue(prev=>{
//   //     const newValue= Math.min(100,Math.max(0,prev+range))
//   //     return newValue;
//   //   })

//   // }

//   const handleScroll = (e) => {
//     e.preventDefault(); // prevent default scroll behavior
//     const delta = e.deltaY < 0 ? 5 : -5; // scroll up = increase, down = decrease
//     setScrollValue((prev) => {
//       const newValue = Math.min(100, Math.max(0, prev + delta));
//       return newValue;
//     });
//   };

//   // const delta = e.deltaY < 0 ? 5 : -5; // scroll up = increase, down = decrease
//   // setProgressValue(prev => {
//   //   const newValue = Math.min(100, Math.max(0, prev + delta));
//   //   return newValue;
//   // // const value = 50;

//   const progress = {
//     backgroundColor: 'red',
//     height: '100%',
//     width: `${isScrollValue}%`,
//     borderRadius: '16px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'end',
//   };
//   return (
//     <div className="container" onWheel={handleScroll}>
//       <div style={progress}>
//         <h1>{isScrollValue}%</h1>
//       </div>
//     </div>
//   );
// }

///aorrow up and arrow down

// import React, { useState, useEffect } from 'react';
// import './progressbar.css';

// export default function Progressbar() {
//   const [value, setValue] = useState(50);

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowUp') {
//       setValue(prev => Math.min(100, prev + 5));
//     } else if (e.key === 'ArrowDown') {
//       setValue(prev => Math.max(0, prev - 5));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   const progress = {
//     backgroundColor: 'red',
//     height: '100%',
//     width: `${value}%`,
//     borderRadius: '16px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     transition: 'width 0.2s ease',
//   };

//   return (
//     <div className="container" tabIndex={0}>
//       <div style={progress}>
//         <span>{value}%</span>
//       </div>
//     </div>
//   );
// }

//when chnage brwoser size

import React, { useState, useEffect } from 'react';
import './progressbar.css';

export default function Progressbar() {
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const percentage = Math.min(100, Math.round((width / 1920) * 100));
      setProgress(percentage);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const barStyle = {
    backgroundColor: 'red',
    height: '100%',
    width: `${progress}%`,
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'width 0.3s ease',
  };

  return (
    <div className="container">
      <div style={barStyle}>
        <span>{progress}%</span>
      </div>
    </div>
  );
}
