import Link from 'next/link';
import React, { FC } from 'react';
import { RouterLinkProps } from './RouterLink.types';

export const RouterLink: FC<RouterLinkProps> = ({ link, children }: RouterLinkProps) => {
    return (
        <Link href={link.path as string} passHref>
            {children}
        </Link>
    );
};
