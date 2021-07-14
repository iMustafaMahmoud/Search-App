import { useQueries, UseQueryOptions } from "react-query";

export const useGetBooks = (ISBNArray: string[]) => {
  const queries: UseQueryOptions[] = ISBNArray.map((ISBN) => ({
    queryKey: ["Book", ISBN],
    queryFn: () => getBookByISBN(ISBN),
  }));
  const result = useQueries(queries);
  return result;
};

const getBookByISBN = (ISBN: string) => {
  return fetch(`https://openlibrary.org/isbn/${ISBN}.json`).then((res) =>
    res.json()
  );
};
