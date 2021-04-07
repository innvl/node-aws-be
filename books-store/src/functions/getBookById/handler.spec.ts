import * as handler from './handler';
import { books } from '@mocks/books';

describe('Get Book By ID Handler :: ', () => {
  let getBookByIdSpy;

  beforeEach(() => {
    getBookByIdSpy = jest.spyOn(handler, 'getBookByIdMock');
  });

  it('Should get books successfully', async () => {
    getBookByIdSpy.mockResolvedValue(books[0]);
    const book = await handler.getBookById({
      pathParameters: { productId: 1933988673 },
    });

    expect(book.statusCode).toBe(200);
    expect(book.body).toBe(JSON.stringify({ book: books[0] }));
  });

  it('Should handle general error', async () => {
    getBookByIdSpy.mockRejectedValue('error');
    const book = await handler.getBookById({
      pathParameters: { productId: 1933988673 },
    });

    expect(book.statusCode).toBe(500);
    expect(book.body).not.toBe(JSON.stringify({ book: books[0] }));
  });

  it('Should handle Product not Fond', async () => {
    getBookByIdSpy.mockResolvedValue(undefined);
    const book = await handler.getBookById({
      pathParameters: { productId: 1933988673 },
    });

    expect(book.statusCode).toBe(404);
    expect(book.body).toBe(JSON.stringify({ error: 'Book not found' }));
  });
});
