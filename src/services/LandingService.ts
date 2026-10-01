import { IPerkDto, IRewiewDto, IOrganizerDto } from 'shared/interfaces';

/* Сервис для получения данных секции Лэндинга - старые, которые могут еще появиться*/
class LandingService {
  public getPerks(): Promise<IPerkDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result: IPerkDto[] = [
          {
            id: 1,
            name: 'Доклады практиков',
            iconPath: '/img/Union.svg',
            order: 1,
            locale: 'ru',
          },
          {
            id: 2,
            name: 'Живые обсуждения',
            iconPath: '/img/PlayIcon.svg',
            order: 2,
            locale: 'ru',
          },
          {
            id: 3,
            name: 'Вечерняя программа',
            iconPath: '/img/Video.svg',
            order: 3,
            locale: 'ru',
          },
          {
            id: 4,
            name: 'Нетворкинг',
            iconPath: '/img/robot.svg',
            order: 4,
            locale: 'ru',
          },
        ];
        resolve(result);
      }, 500);
    });
  }

  public getRewiews(): Promise<IRewiewDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result: IRewiewDto[] = [
          {
            id: 1,
            text: 'Программа была собрана плотно, но без накладок: успевала переходить между залами и задавать вопросы после докладов. Удобно, что расписание и описания лежат на одной странице.',
            author: 'Анна Соколова',
            authorPhoto: '/img/demo/speaker-anna.jpg',
            location: 'Демо-город',
            company: 'Northwind',
            isVisible: true,
            order: 1,
            locale: 'ru',
          },
          {
            id: 2,
            text: 'The talks stayed practical. I left with a short list of changes we can try in our next sprint, and the hallway conversations were just as useful as the stage.',
            author: 'Ilya Morozov',
            authorPhoto: '/img/demo/speaker-ilya.jpg',
            location: 'Demo City',
            company: 'Contoso',
            isVisible: true,
            order: 2,
            locale: 'en',
          },
          {
            id: 3,
            text: 'Понравилось, что рядом были и инженерные доклады, и разговоры про продукт. Команда уехала с общими заметками, а не с набором разрозненных слайдов.',
            author: 'Мария Лебедева',
            authorPhoto: '/img/demo/speaker-maria.jpg',
            location: 'Демо-город',
            company: 'Fabrikam',
            isVisible: true,
            order: 3,
            locale: 'ru',
          },
          {
            id: 4,
            text: 'Хорошее место, чтобы увидеть, как соседние команды решают те же задачи. Формат камерный, поэтому после доклада ещё можно было продолжить разговор.',
            author: 'Павел Орлов',
            authorPhoto: '/img/demo/speaker-pavel.jpg',
            location: 'Демо-город',
            company: 'Adventure',
            isVisible: true,
            order: 4,
            locale: 'ru',
          },
        ];
        resolve(result);
      }, 500);
    });
  }

  public getOrganizers(): Promise<IOrganizerDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result: IOrganizerDto[] = [
          {
            id: 1,
            iconSrc: '/img/logo-footer.svg',
            link: '/',
            order: 2,
            isVisible: true,
          },
          {
            id: 2,
            iconSrc: '/img/Logo.svg',
            link: '/',
            order: 1,
            isVisible: true,
          },
        ];

        resolve(result);
      }, 500);
    });
  }
}

export default new LandingService();
