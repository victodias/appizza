import { Container, Load, Title, TypeProps } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}
