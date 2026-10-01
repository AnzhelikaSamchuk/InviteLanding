import moment from 'moment';
import { Routes } from 'shared/constants/Routes';

export class Utils {
  public static utcToLocal(value: Date | string, isSec = true): string {
    return moment
      .utc(value)
      .local()
      .format('DD.MM.YYYY HH:mm' + (isSec ? ':ss' : ''));
  }

  public static getUrl(id: number): string {
    switch (id) {
      case 1:
        return Routes.LANDING;
      case 2:
        return Routes.LANDING;
      case 3:
        return Routes.ARCHIVE;
      case 4:
        return Routes.PLACES;
      default:
        return '';
    }
  }

  public static sortByField<T>(items: T[], propertyName: keyof T): T[] {
    return items.sort((left: T, right: T) => {
      if (left[propertyName] < right[propertyName]) {
        return -1;
      } else if (left[propertyName] > right[propertyName]) {
        return 1;
      }
      return 0;
    });
  }

  public static sortByDate<T>(items: T[], propertyName: keyof T): T[] {
    return items.sort((left: T, right: T) => {
      const leftV = left[propertyName] as string;
      const rightV = right[propertyName] as string;
      if (moment(leftV).isBefore(rightV)) {
        return -1;
      }
      if (moment(leftV).isAfter(rightV)) {
        return 1;
      }
      return 0;
    });
  }

  public static animateScroll(targetPosition: number, initialPosition: number, duration: number) {
    let start: number;
    let position: number;
    let animationFrame: number;

    // The easing function that makes the scroll decelerate over time
    function easeOutQuart(x: number) {
      return 1 - Math.pow(1 - x, 4);
    }

    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    // maximum amount of pixels we can scroll
    const maxAvailableScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const amountOfPixelsToScroll = initialPosition - targetPosition;

    function step(timestamp: number) {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;

      // this just gives us a number between 0 (start) and 1 (end)
      const relativeProgress = elapsed / duration;

      // ease out that number
      const easedProgress = easeOutQuart(relativeProgress);

      // calculate new position for every thick of the requesAnimationFrame
      position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

      // set the scrollbar position
      window.scrollTo(0, position);

      // Stop when max scroll is reached
      if (initialPosition !== maxAvailableScroll && window.scrollY === maxAvailableScroll) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      // repeat until the end is reached
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(step);
      }
    }

    animationFrame = requestAnimationFrame(step);
  }
}
