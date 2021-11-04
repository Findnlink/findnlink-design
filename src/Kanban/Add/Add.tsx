import React from "react";
import { AddProps } from "./Add.types";
import styles from "./Add.module.scss";
import { HiPlus } from 'react-icons/hi';

const Add = ({ text, color }: AddProps) => {
  return (
    <button data-testid={'Add'} className={styles.add} style={{color: color}}>
      <HiPlus /> {text}
    </button>
  )
}

export default Add