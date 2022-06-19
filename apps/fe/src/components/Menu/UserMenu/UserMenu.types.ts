import { ComponentMenuUserMenu } from '@codeek-netflix/bff-service';

export interface UserMenuProps {
    menu: ComponentMenuUserMenu;
    handleEscKey: () => void;
}
