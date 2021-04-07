import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { books } from '@mocks/books';

export const getBooksMock = async () => books;

export const getBooks = async () => {
  try {
    return formatJSONResponse(
      {
        books: await getBooksMock(),
      },
      200,
    );
  } catch (error) {
    return formatJSONResponse(
      {
        error,
      },
      500,
    );
  }
};

export const main = middyfy(getBooks);
