declare namespace StateType {
  type HomeState = Readonly<{
    nowPlaying: ApiType.Content[];
    upcoming: ApiType.Content[];
    popular: ApiType.Content[];
    error: string;
    loading: boolean;
    home?: any;
  }>;
}
