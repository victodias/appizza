import styled, { css } from 'styled-components/native'
import { ActivityIndicatorProps } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export type TypeProps = 'primary' | 'secondary'

type Props = {
  type: TypeProps
}

export const Container = styled(RectButton) <Props>`
  align-items: center;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800};
  border-radius: 12px;
  flex: 1;
  justify-content: center;
  max-height: 56px;
  min-height: 56px;
  width: 100%;
`
export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`
export const Load = styled.ActivityIndicator.attrs(
  ({ theme }) =>
    <ActivityIndicatorProps>{
      color: theme.COLORS.TITLE
    }
)``
