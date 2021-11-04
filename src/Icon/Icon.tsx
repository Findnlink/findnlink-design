import React from "react";
import { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

const Icon = ({ icon, color }: IconProps) => {

// switch (icon) {
//     case "add":
//         return <svg xmlns="http://www.w3.org/2000/svg" width="8.423" height="8.423" viewBox="0 0 8.423 8.423">
//   <g id="Component_33_1" data-name="Component 33 – 1" transform="translate(1 1)">
//     <line id="Line_845" data-name="Line 845" x2="6.423" transform="translate(0 3.211)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="2"/>
//     <line id="Line_846" data-name="Line 846" x2="6.423" transform="translate(3.211) rotate(90)" fill="none" stroke="#696969" stroke-linecap="round" stroke-width="2"/>
//   </g>
// </svg>

//         break;

//     default:
//         break;
// }

  return (
    <div data-testid={'Icon'} className={styles.foo}>
      {icon}
    </div>
  )
}

export default Icon