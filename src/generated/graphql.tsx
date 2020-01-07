
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
  name?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<Book>>>,
};

export type Book = {
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Author>,
};

export type Mutation = {
  addBook?: Maybe<Book>,
};


export type MutationAddBookArgs = {
  title: Scalars['String'],
  author: Scalars['String']
};

export type QueryType = {
  getBooks?: Maybe<Array<Book>>,
  getAuthors?: Maybe<Array<Author>>,
};


