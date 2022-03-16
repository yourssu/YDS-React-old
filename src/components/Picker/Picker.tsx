import React, { useCallback, useEffect, useState } from 'react'
import { PickerProps } from '../../types'
import { BottomDim, Content, Selected, TopDim, Wrapper } from './Picker.styles'

const Picker: React.VFC<PickerProps> = ({ columns, onChange, ...props }) => {
  const [topCotents, setTopCotents] = useState<PickerProps['columns']>([[]])
  const [selectedCotentIndex, setSelectedCotentIndex] = useState<number[]>([])
  const [bottomCotents, setBottomCotents] = useState<PickerProps['columns']>([[]])
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
    <Content {...props}>
      <div className="content-container">
        {columns.map((column, colIdx) => (
          <Wrapper
            key={`picker-wrapper-${colIdx}--key`}
            onMouseDown={onDragStart}
            onMouseMove={(e) => onDrag(e, colIdx)}
            onMouseUp={onDragEnd}
            onDragEnd={onDragEnd}
            className={`picker-wrapper-${colIdx}`}
          >
            <TopDim>
              {topCotents[colIdx]?.map(
                (content, i) =>
                  content && (
                    <li key={content + `${colIdx}--top-key-${i}`} className={content === '__null__' ? 'null' : ''}>
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
                (content, i) =>
                  content && (
                    <li key={content + `${colIdx}--bottom-key-${i}`} className={content === '__null__' ? 'null' : ''}>
                      <span>{content}</span>
                    </li>
                  ),
              )}
            </BottomDim>
          </Wrapper>
        ))}
      </div>
    </Content>
  )
}

export default Picker
