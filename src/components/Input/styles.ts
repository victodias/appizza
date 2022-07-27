import styled, { css } from 'styled-components/native'
import { TextInput, TextInputProps } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

type Props = {
  type: TypeProps
}

export const Container = styled(TextInput).attrs<Props>(
  ({ theme, type }) =>
    <TextInputProps>{
      placeholderTextColor:
        type === 'primary'
          ? theme.COLORS.SECONDARY_900
          : theme.COLORS.PRIMARY_50
    }
)<Props>`
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  height: 56px;
  margin-bottom: 16px;
  padding: 7px 0;
  padding-left: 20px;
  width: 100%;

  ${({ theme, type }) => css`
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${type === 'primary'
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`
