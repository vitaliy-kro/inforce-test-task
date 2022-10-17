import styled from 'styled-components';

export const CommentText = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.s};

  padding: ${({ theme }) => theme.space[2]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  border: ${({ theme }) => theme.borders.normal}${({ theme }) => theme.colors.black};
`;
export const CommentTime = styled.span``;
