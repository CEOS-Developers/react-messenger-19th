import styled from 'styled-components'
import FooterImg from '../assets/img/footer.png'

function Footer() {
  return (
    <FooterWrapper>
        <img src = {FooterImg}/>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 125px;
        height: 4.5px;
    }
`

export default Footer