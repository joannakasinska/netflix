import classNames from 'classnames';
import React, { FC, PropsWithChildren, RefObject } from 'react';
import { Icon, IconSize } from 'components/Icon/Icon';
import { A11yText } from '../A11yText/A11yText';
import styles from './IconButton.module.scss';
import { IconButtonProps } from './IconButton.types';

const cx = classNames.bind(styles);

export const IconButton = React.forwardRef<HTMLButtonElement, PropsWithChildren<IconButtonProps>>(
    ({ variant = 'simple', size = 'large', active = false, disabled, children, onClick, label, ...props }: PropsWithChildren<IconButtonProps>, ref) => {
        return (
            <button
                ref={ref as RefObject<HTMLButtonElement>}
                className={cx(styles[variant], styles[size], active && styles.active)}
                aria-disabled={disabled}
                onClick={onClick}
                {...props}
            >
                <Icon size={variant === 'simple' ? IconSize.large : IconSize[size]}>{children}</Icon>
                <A11yText tag="span">{label}</A11yText>
            </button>
        );
    },
) as FC<PropsWithChildren<IconButtonProps>>;

IconButton.displayName = 'IconButton';
