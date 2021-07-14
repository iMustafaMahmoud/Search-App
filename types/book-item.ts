export interface BookItem {
  title: string;
  publishers: string[];
  covers: string[];
  publish_date: string[];
}

export interface BookItemProps {
  book: BookItem;
  navigation: any;
}
