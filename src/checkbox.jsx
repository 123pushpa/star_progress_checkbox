import React, { useState } from 'react';

export default function Checkbox() {
  const [checkboxes, setCheckboxes] = useState([
    { name: 'TED', checked: false },
    {
      name: 'JOHN',
      checked: false,
    },
    {
      name: 'USER',
      checked: false,
    },
  ]);

  const handleChecked = (index) => {
    checkboxes[index].checked = !checkboxes[index].checked;
    setCheckboxes([...checkboxes]);
  };

  // const handleRemove = (index) => {
  //   let updated = [...checkboxes];
  //   updated.splice(index, 1);
  //   setCheckboxes(updated);
  // };

  const handleRemove = (index) => {
    checkboxes.splice(index, 1);
    setCheckboxes([...checkboxes]);
  };

  console.log('.....', checkboxes);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {checkboxes.map((el, index) => {
          return (
            <div style={{ display: 'flex' }} key={index}>
              <input type="checkbox" onClick={() => handleChecked(index)} />
              <li>
                {el.name}
                {el.checked ? (
                  <span
                    style={{
                      cursor: 'pointer',
                      marginLeft: '8px',
                      color: 'red',
                    }}
                    onClick={() => handleRemove(index)}
                  >
                    &#x2715;
                  </span>
                ) : (
                  ' '
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// //#x2715;

// import React from 'react';

// export default function Checkbox() {
//   const [arr, setArr] = useState([
//     { name: 'a', checked: false },
//     { name: 'b', checked: false },
//     { name: 'c', checked: false },
//   ]);

//   const handleClick = (index) => {
//     //flip value

//     arr[index].checked = !arr[index].checked;
//     setArr(arr);
//   };
//   return (
//     <div>
//       <ul style={{ display: none }}>
//         {arr.map((el, index) => {
//           return (
//             <div>
//               <input
//                 type="checkbox"
//                 checked={arr.checked}
//                 onClick={() => handleClick(index)}
//               />
//               <li>
//                 <span
//                   style={{ cursor: 'pointer', color: 'red', marginLeft: '5px' }}
//                   onClick={() => handleRemove(index)}
//                 >
//                   &#x275;
//                 </span>
//               </li>
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
