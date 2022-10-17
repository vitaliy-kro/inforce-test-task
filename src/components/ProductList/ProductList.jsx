import { Component } from 'react';
import { Form } from '../Form';
import { Box } from 'components/Box';
import {
  Title,
  Button,
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  ItemValue,
} from './ProductList.styled';
import { EditModal } from 'components/EditModal';
import { Comments } from 'components/Comments';
const initialValuesAddForm = {
  imageUrl: '',
  name: '',
  count: '',
  width: '',
  height: '',
  weight: '',
};

export class ProductList extends Component {
  state = {
    items: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/300',
        name: 'Box',
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: '200g',
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/300',
        name: 'Box',
        count: 4,
        size: {
          width: 300,
          height: 200,
        },
        weight: '200g',
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/300',
        name: 'Box',
        count: 4,
        size: {
          width: 300,
          height: 200,
        },
        weight: '200g',
      },
    ],
    comments: [
      {
        id: 3,
        productId: 1,
        description: 'some text here',
        date: '14:00 22.08.2021',
      },
      {
        id: 4,
        productId: 2,
        description: 'some text here',
        date: '14:00 22.08.2021',
      },
    ],
    showForm: false,
    editToShow: '',
    commentsToShow: '',
  };

  showForm = () => {
    this.setState({ showForm: true });
  };
  hideForm = () => {
    this.setState({ showForm: false });
  };
  showEdit = e => {
    this.setState({ editToShow: +e.target.id });
  };
  hideEdit = () => {
    this.setState({ editToShow: '' });
  };
  submitForm = obj => {
    this.hideForm();
    this.setState(prevState => {
      return { items: [...prevState.items, obj] };
    });
  };
  updateItem = obj => {
    this.hideEdit();
    this.setState(prevState => {
      return {
        items: prevState.items.map(e => {
          if (e.id === obj.id) {
            return obj;
          }
          return e;
        }),
      };
    });
  };
  handleDeleteCard = id => {
    this.setState(prevState => {
      return { items: prevState.items.filter(e => e.id !== id) };
    });
  };
  showCardComments = e => {
    this.setState({ commentsToShow: +e.target.id });
  };
  render() {
    return (
      <Box position="relative" minHeight="500px">
        <Title>
          Inforce{' '}
          <Box color="red" as="span">
            Shop
          </Box>
        </Title>
        <Button onClick={this.showForm}>Add product</Button>
        {this.state.showForm && (
          <Form
            submit={this.submitForm}
            cancel={this.hideForm}
            initialValues={initialValuesAddForm}
          />
        )}
        <List as="ul">
          {this.state.items.map(
            ({
              id,
              imageUrl,
              name,
              count,
              size: { width, height },
              weight,
            }) => (
              <ListItem key={id}>
                <ItemImg src={imageUrl} alt={name} />
                <Box
                  p="3"
                  borderX="normal"
                  borderBottom="normal"
                  borderRadius="normal"
                >
                  <ItemTitle>{name}</ItemTitle>
                  <ItemValue>Count: {count}</ItemValue>
                  <ItemValue>
                    Sizes: {width} : {height}
                  </ItemValue>
                  <ItemValue>Weight: {weight}</ItemValue>
                  <Button id={id} onClick={this.showEdit}>
                    Edit
                  </Button>
                  {this.state.editToShow === id && (
                    <EditModal
                      submit={this.updateItem}
                      cancel={this.hideEdit}
                      initialValues={{
                        imageUrl,
                        name,
                        count,
                        width,
                        height,
                        weight,
                      }}
                      id={id}
                    ></EditModal>
                  )}
                  <Button
                    onClick={() => {
                      this.handleDeleteCard(id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button id={id} onClick={this.showCardComments}>
                    Comments
                  </Button>
                  {this.state.commentsToShow === id && (
                    <Comments id={id} comments={this.state.comments}></Comments>
                  )}
                </Box>
              </ListItem>
            )
          )}
        </List>
      </Box>
    );
  }
}
