import { styled } from 'styled-system/jsx';

export const InputUnit = styled('span', {
  base: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    color: 'text.input',
    textStyle: 'input.medium-light',
    '[data-disabled] &': {
      color: 'text.disable',
    },
  },
});
