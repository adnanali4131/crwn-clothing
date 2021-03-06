import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// this css help to render the style code that we use as a block as a sharing
const OptionsConatinerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const OptionsConatiner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  ${OptionsConatinerStyles}
`
export const OptionDiv = styled.div`
  ${OptionsConatinerStyles}
`
