import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .content-container {
    width: 100%;
    display: flex;
    z-index: 10;
    height: 100%;
  }
`

export const TopDim = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderNormal};

  li {
    position: relative;
    margin: 4px 20px;

    &::after {
      content: '';
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  z-index: 20;
  justify-content: center;
  cursor: grab;
  width: 100%;
  flex-direction: column;

  height: 100%;

  ul {
    flex-direction: column;
    li {
      height: 23px;
      ${getTypoStyle(Typography.Body1)};
      color: ${({ theme }) => theme.color.textPrimary};
      user-select: none;
    }
  }

  .null {
    font-size: 0;
    color: transparent;
  }
`

export const Selected = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 4px 20px;
  }
`

export const BottomDim = styled.ul`
  display: flex;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.color.borderNormal};

  li {
    position: relative;
    margin: 4px 20px;

    &::before {
      content: '';
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`
