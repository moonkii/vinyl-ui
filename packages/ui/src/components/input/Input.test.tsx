import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './Input';
import { InputIcon } from './InputIcon';
import { InputUnit } from './InputUnit';

const context = describe;

describe('Input', () => {
  it('renders a textbox and listens for change events', () => {
    const handleChange = jest.fn();

    render((
      <Input
        placeholder="이름"
        onChange={handleChange}
      />
    ));

    const input = screen.getByRole('textbox', { name: '' });

    fireEvent.change(input, { target: { value: '홍길동' } });

    expect(input).toHaveAttribute('placeholder', '이름');
    expect(handleChange).toHaveBeenCalled();
  });

  context('when disabled', () => {
    it('disables the input and marks the container', () => {
      render(<Input disabled />);

      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();
      expect(input.parentElement).toHaveAttribute('data-disabled');
    });
  });

  context('when hasError', () => {
    it('marks the container as invalid', () => {
      render(<Input hasError />);

      expect(screen.getByRole('textbox').parentElement).toHaveAttribute('data-invalid');
    });
  });

  context('with InputUnit', () => {
    it('renders the unit text', () => {
      render((
        <Input defaultValue="70">
          <InputUnit>kg</InputUnit>
        </Input>
      ));

      expect(screen.getByText('kg')).toBeInTheDocument();
    });
  });

  context('with InputIcon', () => {
    it('renders the icon by name', () => {
      render((
        <Input>
          <InputIcon name="calendar" />
        </Input>
      ));

      expect(screen.getByTestId('icon')).toHaveAttribute('data-name', 'calendar');
    });
  });
});
