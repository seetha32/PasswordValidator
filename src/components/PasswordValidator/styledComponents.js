// Style your elements here
import styled from 'styled-components'

export const BackGroundContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 50px;
`

export const CardContainer = styled.div`
  text-align: center;
  height: 80%;
  width: 50%;
  margin: 20px;
  padding: 20px;
  background-color: #383a4e;
  border-radius: 8px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  letter-spacing: 2px;
  font-size: 40px;
`
export const Description = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
`
export const InputPasswordContainer = styled.input`
  outline: none;
  margin: 0px 20px 20px 20px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
`
export const PasswordErrorMsg = styled.p`
  color: #ef4444;
  font-size: 13px;
`
