import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, PropsWithChildren } from 'react';
import { getIconByName } from '../../utils/getIconByName';
import { Avatar } from '../Avatar/Avatar';
import { ButtonText } from '../ButtonText/ButtonText';
import { IconButton } from '../IconButton/IconButton';
import { NavigationMenu } from '../Menu/NavigationMenu/NavigationMenu';
import { Popover } from '../Popover/Popover';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

const cx = classNames.bind(styles);

export const Header: FC<HeaderProps> = ({ header, sticky = false }: HeaderProps) => {
    const magnifierIcon = getIconByName('ic24-magnifier');
    const bellIcon = getIconByName('ic24-bell');

    return (
        <header className={cx(styles.container, sticky && styles.sticky)}>
            <div className={styles.left}>
                <Image src="/logo.svg" alt="logo" width="93" height="31" />
                {header?.navigationMenu && <NavigationMenu menu={header.navigationMenu} />}
            </div>
            <div className={styles.right}>
                <IconButton label="search">{magnifierIcon}</IconButton>
                <ButtonText size="small">{'Dzieci'}</ButtonText>
                <IconButton label="search">{bellIcon}</IconButton>
                <Popover />
            </div>
        </header>
    );
};
