// Modules
import React from 'react';
import Render from '../Render';


/* eslint-disable no-undef */
describe('Render', () => {
  context('with default props', () => {
    action('render', () => (
      <Render>
        {'Something rendered'}
      </Render>
    ));

    itRenders(() => render());
  });

  context('with if prop', () => {
    set('ifCondition', () => false);
    action('render', () => (
      <Render if={ifCondition}>
        {'Something rendered'}
      </Render>
    ));

    itRenders(() => render());
  });

  context('with unless prop', () => {
    set('unlessCondition', () => true);
    action('render', () => (
      <Render unless={unlessCondition}>
        {'Something rendered'}
      </Render>
    ));

    itRenders(() => render());
  });
});
