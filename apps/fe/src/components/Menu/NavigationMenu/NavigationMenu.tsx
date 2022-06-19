import { ComponentNavigationNavigationLink } from '@codeek-netflix/bff-service';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import React, { FC, PropsWithChildren } from 'react';
import { RouterLink } from '../../RouterLink/RouterLink';
import styles from './NavigationMenu.module.scss';
import { NavigationMenuProps } from './NavigationMenu.types';

export const NavigationMenu: FC<PropsWithChildren<NavigationMenuProps>> = ({ menu }: NavigationMenuProps) => {
    return (
        <RadixNavigationMenu.Root>
            <RadixNavigationMenu.List className={styles.listContainer}>
                {menu?.links?.map((link: ComponentNavigationNavigationLink | null) => {
                    return link?.path ? (
                        <RadixNavigationMenu.Item key={link.label}>
                            <RouterLink link={link}>
                                <RadixNavigationMenu.Link className={styles.link} href={link.path}>
                                    {link.label}
                                </RadixNavigationMenu.Link>
                            </RouterLink>
                        </RadixNavigationMenu.Item>
                    ) : null;
                })}
            </RadixNavigationMenu.List>
        </RadixNavigationMenu.Root>
    );
};
