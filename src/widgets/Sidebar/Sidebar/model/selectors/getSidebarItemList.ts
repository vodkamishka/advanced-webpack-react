import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '../../../../../entities/User';
import { SidebarItemType } from '../types/types';

export const getSidebarItemList = createSelector(
    getAuthData,
    (authData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (authData) {
            sidebarItemsList.push(
                {
                    path: `${RoutePath.profile}/${authData.id}`,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    withAuth: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    withAuth: true,
                },
            );
        }

        return sidebarItemsList;
    }
)