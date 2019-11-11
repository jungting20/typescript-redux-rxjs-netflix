declare namespace CustomPropsTypes {
  interface SectionProps {
    title: string;
    children: JSX.Element | JSX.Element[];
  }

  interface HomePresenterProps {
    value: string;
  }

  interface HomeContainerProps {
    value: string;
  }

  interface ItemProps {
    current: boolean;
  }

  interface PosterImage {
    bgurl: string;
  }

  interface MessageProps {
    text: string;
    color: string;
  }

  interface PosterProps {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    year: string;
    isMovie: boolean;
  }
}
