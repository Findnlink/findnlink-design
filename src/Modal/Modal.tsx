import React, { useEffect, useState } from 'react'
import { ModalProps } from './Modal.types'
//@ts-ignore
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'
import { Icon } from '../Icon/Icon'

export const Modal = ({ children, open, onClose, selector }: ModalProps) => {
  function handleChildClick(e: any) {
    // Cancel onClose
    e.stopPropagation()
  }
  return (
    <div
      onClick={() => onClose()}
      className={open ? styles.modal + ' ' + styles.open : styles.modal + ' ' + styles.closed}
    >
      <div onClick={handleChildClick} className={styles.inner}>
        {children}
        <div className={styles.close} onClick={() => onClose()}>
          <Icon icon={'cross'} color={'white'} />
        </div>
      </div>
    </div>
  )
}
