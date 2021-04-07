import { Book } from '@models/dto';

export const books: Book[] = [
  {
    title: 'Unlocking Android',
    id: '1933988673',
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
    description:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen'],
    categories: ['Open Source', 'Mobile'],
    availableOnStock: 100,
    price: 10,
  },
  {
    title: 'Android in Action, Second Edition',
    id: '1935182722',
    availableOnStock: 592,
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg',
    description:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    authors: ['W. Frank Ableson', 'Robi Sen'],
    categories: ['Java'],
    price: 11.1,
  },
  {
    title: 'Specification by Example',
    id: '1617290084',
    availableOnStock: 0,
    thumbnailUrl:
      'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg',
    authors: ['Gojko Adzic'],
    categories: ['Software Engineering!!!'],
    price: 9.99,
  },
];
