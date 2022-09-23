import styled from '@emotion/styled';
export const FeedbackOptionsWrapper = styled.div`
  background-color: #c0c0c0;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;
export const OptionList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;
export const OptionButton = styled.button`
  padding: 10px 20px;
  min-width: 110px;
  border-radius: 10px;
  border: none;
  transition: all 250ms ease;
  text-transform: uppercase;
  &:hover,
  &:focus {
    background-color: #fff;
    color: black;
  }
`;
