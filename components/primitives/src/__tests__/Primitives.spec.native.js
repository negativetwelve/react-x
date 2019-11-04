// Modules
import React from 'react';
import {View, Text, Image, Touchable} from '../Primitives';

/* eslint-disable no-undef */
describe('Primitives', () => {
  describe('View', () => {
    itRenders(() => <View />);
  });

  describe('Text', () => {
    itRenders(() => <Text />);
  });

  describe('Image', () => {
    itRenders(() => <Image />);
  });

  describe('Touchable', () => {
    itRenders(() => <Touchable><View /></Touchable>);
  });
});
