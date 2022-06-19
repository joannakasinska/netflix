import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import { getIconByName } from '../../utils/getIconByName';
import { ButtonText } from '../ButtonText/ButtonText';
import { IconButton } from '../IconButton/IconButton';
import { NavigationMenu } from '../Menu/NavigationMenu/NavigationMenu';
import { UserMenu } from '../Menu/UserMenu/UserMenu';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

const cx = classNames.bind(styles);

export const Header: FC<HeaderProps> = ({ header, sticky = false }: HeaderProps) => {
    console.log(header);

    return (
        <header className={cx(styles.container, sticky && styles.sticky)}>
            <div className={styles.left}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <Image src="/logo.svg" alt="logo" layout="fill" />
                    </div>
                </div>
                {header?.navigationMenu && <NavigationMenu menu={header.navigationMenu} />}
            </div>
            <ul className={styles.right}>
                <li>
                    <IconButton label={header?.searchButton?.label}>{getIconByName(header?.searchButton?.icon)}</IconButton>
                </li>
                <li className={styles.kidsLink}>
                    <ButtonText size="small">{header?.kidsLink?.label}</ButtonText>
                </li>
                <li>
                    <IconButton label={header?.notificationsButton?.label}>{getIconByName(header?.notificationsButton?.icon)}</IconButton>
                </li>
                <li>{header?.userMenu && <UserMenu menu={header.userMenu} handleEscKey={() => {}} />}</li>
            </ul>
        </header>
    );
};
