import { Form } from '../Form';
export const EditModal = ({ cancel, initialValues, submit, id }) => {
  return (
    <Form
      cancel={cancel}
      initialValues={initialValues}
      submit={submit}
      id={id}
    ></Form>
  );
};
