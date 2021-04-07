import * as handler from './handler';
import { books } from '@mocks/books';

describe('Get Books Handler :: ', () => {
  let getBooksSpy;
  beforeEach(() => {
    getBooksSpy = jest.spyOn(handler, 'getBooksMock');
  });

  it('Should get books successfully', async () => {
    getBooksSpy.mockResolvedValue(books);
    const booksList = await handler.getBooks();

    expect(booksList.statusCode).toBe(200);
    expect(booksList.body).toBe(JSON.stringify({ books }));
  });

  it('Should handle error', async () => {
    getBooksSpy.mockRejectedValue('error');
    const booksList = await handler.getBooks();

    expect(booksList.statusCode).toBe(500);
    expect(booksList.body).not.toBe(JSON.stringify({ books }));
  });
});
