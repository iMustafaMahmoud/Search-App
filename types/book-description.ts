import { BookItem } from "./book-item";

export interface BookDescriptionProps {
  route: {
    params: {
      bookDescription: BookItem;
    };
  };
}
