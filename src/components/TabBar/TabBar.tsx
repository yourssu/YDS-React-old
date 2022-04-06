import React, { createContext, forwardRef, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { ArrowLeftLineIcon, ArrowRightLineIcon } from '../../icons'
import { Divider } from '../Divider/Divider'
import { Tab, TabBase } from './Tab'

export interface TabBarProps {
  scrollable: boolean
  navigation: boolean
  children: React.ReactNode
  value: string
  onChange?: (id: string) => void
}

export interface TabBarState {
  id: string | undefined
  setId: (id: string) => void
}

export const TabBarContext = createContext<TabBarState | undefined>(undefined)

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

  ${TabBase} {
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

export interface TabBarProviderProps {
  children: React.ReactNode
  onChange: (id: string) => void
}

function TabBarProvider({ children, onChange }: TabBarProviderProps) {
  const [id, setId] = useState<string | undefined>(undefined)
  const changeId = (newId: string) => {
    setId(newId)
    onChange(newId)
  }

  const value = useMemo(
    () => ({
      id,
      setId: changeId,
    }),
    [id],
  )

  return <TabBarContext.Provider value={value}>{children}</TabBarContext.Provider>
}

export const TabBar = forwardRef<HTMLDivElement, TabBarProps>((props, ref) => (
  <TabBarProvider onChange={props.onChange ?? ((id) => {})}>
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
  </TabBarProvider>
))
