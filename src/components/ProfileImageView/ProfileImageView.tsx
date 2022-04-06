import React from 'react';
import styled from '@emotion/styled';

export interface ProfileImageViewProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  xs: '24px',
  sm: '32px',
  md: '48px',
  lg: '72px',
  xl: '96px',
};

const paths = {
  xs: 'path("M0 12C0 2.4 2.4 0 12 0C21.5 0 24 2.4 24 12C24 21.5 22.5 24 12 24C2.4 24 0 21.5 0 12Z")',
  sm: 'path("M0 16C0 3.2 3.2 0 16 0C28.6667 0 32 3.2 32 16C32 28.6667 30 32 16 32C3.2 32 0 28.6667 0 16Z")',
  md: 'path("M0 24C0 4.8 4.8 0 24 0C43 0 48 4.8 48 24C48 43 45 48 24 48C4.8 48 0 43 0 24Z")',
  lg: 'path("M0 36C0 7.2 7.2 0 36 0C64.5 0 72 7.2 72 36C72 64.5 67.5 72 36 72C7.2 72 0 64.5 0 36Z")',
  xl: 'path("M0 48C0 9.6 9.6 0 48 0C86 0 96 9.6 96 48C96 86 90 96 48 96C9.6 96 0 86 0 48Z")',
};

export const ProfileImageView = styled.img<ProfileImageViewProps>`
  clip-path: ${({ size }) => paths[size]};
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
`;