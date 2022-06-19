import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Text.module.scss';
import { TextProps } from './Text.types';

const cx = classNames.bind(styles);

export const Text: FC<TextProps> = ({ size = 'h400', tag = 'p', align, children, ellipsis }: TextProps) => {
    const TagName = tag;

    return (
        <TagName
            style={ellipsis ? { maxWidth: ellipsis } : undefined}
            className={cx(styles[size], {
                [styles.alignLeft]: align === 'left',
                [styles.alignCenter]: align === 'center',
                [styles.alignRight]: align === 'right',
                [styles.ellipsis]: ellipsis,
            })}
        >
            {children}
        </TagName>
    );
};
