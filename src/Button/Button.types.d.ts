import { HTMLAttributes, ReactNode } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Provide a text */
    children: ReactNode;
    /** Change the variant */
    primary?: boolean;
    /** Disable the button */
    disabled?: boolean;
}
