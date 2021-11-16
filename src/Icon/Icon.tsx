import React from 'react'
import { IconProps } from './Icon.types'
//@ts-ignore
import styles from './Icon.module.scss'

export const Icon = ({ icon, color }: IconProps) => {
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
      case 'arrow':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.523"
            height="11.831"
            viewBox="0 0 8.523 11.831"
          >
            <line
              id="Line_867"
              data-name="Line 867"
              x2="3.798"
              y2="4.288"
              transform="translate(2.117 9.714) rotate(-90)"
              fill="none"
              stroke="#a7a8a8"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <line
              id="Line_868"
              data-name="Line 868"
              x1="3.798"
              y2="4.288"
              transform="translate(2.117 5.916) rotate(-90)"
              fill="none"
              stroke="#a7a8a8"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        )
      case 'cross':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.839"
            height="11.839"
            viewBox="0 0 11.839 11.839"
          >
            <line
              id="Line_869"
              data-name="Line 869"
              y2="10.742"
              transform="translate(9.717 2.122) rotate(45)"
              fill="none"
              stroke="var(--text300)"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <line
              id="Line_870"
              data-name="Line 870"
              y2="10.742"
              transform="translate(9.717 9.717) rotate(135)"
              fill="none"
              stroke="var(--text300)"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        )

      case 'edit':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.756"
            height="11.756"
            viewBox="0 0 11.756 11.756"
          >
            <path
              id="Icon_material-edit"
              data-name="Icon material-edit"
              d="M4.5,13.8v2.449H6.949L14.171,9.03,11.722,6.581ZM16.065,7.136a.65.65,0,0,0,0-.921L14.537,4.687a.65.65,0,0,0-.921,0l-1.2,1.2L14.87,8.331Z"
              transform="translate(-4.5 -4.496)"
              fill="var(--text300)"
            />
          </svg>
        )

      case 'remove':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.281"
            height="12.281"
            viewBox="0 0 12.281 12.281"
          >
            <path
              id="Icon_material-remove-circle"
              data-name="Icon material-remove-circle"
              d="M9.141,3a6.141,6.141,0,1,0,6.141,6.141A6.143,6.143,0,0,0,9.141,3Zm3.07,6.755H6.07V8.527h6.141Z"
              transform="translate(-3 -3)"
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
