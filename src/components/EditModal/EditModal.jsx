import { Form } from '../Form';
export const EditModal = ({ cancel, initialValues, submit, id, title }) => {
  return (
    <Form
      cancel={cancel}
      initialValues={initialValues}
      submit={submit}
      id={id}
      title={title}
    ></Form>
  );
};
