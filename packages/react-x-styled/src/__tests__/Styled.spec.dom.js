// Modules
import React from 'react';
import Styled from '../Styled';

const Title = Styled.Text`
  font-size: 16px;
  text-align: center;
`;

/* eslint-disable no-undef */
describe('Styled`', () => {
  describe('Title', () => {
    itRenders(() => <Title />);
  });
});
