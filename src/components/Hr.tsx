import styled from "styled-components"
import theme from "@styles/theme"

export default function Hr() {
  return (
    <HrStyle></HrStyle>
  )
}

const HrStyle = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray_4};
  margin: 0 16px 4px 16px;
`