'use client';

import { Input, InputIcon } from '@bigmobility/vinyl-ui';
import { useState } from 'react';

import { styled } from 'styled-system/jsx';

const Frame = styled('div', {
  base: {
    width: '100%',
    maxWidth: '32rem',
  },
});

const Toggle = styled('button', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

export default function InputPasswordDemo() {
  const [show, setShow] = useState(false);

  return (
    <Frame>
      <Input
        type={show ? 'text' : 'password'}
        defaultValue="vinyl-ui"
        placeholder="비밀번호"
      >
        <Toggle
          type="button"
          aria-label={show ? '비밀번호 숨기기' : '비밀번호 표시'}
          onClick={() => setShow((prev) => !prev)}
        >
          <InputIcon name={show ? 'eye' : 'eye-off'} />
        </Toggle>
      </Input>
    </Frame>
  );
}
