import styled from 'styled-components';
import { Form, Field } from 'formik';
export const AddForm = styled(Form)`
  position: absolute;
  width: 500px;
  background-color: rgba(231, 139, 107, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.space[5]}px;
  border: ${({ theme }) => theme.borders.normal}${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.normal};
`;
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;
export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.black};
`;
export const Input = styled(Field)`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme }) => theme.space[3]}px;

  margin-bottom: ${({ theme }) => theme.space[3]}px;

  border: ${({ theme }) => theme.borders.normal}${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Button = styled.button`
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme }) => theme.space[3]}px;

  background-color: transparent;
  border: ${({ theme }) => theme.borders.normal}${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.radii.normal};

  :not(:first-child) {
    margin-left: ${({ theme }) => theme.space[3]}px;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
