import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'

export interface TooltipProps {
  arrowPosition: 'top' | 'bottom' | 'left' | 'right'
  arrowAlign: 'start' | 'center' | 'end'
  pointed: boolean
}

const getArrowSize = ({ arrowPosition }: TooltipProps) =>
  arrowPosition === 'top' || arrowPosition === 'bottom' ? 'width: 44px; height: 9px;' : 'height: 44px; width: 9px;'

const getArrowPosition = ({ arrowPosition, arrowAlign }: TooltipProps) => {
  const positionCss = css`
    ${arrowPosition}: -9px;
  `
  const isHorizontal = arrowPosition === 'top' || arrowPosition === 'bottom'
  const alignSetup = {
    start: css`
      ${isHorizontal ? 'left' : 'top'}: 0;
    `,
    center: css`
      ${isHorizontal ? 'left' : 'top'}: 50%;
      transform: ${isHorizontal ? 'translate(-50%, 0)' : 'translate(0, -50%)'};
    `,
    end: css`
      ${isHorizontal ? 'right' : 'bottom'}: 0;
    `,
  }
  return [positionCss, alignSetup[arrowAlign]]
}

const getArrowTransform = ({ arrowPosition }: TooltipProps) =>
  ({
    top: css`
      transform: rotate(180deg);
    `,
    bottom: css``,
    left: css`
      transform-origin: top left;
      transform: translate(9px, 0) rotate(90deg);
    `,
    right: css`
      transform-origin: top left;
      transform: translate(0, 44px) rotate(270deg);
    `,
  }[arrowPosition])

const TooltipWrapper = styled.div<{ pointed: boolean }>`
  position: relative;
  background-color: ${({ pointed, theme }) => (pointed ? theme.color.tooltipPoint : theme.color.tooltipBG)};
  color: ${({ theme }) => theme.color.textReserved};
  ${getTypoStyle(Typography.Body2)}
  padding: 12px 16px;
  border-radius: 8px;
  margin: 0 8px;
`

const TooltipContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`

const ArrowWrapper = styled.div<TooltipProps>`
  position: absolute;
  ${(props) => getArrowPosition(props)}
  ${(props) => getArrowSize(props)}
`

const arrowPath =  'path("M20.5858 8.51096L14.3431 2.3851C12.8429 0.912872 10.808 0.0857849 8.68629 0.0857849H35.3137C33.192 0.0857849 31.1571 0.91287 29.6569 2.38509L23.4142 8.51096C22.6332 9.27739 21.3668 9.2774 20.5858 8.51096Z")'

const Arrow = styled.svg<TooltipProps>`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ pointed, theme }) => (pointed ? theme.color.tooltipPoint : theme.color.tooltipBG)};
  ${(props) => getArrowTransform(props)}
`

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => (
  <TooltipWrapper pointed={props.pointed} ref={ref}>
    <TooltipContent>
      <div>{props.children}</div>
    </TooltipContent>
    <ArrowWrapper
      arrowPosition={props.arrowPosition ?? 'top'}
      arrowAlign={props.arrowAlign ?? 'start'}
      pointed={props.pointed}
    >
      <Arrow
        arrowPosition={props.arrowPosition ?? 'top'}
        arrowAlign={props.arrowAlign ?? 'start'}
        pointed={props.pointed}
        width="44"
        height="10"
        viewBox="0 0 44 10"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.5858 8.51096L14.3431 2.3851C12.8429 0.912872 10.808 0.0857849 8.68629 0.0857849H35.3137C33.192 0.0857849 31.1571 0.91287 29.6569 2.38509L23.4142 8.51096C22.6332 9.27739 21.3668 9.2774 20.5858 8.51096Z" />
      </Arrow>
    </ArrowWrapper>
  </TooltipWrapper>
))
