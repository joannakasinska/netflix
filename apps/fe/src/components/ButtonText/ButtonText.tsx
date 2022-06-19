import classNames from 'classnames';
import React, { FC } from 'react';
import { Icon, IconSize } from '../Icon/Icon';
import styles from './ButtonText.module.scss';
import { ButtonTextProps } from './ButtonText.types';

const cx = classNames.bind(styles);

export const ButtonText: FC<ButtonTextProps> = ({ size = 'large', icon, iconPosition, href, disabled, children, ...props }: ButtonTextProps) => {
    const renderIcon = () =>
        icon && (
            <div className={cx(styles[size], styles[`${iconPosition}Icon`])}>
                <Icon size={IconSize[size]}>{icon}</Icon>
            </div>
        );

    const renderContent = () => (
        <>
            {icon && iconPosition === 'left' && renderIcon()}
            {children}
            {icon && iconPosition === 'right' && renderIcon()}
        </>
    );

    return href ? (
        <a className={styles[size]} aria-disabled={disabled} href={href} {...props}>
            {renderContent()}
        </a>
    ) : (
        <button className={styles[size]} aria-disabled={disabled} {...props}>
            {renderContent()}
        </button>
    );
};
