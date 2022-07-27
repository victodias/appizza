import { Container, TypeProps } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  type?: TypeProps
}

export default function Input({ type = 'primary', ...rest }: Props) {
  return <Container type={type} {...rest} />
}
