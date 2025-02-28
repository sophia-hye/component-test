// Button.tsx
import React from 'react';
import ButtonFilled from './ButtonFilled';
import ButtonLined from './ButtonLined';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = {
  Filled: ({ children, onClick }: ButtonProps) => (
    <ButtonFilled icon="none" onClick={onClick}>
      {children}
    </ButtonFilled>
  ),

  FilledLeftIcon: ({ children, onClick }: ButtonProps) => (
    <ButtonFilled icon="left" onClick={onClick}>
      {children}
    </ButtonFilled>
  ),

  FilledRightIcon: ({ children, onClick }: ButtonProps) => (
    <ButtonFilled icon="right" onClick={onClick}>
      {children}
    </ButtonFilled>
  ),

  Lined: ({ children, onClick }: ButtonProps) => (
    <ButtonLined icon="none" onClick={onClick}>
      {children}
    </ButtonLined>
  ),

  LinedLeftIcon: ({ children, onClick }: ButtonProps) => (
    <ButtonLined icon="left" onClick={onClick}>
      {children}
    </ButtonLined>
  ),

  LinedRightIcon: ({ children, onClick }: ButtonProps) => (
    <ButtonLined icon="right" onClick={onClick}>
      {children}
    </ButtonLined>
  ),
};

export default Button;
