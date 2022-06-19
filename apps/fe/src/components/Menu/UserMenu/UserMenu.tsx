import { ComponentNavigationNavigationLink, Maybe } from '@codeek-netflix/bff-service';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import React, { ForwardRefExoticComponent, ForwardedRef, PropsWithoutRef, RefAttributes, forwardRef, useState } from 'react';
import { getIconByName } from '../../../utils/getIconByName';
import { Avatar } from '../../Avatar/Avatar';
import { Icon, IconSize } from '../../Icon/Icon';
import { RouterLink } from '../../RouterLink/RouterLink';
import { Separator } from '../../Separator/Separator';
import styles from './UserMenu.module.scss';
import { UserMenuProps } from './UserMenu.types';

const cx = classNames.bind(styles);

export const UserMenu: ForwardRefExoticComponent<PropsWithoutRef<UserMenuProps> & RefAttributes<HTMLDivElement>> = forwardRef(
    ({ menu, handleEscKey }: UserMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        const [isOpen, setIsOpen] = useState(false);
        const arrowDownIcon = getIconByName('ic12-arrow-down');
        const arrowUpIcon = getIconByName('ic20-arrow-up');

        const prepareDataToRenderList = (
            list: Maybe<ComponentNavigationNavigationLink> | Array<Maybe<ComponentNavigationNavigationLink>>,
            avatarSrc = '',
            centeredLabel = false,
        ) => {
            return Array.isArray(list) ? renderLinksList(list, avatarSrc, centeredLabel) : renderLinksList([list], avatarSrc, centeredLabel);
        };

        const renderLinksList = (list: Array<Maybe<ComponentNavigationNavigationLink>>, avatarSrc = '', centeredLabel = false) => {
            return (
                <>
                    {list?.map(listItem => {
                        return listItem && listItem.path ? (
                            <RadixNavigationMenu.Item role="listitem" key={listItem.label} className={styles.listItem}>
                                <RouterLink
                                    link={{
                                        id: listItem.id,
                                        path: listItem.path,
                                    }}
                                >
                                    <RadixNavigationMenu.Link className={styles.listItemLink} href={listItem.path}>
                                        {avatarSrc && <Avatar size="small" src={avatarSrc} />}
                                        {listItem.icon && <Icon>{getIconByName(listItem.icon)}</Icon>}
                                        {listItem.label && <span className={cx(styles.listItemLabel, centeredLabel && styles.centered)}>{listItem.label}</span>}
                                    </RadixNavigationMenu.Link>
                                </RouterLink>
                            </RadixNavigationMenu.Item>
                        ) : null;
                    })}
                </>
            );
        };

        return (
            // <Focusable enabled={isOpen} shards={[ref as HTMLElement | RefObject<HTMLDivElement>]} onEscapeKey={handleEscKey}>
            <div ref={ref} aria-expanded={isOpen} className={styles.userMenu}>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className={styles.trigger}>
                    <div className={styles.triggerContent}>
                        <div className={styles.avatar}>
                            <Avatar src="/avatar.png" size="small" />
                        </div>
                        <div className={cx(styles.triggerCaret, isOpen && styles.triggerCaretOpen)}>
                            <Icon size={IconSize.xsmall}>{arrowDownIcon}</Icon>
                        </div>
                    </div>
                </button>
                <div className={cx(styles.menu, isOpen && styles.menuOpen)}>
                    <div className={styles.contentCaret}>
                        <Icon>{arrowUpIcon}</Icon>
                    </div>
                    <RadixNavigationMenu.Root className={styles.content} aria-expanded={isOpen}>
                        <RadixNavigationMenu.List role="list" className={styles.list}>
                            <RadixNavigationMenu.Item role="listitem" className={styles.listItem}>
                                <RouterLink
                                    link={{
                                        id: '',
                                        path: '/',
                                    }}
                                >
                                    <>
                                        <Avatar src="/avatar2.png" size="small" />
                                        <span className={styles.listItemLabel}>Ania</span>
                                    </>
                                </RouterLink>
                            </RadixNavigationMenu.Item>
                            <RadixNavigationMenu.Item role="listitem" className={styles.listItem}>
                                <RouterLink
                                    link={{
                                        id: '',
                                        path: '/',
                                    }}
                                >
                                    <>
                                        <Avatar src="/avatar3.png" size="small" />
                                        <span className={styles.listItemLabel}>Dzieci</span>
                                    </>
                                </RouterLink>
                            </RadixNavigationMenu.Item>

                            {menu.accounts && prepareDataToRenderList(menu?.accounts)}
                        </RadixNavigationMenu.List>

                        <Separator customClass={styles.separator} />

                        <RadixNavigationMenu.List role="list" className={styles.list}>
                            {menu?.settings && prepareDataToRenderList(menu.settings)}
                        </RadixNavigationMenu.List>

                        <Separator customClass={styles.separator} />

                        <RadixNavigationMenu.List role="list" className={styles.list}>
                            {menu?.logout && prepareDataToRenderList(menu.logout, '', true)}
                        </RadixNavigationMenu.List>
                    </RadixNavigationMenu.Root>
                </div>
                {/*// </Focusable>*/}
            </div>
        );
    },
);

UserMenu.displayName = 'UserMenu';
