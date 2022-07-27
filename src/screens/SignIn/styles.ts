import styled, { css } from 'styled-components/native'
import { ScrollViewProps, ImageProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  justify-content: center;
`
export const Content = styled.ScrollView.attrs(() => <ScrollViewProps>({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
}))`
  padding: 0 32px;
  width: 100%;
`
export const Title = styled.Text`
  align-self: flex-start;
  font-size: 32px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`
export const Brand = styled.Image.attrs(() => <ImageProps>({
  resizeMode: 'contain'
}))`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
`
export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`
export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`
