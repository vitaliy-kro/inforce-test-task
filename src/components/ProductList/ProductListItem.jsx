import { Item, ItemImg, ItemTitle, ItemValue } from './ProductList.styled';
import { EditModal } from 'components/EditModal';
import { Comments } from 'components/Comments';
import { Box } from 'components/Box';
import { Button } from './ProductList.styled';
export const ListItem = object => {
  const {
    params: { id, imageUrl, name, count, width, height, weight },
    showEdit,
    editToShow,
    updateItem,
    hideEdit,
    handleDeleteCard,
    showCardComments,
    commentsToShow,
    comments,
  } = object;
  return (
    <Item>
      <ItemImg src={imageUrl} alt={name} />
      <Box p="3" borderX="normal" borderBottom="normal" borderRadius="normal">
        <ItemTitle>{name}</ItemTitle>
        <ItemValue>Count: {count}</ItemValue>
        <ItemValue>
          Sizes: {width} : {height}
        </ItemValue>
        <ItemValue>Weight: {weight}</ItemValue>
        <Box mb="3">
          <Button id={id} onClick={showEdit}>
            Edit
          </Button>
          {editToShow === id && (
            <EditModal
              submit={updateItem}
              cancel={hideEdit}
              initialValues={{
                imageUrl,
                name,
                count,
                width,
                height,
                weight,
              }}
              id={id}
              title={name}
            ></EditModal>
          )}
          <Button
            onClick={() => {
              handleDeleteCard(id);
            }}
          >
            Delete
          </Button>
          <Button id={id} onClick={showCardComments}>
            Comments
          </Button>
        </Box>
        {commentsToShow === id && (
          <Comments id={id} comments={comments}></Comments>
        )}
      </Box>
    </Item>
  );
};
