import * as React from 'react';
import {View, Text, TextInput, Dimensions, Button} from 'react-native';
import {
  Book,
  QueryType
} from '../../../generated/graphql';

import {ApolloProvider, Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const QueryGetAllBooks: QueryType = gql`
  query getAllBooks {
    getBooks {
      title
    }
  }
`;

const MutationAddBook = gql`
  mutation addBookToStore($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      title
      author {
        name
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://10.0.2.2:8000/api',
  cache
});

class Login extends React.Component {
  state = {
    title: '',
    author: ''
  };

  onChangeText = (title) => {
    this.setState({
      title
    });
  }
  onChangeAuthor = (author) => {
    this.setState({
      author
    });
  }

  addBook = async () => {
      const result = await client.mutate({
        mutation: MutationAddBook,
        variables: {
          title: this.state.title,
          author: this.state.author
        },
        refetchQueries: ['getAllBooks']
      });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={gql`${QueryGetAllBooks}`} fetchPolicy='no-cache'>
            {({loading, error, data}) => {
              return (data && data.getBooks || []).map((book: Book) => <View><Text>{book.title}</Text></View>)
            }}
        </Query>
        <View style={{width: 100, height: 100}}>
          <Text>Add Book</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: Dimensions.get('window').width}}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.title}
            placeholder='Enter Title for Book'
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: Dimensions.get('window').width }}
            onChangeText={text => this.onChangeAuthor(text)}
            value={this.state.author}
            placeholder='Enter author for Book'
          />
          <Button
              title="Add Book"
              style={{ height: 40, width: Dimensions.get('window').width }}
              onPress={() =>  this.addBook()}
          />
        </View>
    </ApolloProvider>
    );
  }
}

export default Login;
