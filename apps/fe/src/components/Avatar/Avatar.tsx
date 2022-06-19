import { Image, Root } from '@radix-ui/react-avatar';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

const cx = classNames.bind(styles);

export const Avatar: FC<AvatarProps> = ({ size = 'small', src }: AvatarProps) => {
    const getImage = () => {
        switch (size) {
            case 'large':
                return <Image src={src} width={192} height={192} />;
            case 'medium':
                return <Image src={src} width={60} height={60} />;
            case 'small':
                return <Image src={src} width={32} height={32} />;
        }
    };

    return (
        <Root>
            <div className={cx(styles.avatar, styles[size])}>{getImage()}</div>
        </Root>
    );
};
