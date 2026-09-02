import type { ComponentProps } from 'react';

import { styled } from 'styled-system/jsx';

const Container = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '12',
    paddingInline: '12',
    width: '100%',
    minHeight: 'input-height',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'layout.default-line',
    borderRadius: '8',
    backgroundColor: 'layout.bg-light',
    overflow: 'hidden',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '0.2s',
    '&:not([data-disabled]):not([data-invalid]):hover': {
      borderColor: 'layout.strong-line',
    },
    '&:not([data-disabled]):not([data-invalid]):focus-within': {
      borderColor: 'layout.strong-line',
    },
    '&[data-invalid]': {
      backgroundColor: 'layout.bg-issue',
      borderColor: 'layout.issue-line',
    },
    '&[data-disabled]': {
      backgroundColor: 'layout.bg-disable',
    },
  },
});

const Field = styled('input', {
  base: {
    flex: '1',
    minWidth: '0',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '0',
    color: 'text.input',
    textStyle: 'input.medium-light',
    _disabled: {
      color: 'text.disable',
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      color: 'text.input-soft',
    },
  },
});

type InputProps = ComponentProps<'input'> & {
  hasError?: boolean;
};

export function Input({
  hasError = false,
  disabled = false,
  className,
  children,
  ...props
}: InputProps) {
  return (
    <Container
      className={className}
      data-invalid={hasError || undefined}
      data-disabled={disabled || undefined}
    >
      <Field
        disabled={disabled}
        {...props}
      />
      {children}
    </Container>
  );
}
