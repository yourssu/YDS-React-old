import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../styles/foundation/typo/typo'

export const Wrapper = styled.div`
  .container {
    display: flex;
    width: 100%;
    padding: 20px 8px;
    flex-direction: column;
  }
`

export const SubHeader = styled.div`
  display: flex;
  padding: 0 20px;
  width: 100%;
  align-items: center;
  ${getTypoStyle(Typography.Body1)};
  color: ${({ theme }) => theme.color.textSecondary};
  height: 48px;
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getTypoStyle(Typography.Body1)};
  color: ${({ theme }) => theme.color.textSecondary};

  .listItem-container {
    height: 48px;
  }
`
