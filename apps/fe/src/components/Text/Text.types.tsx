import { ReactNode } from 'react';

export type Size = 'inherit' | 'h1100' | 'h1000' | 'h900' | 'h800' | 'h700' | 'h600' | 'h500' | 'h400' | 'h300' | 'h200' | 'h100';

export interface TextProps {
    size?: Size;
    children?: ReactNode;
    tag?: TextTags;
    align?: Align;
    ellipsis?: number;
}

export type Align = 'left' | 'center' | 'right';

export type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'strong' | 'span' | 'li';
