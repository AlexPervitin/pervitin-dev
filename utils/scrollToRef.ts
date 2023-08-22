import { MutableRefObject } from 'react';

export const scrollToRef = (ref: MutableRefObject<null>) => {
  if (ref.current) {
    const scrollOptions: ScrollToOptions = {
      behavior: 'smooth',
    };

    window.scrollTo({
      top: (ref.current as HTMLDivElement).offsetTop - 70,
      ...scrollOptions,
    });
  }
};
