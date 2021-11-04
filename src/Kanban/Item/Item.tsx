import React from "react";
import { ItemProps } from "./Item.types";
import styles from "./Item.module.scss";

const Item = ({ foo }: ItemProps) => {
  return (
    <div data-testid={'Item'} className={styles.foo}>
      {foo}
    </div>
  )
}

export default Item