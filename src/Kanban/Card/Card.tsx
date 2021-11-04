import React from "react";
import { CardProps } from "./Card.types";
import styles from "./Card.module.scss";
import Add from "../Add/Add"

const Card = ({ foo }: CardProps) => {
  return (
    <div data-testid={'Card'} className={styles.foo}>
      {foo}
      <Add text="Add new" color="black" />
    </div>
  )
}

export default Card