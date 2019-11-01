// Modules
import React from 'react';
import {Circle, Line, Rect} from '../SVG';

/* eslint-disable no-undef */
describe('SVG', () => {
  describe('Circle', () => {
    itRenders(() => <Circle />);
  });

  describe('Line', () => {
    itRenders(() => <Line />);
  });

  describe('Rect', () => {
    itRenders(() => <Rect />);
  });
});
