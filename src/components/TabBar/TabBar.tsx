import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { ArrowLeftLineIcon, ArrowRightLineIcon } from '../../icons'
import { Divider } from '../Divider/Divider'
import { Tab, TabItem } from './Tab'

export interface TabBarProps {
  scrollable: boolean
  navigation: boolean
  children: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TabBarNavigation = styled.button`
  width: 24px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bgElevated};
  color: ${({ theme }) => theme.color.buttonNormal};
  border: none;

  &:active {
    background-color: ${({ theme }) => theme.color.buttonNormalPressed};
  }
`

const TabList = styled.div<{ scrollable: boolean }>`
  display: flex;
  overflow-x: ${({ scrollable }) => (scrollable ? 'scroll' : 'visible')};
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  ${TabItem} {
    width: ${({ scrollable }) => (scrollable ? '88px' : 'auto')};
  }
`

const TabBarWrapper = styled.div<{ scrollable: boolean; navigation: boolean }>`
  display: flex;
  align-items: center;

  ${TabBarNavigation} {
    flex: 0 1 auto;
    display: ${({ scrollable, navigation }) => (scrollable && navigation ? 'block' : 'none')};
  }
`

export const TabBar = forwardRef<HTMLDivElement, TabBarProps>((props, ref) => (
  <>
    <TabBarWrapper scrollable={props.scrollable} navigation={props.navigation} ref={ref}>
      <TabBarNavigation>
        <ArrowLeftLineIcon />
      </TabBarNavigation>
      <TabList scrollable={props.scrollable}>{props.children}</TabList>
      <TabBarNavigation>
        <ArrowRightLineIcon />
      </TabBarNavigation>
    </TabBarWrapper>
    <Divider thickness="thin" direction="horizontal" />
  </>
))
