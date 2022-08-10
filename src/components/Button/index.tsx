/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Container, Load, Title, TypeProps } from './styles'
import {
  RectButtonProps,
  GestureHandlerRootView
} from 'react-native-gesture-handler'

type Props = RectButtonProps & {
  title: string
  type?: TypeProps
  isLoading?: boolean
}

export default function Button({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GestureHandlerRootView>
      {/* @ts-ignore */}
      <Container type={type} enabled={!isLoading} {...rest}>
        {isLoading ? <Load /> : <Title>{title}</Title>}
      </Container>
    </GestureHandlerRootView>
  )
}
