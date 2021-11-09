import React from 'react'
import { IconProps } from './Icon.types'
import styles from './Icon.module.scss'

const Icon = ({ icon, color }: IconProps) => {
  const returnSVG = () => {
    switch (icon) {
      case 'add':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.423"
            height="8.423"
            viewBox="0 0 8.423 8.423"
          >
            <g id="Component_33_1" data-name="Component 33 – 1" transform="translate(1 1)">
              <line
                id="Line_845"
                data-name="Line 845"
                x2="6.423"
                transform="translate(0 3.211)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
              <line
                id="Line_846"
                data-name="Line 846"
                x2="6.423"
                transform="translate(3.211) rotate(90)"
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        )
      case 'itemMenu':
        return (
          <svg
            id="Component_31"
            data-name="Component 31"
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="13"
            viewBox="0 0 3 13"
          >
            <circle
              id="Ellipse_1201"
              data-name="Ellipse 1201"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3) rotate(90)"
              fill="var(--text300)"
            />
            <circle
              id="Ellipse_1202"
              data-name="Ellipse 1202"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3 5) rotate(90)"
              fill="var(--text300)"
            />
            <circle
              id="Ellipse_1203"
              data-name="Ellipse 1203"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(3 10) rotate(90)"
              fill="var(--text300)"
            />
          </svg>
        )
      default:
        return <svg></svg>
    }
  }

  return returnSVG()
}

export default Icon
