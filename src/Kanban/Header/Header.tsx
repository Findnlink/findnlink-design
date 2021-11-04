import React from "react";
import { HeaderProps } from "./Header.types";
import styles from "./Header.module.scss";

const Header = ({ text, color, itemCount }: HeaderProps) => {
  return (
    <div data-testid={'Header'} className={styles.header} style={{color: color}}>
      <div>
        {itemCount}
      </div>
      <div>
        {text}
      </div>
      <div>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
    </div>
  )
}

export default Header