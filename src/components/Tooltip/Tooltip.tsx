import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo';

export interface TooltipProps {
  arrowPosition: 'top' | 'bottom' | 'left' | 'right';
  arrowAlign: 'start' | 'center' | 'end';
}

const getArrowSize = ({ arrowPosition }: TooltipProps) => (arrowPosition === 'top' || arrowPosition === 'bottom' ? 'width: 44px; height: 9px;' : 'height: 44px; width: 9px;');

const getArrowPosition = ({ arrowPosition, arrowAlign }: TooltipProps) => {
  let ret = '';
  if (arrowPosition === 'top' || arrowPosition === 'bottom') {
    if (arrowPosition === 'top') ret += 'top: -9px;'; else ret += 'bottom: -9px;';
    if (arrowAlign === 'start') ret += 'left: 0;';
    if (arrowAlign === 'center') ret += 'left: 50%; transform: translate(-50%, 0);';
    if (arrowAlign === 'end') ret += 'right: 0;';
  } else {
    if (arrowPosition === 'left' || arrowPosition === 'right') {
      if (arrowPosition === 'left') ret += 'left: -9px;'; else ret += 'right: -9px;';
      if (arrowAlign === 'start') ret += 'top: 0;';
      if (arrowAlign === 'center') ret += 'top: 50%; transform: translate(0, -50%);';
      if (arrowAlign === 'end') ret += 'bottom: 0;';
    }
  }
  return ret;
};

const TooltipWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.tooltipBG};
  color: ${({ theme }) => theme.color.textReserved};
  ${getTypoStyle(Typography.Body2)}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 8px;
  text-align: left;
`;

const ArrowWrapper = styled.div<TooltipProps>`
  background-color: ${({ theme }) => theme.color.tooltipBG};
  position: absolute;
  ${(props) => getArrowPosition(props)}
  clip-path: path("M20.5858 8.51096L14.3431 2.3851C12.8429 0.912872 10.808 0.0857849 8.68629 0.0857849H35.3137C33.192 0.0857849 31.1571 0.91287 29.6569 2.38509L23.4142 8.51096C22.6332 9.27739 21.3668 9.2774 20.5858 8.51096Z");
`;

const Arrow = styled.div<TooltipProps>`
  ${(props) => getArrowSize(props)}
`;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  return <TooltipWrapper ref={ref}>
    <div>{props.children}</div>
    <ArrowWrapper arrowPosition={props.arrowPosition} arrowAlign={props.arrowAlign}>
      <Arrow arrowPosition={props.arrowPosition} arrowAlign={props.arrowAlign} />
    </ArrowWrapper>
  </TooltipWrapper>;
});