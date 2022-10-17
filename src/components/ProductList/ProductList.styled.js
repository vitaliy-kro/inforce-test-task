import styled from 'styled-components';
import { Box } from 'components/Box';
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fonts.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const List = styled(Box)`
  display: grid;
  max-width: 1400px;
  grid-template-columns: repeat(auto-fill, 25%);
  grid-auto-rows: 300px;
  grid-gap: 12px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
`;
export const Item = styled.li`
  width: 300px;
`;
export const ItemImg = styled.img`
  display: block;
`;
export const ItemTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const ItemValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;
export const Button = styled.button`
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme }) => theme.space[3]}px;

  background-color: transparent;
  border: ${({ theme }) => theme.borders.normal}${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.radii.normal};
  :not(:last-of-type) {
    margin-right: ${({ theme }) => theme.space[2]}px;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;
