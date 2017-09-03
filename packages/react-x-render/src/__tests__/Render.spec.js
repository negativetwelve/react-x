// Modules
import React from 'react';
import Render from '../Render';


const Text = ({children}) => <div>{children}</div>;

/* eslint-disable no-undef */
describe('Render', () => {
  context('with default props', () => {
    action('render', () => (
      <Render>
        <Text>{'Something rendered'}</Text>
      </Render>
    ));

    itRenders(() => render());
  });

  context('with if prop', () => {
    set('ifCondition', () => false);
    action('render', () => (
      <Render if={ifCondition}>
        <Text>{'Something rendered'}</Text>
      </Render>
    ));

    context('with ifCondition set to true', () => {
      set('ifCondition', () => true);
      itRenders(() => render());
    });

    context('with ifCondition set to false', () => {
      set('ifCondition', () => false);
      itRenders(() => render());
    });
  });

  context('with unless prop', () => {
    set('unlessCondition', () => true);
    action('render', () => (
      <Render unless={unlessCondition}>
        <Text>{'Something rendered'}</Text>
      </Render>
    ));

    context('with unlessCondition set to true', () => {
      set('unlessCondition', () => true);
      itRenders(() => render());
    });

    context('with unlessCondition set to false', () => {
      set('unlessCondition', () => false);
      itRenders(() => render());
    });
  });
});
