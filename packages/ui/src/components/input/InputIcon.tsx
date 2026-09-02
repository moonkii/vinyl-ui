import type { ComponentProps } from 'react';

import { styled } from 'styled-system/jsx';

import { Icon, type IconName } from '../icon/Icon';

const Wrapper = styled('span', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '2rem',
    color: 'text.input',
    '[data-disabled] &': {
      color: 'text.disable',
    },
  },
});

type InputIconProps = Omit<ComponentProps<typeof Wrapper>, 'children'> & {
  name: IconName;
};

export function InputIcon({ name, ...props }: InputIconProps) {
  return (
    <Wrapper {...props}>
      <Icon name={name} />
    </Wrapper>
  );
}
