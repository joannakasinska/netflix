import { gql } from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import { Query } from 'generated/strapiSchema';
import { StrapiService } from '../strapi/strapi.service';
import { LayoutDto } from './dto/layout.dto';

const QUERY = gql`
{
  layout {
    data {
      attributes {
        headerNavigationMenu {
          label
          links {
            actionId
            aria
            icon
            label
            path
          }
        }
        headerUserMenu {
          accounts {
            path
            aria
            label
            icon
            actionId
          }
          settings {
            path
            aria
            label
            icon
            actionId
          }
          logout {
            path
            aria
            label
            icon
            actionId
          }
        }
        headerSearchButton {
          icon
          label
        }
        headerSearchInput {
          name
          type
          label
          placeholder
        }
        headerNotificationsButton {
          label
          icon
        }
        headerNotifications {
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          textHeader
          textBody
          textAge
        }
        headerKidsLink {
          path
          label
        }
      }
    }
  }
}
`;

@Injectable()
export class LayoutService {
    public constructor(private readonly strapiService: StrapiService) {
    }

    public getLayout(): Observable<LayoutDto> {
        const strapiStream = from(this.strapiService.getClient.query<Query>({ query: QUERY }));

        return from(strapiStream).pipe(
            map(({ data }) => {
                return {
                    header: {
                        navigationMenu: data?.layout?.data?.attributes?.headerNavigationMenu,
                        userMenu: data?.layout?.data?.attributes?.headerUserMenu,
                        searchButton: data?.layout?.data?.attributes?.headerSearchButton,
                        searchInput: data?.layout?.data?.attributes?.headerSearchInput,
                        notificationsButton: data?.layout?.data?.attributes?.headerNotificationsButton,
                        notifications: data?.layout?.data?.attributes?.headerNotifications,
                        kidsLink: data?.layout?.data?.attributes?.headerKidsLink
                    }
                };
            })
        );
    }
}
