import React, { FC } from 'react';
import styles from './A11yText.module.scss';
import { A11YTextProps } from './A11yText.types';

export const A11yText: FC<A11YTextProps> = ({ tag: TagName = 'span', children, ...props }: A11YTextProps) => {
    return (
        <TagName className={styles.a11y} {...props}>
            {children}
        </TagName>
    );
};
