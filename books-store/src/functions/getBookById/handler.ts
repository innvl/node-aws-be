import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import { books } from '@mocks/books';

export const getBookByIdMock = async (id: string) =>
  books.find((book) => book.id === id);

export const getBookById = async (
  event,
) => {
  try {
    const id = event.pathParameters.productId;

    const book = await getBookByIdMock(id);

    if (!book) {
      return formatJSONResponse(
        {
          error: 'Book not found',
        },
        404,
      );
    }

    return formatJSONResponse(
      {
        book,
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

export const main = middyfy(getBookById);
