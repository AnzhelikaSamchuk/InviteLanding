import { MenuKeys } from 'shared/enums/commonEnums';
import IMenu from 'shared/interfaces/IMenu';

export const BASE_PATH = {
  PERFORMANCE: '/performances',
  PARTNER: '/partners',
  GALLERY: '/galleries',
  CORPORATE_PARTICIPANTS: '/corporate-participants',
  CURRENT_CONFERENCE: '/current-conferences',
  NAVIGATION: '/pages-contents',
  LECTURES: '/lectures',
  TARIFF: '/tariffs',
  FOOTER: '/footers',
  PRESPEAKERS: '/pre-speakers',
  PARTICIPANTS: '/participants',
  SUCCESS_DIALOGS: '/success-dialogs',
  ADDITIONAL_INFORMATION: '/additional-informations',
  ABOUTUS: '/about-uses',
  KEY_SPEAKERS: '/key-speakers',
};

export const TARIFF_KEYS = {
  KEY_FREE_CONFERENCES: 'key_free_conference',
  CORPORATE: 'corporate_participation',
  BASE: 'base_tariff',
};

export const ARCHIVE = {
  ARCHIVEPERFORMANCES: '/docs/demo.html?year=',
};

export const MenuItems: IMenu[] = [
  {
    key: MenuKeys.Program,
    name: 'Программа',
  },
  {
    key: MenuKeys.About,
    name: 'О нас',
  },
  {
    key: MenuKeys.Partners,
    name: 'Партнёры',
  },
  {
    key: MenuKeys.Events,
    name: 'Мероприятия',
  },
];
