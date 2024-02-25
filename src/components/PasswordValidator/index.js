// Write your code here
import {useState} from 'react'

import {
  BackGroundContainer,
  CardContainer,
  Heading,
  Description,
  InputPasswordContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, newInput] = useState('')
  const [isError, errorUpdate] = useState(true)

  const passwordInputChanged = event => {
    const userInputLength = userInput.length
    if (userInputLength < 8) {
      errorUpdate(true)
      newInput(event.target.value)
    } else {
      errorUpdate(false)
      newInput(event.target.value)
    }
  }

  return (
    <BackGroundContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputPasswordContainer
          onChange={passwordInputChanged}
          type="password"
          value={userInput}
        />
        {isError && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>
        )}
      </CardContainer>
    </BackGroundContainer>
  )
}

export default PasswordValidator
