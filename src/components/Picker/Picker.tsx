import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Content = styled.div`
  display: flex;
  width: fit-content;
  z-index: 10;
  height: 100%;
`

const TopDim = styled.ul`
  display: flex;
  flex-direction: column;
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
      background-color: ${({ theme }) => theme.color.dimThickReserved};
    }
  }
`

const Wrapper = styled.div<{ positionY: number }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 20;
  height: 100%;

  .container {
    transform: ${({ positionY }) => `translateY(${positionY}px)`};
  }

  li {
    width: 18px;
    height: 23px;
    ${getTypoStyle(Typography.Body1)};
    color: ${({ theme }) => theme.color.textPrimary};
  }
`

const Selected = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin: 4px 20px;
  }
`

const BottomDim = styled.ul`
  display: flex;
  flex-direction: column;
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
      background-color: ${({ theme }) => theme.color.dimThickReserved};
    }
  }
`

type ToogleProps = {
  /** Max Coulmn length 3 */
  columns: string[][]

  /** handle selected content */
  onChange: (strings: string[]) => void
} & React.HtmlHTMLAttributes<HTMLInputElement>
//   callback: (selectedContent: string[]) => unknown

const Picker: React.VFC<ToogleProps> = ({ columns, onChange }) => {
  const [topCotents, setTopCotents] = useState<ToogleProps['columns']>([[]])
  const [selectedCotentIndex, setSelectedCotentIndex] = useState<number[]>([])
  const [bottomCotents, setBottomCotents] = useState<ToogleProps['columns']>([[]])
  const [translateY, setTranslateY] = useState<number[] | undefined>([])
  const [pageY, setPageY] = useState(0)

  const onSelect = useCallback(
    (col: number, index: number) => {
      setSelectedCotentIndex((prevs) => {
        setTranslateY((prev) => {
          const pickerWrapper = document.body.querySelector('.picker-wrapper')
          if (pickerWrapper) {
            const listHeight = pickerWrapper?.clientHeight / columns[col].length
            if (prev && prev.length - 1 < col) {
              prev?.push(listHeight * Math.floor(columns[col].length / 2) - listHeight * index)
            }
            return prev
          }
        })

        return [...prevs.map((prev, idx) => (idx === col ? index : prev))]
      })
    },
    [columns],
  )

  useEffect(() => {
    columns.forEach((column) => {
      const halfLength = Math.floor(column.length / 2)
      setSelectedCotentIndex((prev) => {
        return [...prev, halfLength]
      })
    })
  }, [columns])

  useEffect(() => {
    setTopCotents(() => {
      return [
        ...columns.map((col, colIndex) =>
          col.map((content, contentIdx) => (contentIdx < selectedCotentIndex[colIndex] ? content : '')),
        ),
      ]
    })

    setBottomCotents(() => {
      return [
        ...columns.map((col, colIndex) =>
          col.map((content, contentIdx) => (contentIdx > selectedCotentIndex[colIndex] ? content : '')),
        ),
      ]
    })

    onChange(selectedCotentIndex.map((contentIndex, colIndex) => columns[colIndex][contentIndex]))
  }, [selectedCotentIndex, columns, onChange])

  //
  return (
    <ThemeProvider>
      <Content>
        {columns.map((column, colIdx) => (
          <Wrapper className="picker-wrapper" positionY={translateY[colIdx] || 0}>
            <div className="container">
              <TopDim>
                {topCotents[colIdx]?.map(
                  (content, contentIndex) =>
                    content && (
                      <li onClick={() => onSelect(colIdx, contentIndex)}>
                        <span>{content}</span>
                      </li>
                    ),
                )}
              </TopDim>
              <Selected>
                <li>
                  <span>{column[selectedCotentIndex[colIdx]]}</span>
                </li>
              </Selected>
              <BottomDim>
                {bottomCotents[colIdx]?.map(
                  (content, contentIndex) =>
                    content && (
                      <li onClick={() => onSelect(colIdx, contentIndex)}>
                        <span>{content}</span>
                      </li>
                    ),
                )}
              </BottomDim>
            </div>
          </Wrapper>
        ))}
      </Content>
    </ThemeProvider>
  )
}

export default Picker
