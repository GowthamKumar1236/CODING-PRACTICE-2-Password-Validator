// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PasswordCard = styled.div`
  background-color: #383a4e;
  width:380px;
  height:260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 16px solid #434451;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 35px;
  font-weight:400;
  margin-bottom:0px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 12px;
 margin-bottom:30px;
 font-weight:400;
`

export const Input = styled.input`
  height: 34px;
  width: 280px;
  padding: 10px;
  outline: none;
  border-width: 0px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  font-size: 10px;
  font-weight:400;
`
