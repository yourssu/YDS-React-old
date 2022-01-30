import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { getTypoStyle, Typography } from '../../styles/common/typo/typo'
import ThemeProvider from '../../styles/theme'

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 375px;

  .content-container {
    width: 100%;
    display: flex;
    z-index: 10;
    height: 100%;
  }
`

const TopDim = styled.ul`
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
      background-color: ${({ theme }) => theme.color.dimThickReserved};
    }
  }
`

const Wrapper = styled.div`
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

const Selected = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 4px 20px;
  }
`

const BottomDim = styled.ul`
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
      background-color: ${({ theme }) => theme.color.dimThickReserved};
    }
  }
`

type ToogleProps = {
  /** Max Coulmn length 3 */
  columns: string[][]

  /** handle selected content (parameters => selectedContent) */
  onChange: (strings: string[]) => void
} & React.HtmlHTMLAttributes<HTMLDivElement>

const Picker: React.VFC<ToogleProps> = ({ columns, onChange, ...props }) => {
  const [topCotents, setTopCotents] = useState<ToogleProps['columns']>([[]])
  const [selectedCotentIndex, setSelectedCotentIndex] = useState<number[]>([])
  const [bottomCotents, setBottomCotents] = useState<ToogleProps['columns']>([[]])
  const [isDrag, setIsDrag] = useState(false)
  const [pageY, setPageY] = useState(0)

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
        ...columns.map((col, colIndex) => {
          const newColumns = Array(3)
            .fill(0)
            .map((_, index) =>
              col[selectedCotentIndex[colIndex] - (3 - index)]
                ? col[selectedCotentIndex[colIndex] - (3 - index)]
                : '__null__',
            )
          return newColumns
        }),
      ]
    })

    setBottomCotents(() => {
      return [
        ...columns.map((col, colIndex) => {
          const newColumns = Array(3)
            .fill(0)
            .map((_, index) =>
              col[selectedCotentIndex[colIndex] + index + 1]
                ? col[selectedCotentIndex[colIndex] + index + 1]
                : '__null__',
            )
          return newColumns
        }),
      ]
    })

    onChange(selectedCotentIndex.map((contentIndex, colIndex) => columns[colIndex][contentIndex]))
  }, [selectedCotentIndex, columns, onChange])

  const onDragStart = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    setPageY(e.pageY)
    setIsDrag(true)
  }, [])

  const onDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, colIndex: number) => {
      if (!isDrag) return
      const CLIENT_HEIGHT = e.currentTarget.clientHeight
      const LENGTH = 7
      const HEIGHT = Math.floor(CLIENT_HEIGHT / LENGTH)

      if (pageY - e.pageY > HEIGHT) {
        setSelectedCotentIndex((contentIndexes) => {
          const newContentIndexes = contentIndexes.map((content, i) =>
            i === colIndex ? (content + 1 >= columns[i].length ? columns[colIndex].length - 1 : content + 1) : content,
          )
          return newContentIndexes
        })

        setIsDrag(false)
      }

      if (e.pageY - pageY > HEIGHT) {
        setSelectedCotentIndex((contentIndexes) => {
          const newContentIndexes = contentIndexes.map((content, i) =>
            i === colIndex ? (content - 1 < 0 ? 0 : content - 1) : content,
          )
          return newContentIndexes
        })

        setIsDrag(false)
      }
    },
    [columns, isDrag, pageY],
  )

  const onDragEnd = useCallback(() => {
    setIsDrag(false)
  }, [])

  return (
    <ThemeProvider>
      <Content {...props}>
        <div className="content-container">
          {columns.map((column, colIdx) => (
            <Wrapper
              onMouseDown={onDragStart}
              onMouseMove={(e) => onDrag(e, colIdx)}
              onMouseUp={onDragEnd}
              onDragEnd={onDragEnd}
              className={`picker-wrapper-${colIdx}`}
            >
              <TopDim>
                {topCotents[colIdx]?.map(
                  (content) =>
                    content && (
                      <li className={content === '__null__' ? 'null' : ''}>
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
                  (content) =>
                    content && (
                      <li className={content === '__null__' ? 'null' : ''}>
                        <span>{content}</span>
                      </li>
                    ),
                )}
              </BottomDim>
            </Wrapper>
          ))}
        </div>
      </Content>
    </ThemeProvider>
  )
}

export default Picker
