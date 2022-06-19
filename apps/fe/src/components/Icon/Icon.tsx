import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.types';

export enum IconSize {
    xsmall = 'xsmall',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

const cx = classNames.bind(styles);

export const Icon: FC<PropsWithChildren<IconProps>> = ({ size, children }: PropsWithChildren<IconProps>) => {
    return (
        <span aria-hidden className={cx(styles.icon, size ? styles[size] : styles.fit)}>
            {children}
        </span>
    );
};
