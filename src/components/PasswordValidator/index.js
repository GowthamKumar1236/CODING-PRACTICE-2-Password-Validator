// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  PasswordCard,
  Heading,
  Paragraph,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePswd = event => {
    setPassword(event.target.value)
  }

  return (
    <BgContainer>
      <PasswordCard>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangePswd} value={password} />
        {password.length > 8 ? (
          ''
        ) : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordCard>
    </BgContainer>
  )
}

export default PasswordValidator
