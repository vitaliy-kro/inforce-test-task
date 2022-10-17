import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { AddForm, Label, Input, Button } from './Form.styled';

export const Form = ({
  submit,
  initialValues,
  cancel,
  id = nanoid(),
  title,
}) => {
  const handleSubmit = ({ imageUrl, name, width, height, count, weight }) => {
    submit({ imageUrl, name, count, size: { width, height }, weight, id });
  };
  const valuesToMarkup = Object.keys(initialValues);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <AddForm>
        {title && <h2>{title}</h2>}
        {valuesToMarkup.map((e, index) => {
          return (
            <Box key={index}>
              <Label htmlFor={e}>{e}</Label>
              <Input name={e} />
            </Box>
          );
        })}
        <Box>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={cancel}>
            Cancel
          </Button>
        </Box>
      </AddForm>
    </Formik>
  );
};
