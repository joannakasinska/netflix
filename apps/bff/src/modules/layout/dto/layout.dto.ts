import {
    ComponentFormButton,
    ComponentFormInput,
    ComponentMenuNavigationMenu,
    ComponentMenuUserMenu,
    ComponentNavigationNavigationLink,
    ComponentNotificationNotificationTile,
    Maybe,
} from '../../../../generated/strapiSchema';

export class LayoutHeader {
    navigationMenu?: Maybe<ComponentMenuNavigationMenu>;
    userMenu?: Maybe<ComponentMenuUserMenu>;
    searchButton?: Maybe<ComponentFormButton>;
    searchInput?: Maybe<ComponentFormInput>;
    notifications?: Maybe<Array<Maybe<ComponentNotificationNotificationTile>>>;
    notificationsButton?: Maybe<ComponentFormButton>;
    kidsLink?: Maybe<ComponentNavigationNavigationLink>;
}

export class LayoutDto {
    header?: LayoutHeader;
}
