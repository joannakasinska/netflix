import React, { FC } from 'react';
import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({ children }: FooterProps) => {
    return <footer>{children}</footer>;
};
