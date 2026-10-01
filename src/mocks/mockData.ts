const STAMP = '2026-03-01T10:00:00.000Z';
const DOC = '/docs/demo.html';

const meta = (total: number) => ({
  pagination: {
    page: 1,
    pageSize: Math.max(total, 1),
    pageCount: 1,
    total,
  },
});

export const emptyList = () => ({
  data: [],
  meta: meta(0),
});

export const list = <T>(items: Array<{ id: number; attributes: T }>) => ({
  data: items,
  meta: meta(items.length),
});

const image = (url: string, id = 1) => ({
  data: {
    id,
    attributes: {
      name: 'image',
      alternativeText: '',
      caption: '',
      width: 800,
      height: 600,
      url,
    },
  },
});

const speaker = (fullName: string, position: string, company: string, photo: string) => ({
  position,
  company,
  photo: image(photo),
  createdAt: STAMP,
  updatedAt: STAMP,
  locale: 'ru',
  speakerType: 0,
  fullName,
  vkUrl: '',
  facebookUrl: '',
  instagramUrl: '',
});

const section = (id: number, order: number, title: string, shortTitle: string, place: string, sectionColor: string) => ({
  data: {
    id,
    attributes: {
      order,
      title,
      isVisible: true,
      place,
      sectionColor,
      shortTitle,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
});

const frontendSection = section(1, 1, 'Frontend', 'Frontend', 'Зал A', '#6C5CE7');
const backendSection = section(2, 2, 'Backend и платформа', 'Backend', 'Зал B', '#00B894');

export const conference = list([
  {
    id: 1,
    attributes: {
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
      conferenceId: {
        data: {
          id: 1,
          attributes: {
            title: 'Summit',
            subTitle: 'Конференция для разработчиков',
            titleColor: '#ffffff',
            subTitleColor: '#f4f5fb',
            paymentDescription: 'Оплата билета на конференцию',
            createdAt: STAMP,
            updatedAt: STAMP,
            locale: 'ru',
            isRegistration: true,
            imagePath: image('/img/hero.svg'),
            about_conference: {
              data: {
                id: 1,
                attributes: {
                  subTitle: 'Два дня докладов, практики и общения',
                  description: 'Демонстрационная программа конференции. Все данные локальные и не связаны с реальной регистрацией.',
                  createdAt: STAMP,
                  updatedAt: STAMP,
                  locale: 'ru',
                },
              },
            },
            ConferenceTypes: list([
              {
                id: 1,
                attributes: {
                  name: 'Офлайн',
                  date: '2026-10-15T10:00:00',
                  location: 'Конгресс-холл',
                  price: '5000',
                },
              },
              {
                id: 2,
                attributes: {
                  name: 'Онлайн',
                  date: '2026-10-15T10:00:00',
                  location: 'Трансляция',
                  price: '1500',
                },
              },
            ]),
          },
        },
      },
    },
  },
]);

export const navigations = list([
  { id: 1, attributes: { order: 1, isVisible: true, title: 'Спикеры', key: 'Key_Speakers', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 2, attributes: { order: 2, isVisible: true, title: 'Форматы', key: 'Conferences', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 3, attributes: { order: 3, isVisible: true, title: 'Программа', key: 'Program', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 4, attributes: { order: 4, isVisible: true, title: 'Стоимость', key: 'Price', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 5, attributes: { order: 5, isVisible: true, title: 'О конференции', key: 'About', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 6, attributes: { order: 6, isVisible: true, title: 'Галерея', key: 'Gallery', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 7, attributes: { order: 7, isVisible: true, title: 'Партнёры', key: 'Partners', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
  { id: 8, attributes: { order: 8, isVisible: true, title: 'Мероприятия', key: 'Events', createdAt: STAMP, updatedAt: STAMP, locale: 'ru' } },
]);

export const aboutUs = list([
  {
    id: 1,
    attributes: {
      description:
        'Демо-лендинг конференции для разработчиков: программа, спикеры, тарифы и регистрация работают на локальных данных.\n\nЗдесь можно посмотреть интерфейс участия, заявку спикера и корпоративную форму без обращения к серверу.',
      forSpeakersTitle: 'Материалы для спикеров',
      forSpeakersLink: DOC,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

export const additionalInformation = list([
  {
    id: 1,
    attributes: {
      photoTitle: 'Смотреть галерею',
      photoLink: DOC,
      videoTitle: 'Записи докладов',
      videoLink: DOC,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

export const galleries = list([
  {
    id: 1,
    attributes: { iconPath: image('/img/demo/gallery-1.svg', 11), order: 1, isVisible: true, createdAt: STAMP, updatedAt: STAMP, locale: 'ru' },
  },
  {
    id: 2,
    attributes: { iconPath: image('/img/demo/gallery-2.svg', 12), order: 2, isVisible: true, createdAt: STAMP, updatedAt: STAMP, locale: 'ru' },
  },
  {
    id: 3,
    attributes: { iconPath: image('/img/demo/gallery-3.svg', 13), order: 3, isVisible: true, createdAt: STAMP, updatedAt: STAMP, locale: 'ru' },
  },
  {
    id: 4,
    attributes: { iconPath: image('/img/demo/gallery-4.svg', 14), order: 4, isVisible: true, createdAt: STAMP, updatedAt: STAMP, locale: 'ru' },
  },
]);

export const partners = list([
  {
    id: 1,
    attributes: {
      order: 1,
      iconPath: image('/img/demo/partner-1.svg', 21),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 2,
    attributes: {
      order: 2,
      iconPath: image('/img/demo/partner-2.svg', 22),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 3,
    attributes: {
      order: 3,
      iconPath: image('/img/demo/partner-3.svg', 23),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 4,
    attributes: {
      order: 4,
      iconPath: image('/img/demo/partner-4.svg', 24),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

export const performances = list([
  {
    id: 1,
    attributes: {
      title: 'Открытие демо-сезона',
      order: 1,
      iconPath: image('/img/demo/talk-1.svg', 31),
      videoLink: DOC,
      videoTime: '42:10',
      date: '2025-11-12',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 2,
    attributes: {
      title: 'Практикум по архитектуре',
      order: 2,
      iconPath: image('/img/demo/talk-2.svg', 32),
      videoLink: DOC,
      videoTime: '35:20',
      date: '2025-06-04',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 3,
    attributes: {
      title: 'Вечерний митап',
      order: 3,
      iconPath: image('/img/demo/talk-3.svg', 33),
      videoLink: DOC,
      videoTime: '28:05',
      date: '2024-12-18',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

export const footers = list([
  {
    id: 1,
    attributes: {
      order: 1,
      iconPath: image('/img/TelegramIcon.svg', 41),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 2,
    attributes: {
      order: 2,
      iconPath: image('/img/VkIcon.svg', 42),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 3,
    attributes: {
      order: 3,
      iconPath: image('/img/YouTubeIcon.svg', 43),
      link: 'https://example.com',
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

export const successDialogs = list([
  {
    id: 1,
    attributes: {
      key: 'Speaker',
      title: 'Заявка спикера отправлена',
      subtitle: 'Это демо: заявка сохранена только в браузере и никуда не передаётся.',
      buttonText: 'Готово',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 2,
    attributes: {
      key: 'Participant',
      title: 'Вы зарегистрированы',
      subtitle: 'Оплата в этой версии имитируется и не списывает деньги.',
      buttonText: 'Готово',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 3,
    attributes: {
      key: 'Rubius_Employee',
      title: 'Регистрация сотрудника подтверждена',
      subtitle: 'Для демо бесплатное участие включается почтой на домене example.com.',
      buttonText: 'Готово',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 4,
    attributes: {
      key: 'Corporate',
      title: 'Корпоративная заявка принята',
      subtitle: 'Данные формы остаются в этой сессии браузера.',
      buttonText: 'Готово',
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

const tariffType = (id: number, title: string, price: number) => ({
  id,
  attributes: {
    title,
    price,
    createdAt: STAMP,
    updatedAt: STAMP,
    locale: 'ru',
  },
});

export const tariffs = list([
  {
    id: 1,
    attributes: {
      title: 'Стандарт',
      subTitle: 'Очный день',
      features: '- Доступ к докладам выбранного дня\n- Кофе-брейки\n- Нетворкинг',
      docs: '',
      order: 1,
      iconPath: image('/img/Union.svg', 51),
      key: 'base_tariff',
      TariffTypes: { data: [tariffType(11, 'Офлайн', 5000)] },
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 2,
    attributes: {
      title: 'Онлайн',
      subTitle: 'Трансляция',
      features: '- Трансляция докладов\n- Вопросы спикерам в чате\n- Запись после конференции',
      docs: '',
      order: 2,
      iconPath: image('/img/Video.svg', 52),
      key: 'online_tariff',
      TariffTypes: { data: [tariffType(21, 'Онлайн', 1500)] },
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
  {
    id: 3,
    attributes: {
      title: 'Компания',
      subTitle: 'Несколько участников',
      features: '- Единый счёт на команду\n- Выбор числа билетов\n- Отдельный менеджер заявки',
      docs: '',
      order: 3,
      iconPath: image('/img/robot.svg', 53),
      key: 'corporate_participation',
      TariffTypes: { data: [tariffType(31, 'Корпоративный', 4500)] },
      isVisible: true,
      createdAt: STAMP,
      updatedAt: STAMP,
      locale: 'ru',
    },
  },
]);

const lecture = (
  id: number,
  order: number,
  title: string,
  description: string,
  startTime: string,
  endTime: string,
  lectureSection: typeof frontendSection,
  speakers: ReturnType<typeof speaker>[]
) => ({
  id,
  attributes: {
    order,
    title,
    subTitle: '',
    description,
    startTime,
    endTime,
    isVisible: true,
    isKeyLecture: order === 1,
    createdAt: STAMP,
    updatedAt: STAMP,
    locale: 'ru',
    LectureSection: lectureSection,
    Speakers: {
      data: speakers.map((item, index) => ({ id: id * 10 + index, attributes: item })),
    },
    conferenceId: { data: { id: 1, attributes: {} } },
  },
});

const anna = speaker('Анна Соколова', 'Frontend Lead', 'Northwind', '/img/demo/speaker-anna.jpg');
const ilya = speaker('Илья Морозов', 'Staff Engineer', 'Contoso', '/img/demo/speaker-ilya.jpg');
const maria = speaker('Мария Лебедева', 'Engineering Manager', 'Fabrikam', '/img/demo/speaker-maria.jpg');
const pavel = speaker('Павел Орлов', 'DevOps Engineer', 'Adventure', '/img/demo/speaker-pavel.jpg');

export const lectures = list([
  lecture(
    1,
    1,
    'Дизайн-система без боли',
    'Как собрать UI-kit, которым реально пользуется команда.',
    '2026-10-15T10:00:00',
    '2026-10-15T11:00:00',
    frontendSection,
    [anna]
  ),
  lecture(
    2,
    2,
    'Состояние на клиенте',
    'Практический разбор MobX и границ ответственности сторов.',
    '2026-10-15T11:30:00',
    '2026-10-15T12:30:00',
    frontendSection,
    [ilya]
  ),
  lecture(
    3,
    1,
    'Наблюдаемость сервиса',
    'Метрики, логи и трассировка для обычного API.',
    '2026-10-16T10:00:00',
    '2026-10-16T11:00:00',
    backendSection,
    [maria]
  ),
  lecture(
    4,
    2,
    'Поставка без героизма',
    'Пайплайн, который переживает пятничный релиз.',
    '2026-10-16T11:30:00',
    '2026-10-16T12:30:00',
    backendSection,
    [pavel]
  ),
]);

const keySpeaker = (id: number, order: number, person: ReturnType<typeof speaker>) => ({
  id,
  attributes: {
    order,
    conferenceId: { data: { id: 1, attributes: {} } },
    speaker: {
      data: {
        id,
        attributes: {
          ...person,
          Lectures: { data: [{ id: 1, attributes: {} }] },
        },
      },
    },
  },
});

export const keySpeakers = list([keySpeaker(1, 1, anna), keySpeaker(2, 2, ilya), keySpeaker(3, 3, maria)]);

export const createdEntity = (body?: { data?: Record<string, unknown> }) => ({
  data: {
    id: Date.now(),
    attributes: body?.data ?? {},
  },
  meta: meta(1),
});
