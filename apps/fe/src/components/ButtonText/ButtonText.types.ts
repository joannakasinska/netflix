import { ReactNode } from 'react';

type BtnTextType = JSX.IntrinsicElements['button'] & JSX.IntrinsicElements['a'];

export interface ButtonTextProps extends BtnTextType {
    size: 'small' | 'medium' | 'large';
    icon?: ReactNode;
    iconPosition?: 'left' | 'right' | undefined;
    children?: ReactNode | string;
}
