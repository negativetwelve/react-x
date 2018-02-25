// Modules
import React from 'react';
import {View, Text, Image, SVG, StyleSheet, Animated} from '../Primitives';

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

  describe('SVG', () => {
    itRenders(() => <SVG.Svg />);
  });
});
