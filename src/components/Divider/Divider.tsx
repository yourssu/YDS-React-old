import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

export interface DividerProps {
  thickness: 'thin' | 'thick'
  direction: 'horizontal' | 'vertical'
}

const thicknessDef = {
  thin: '0.1px',
  thick: '8px',
};

const colorDef = (thickness: 'thin' | 'thick', theme: Theme): string => ({
  thin: theme.color.borderNormal,
  thick: theme.color.borderThin,
}[thickness]);

export const Divider = styled.hr<DividerProps>`
  width: ${({ direction }) => (direction === 'horizontal' ? '100%' : 'unset')};
  height: ${({ direction }) => (direction === 'vertical' ? '100%' : 'unset')};
  border-width: ${({
    direction,
    thickness,
  }) => (direction === 'horizontal' ? `0 0 ${thicknessDef[thickness]} 0` : `0 0 0 ${thicknessDef[thickness]}`)};
  border-color: ${
  ({ thickness, theme }) =>
    colorDef(thickness, theme)
};
`;
