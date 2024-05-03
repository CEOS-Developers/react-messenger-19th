import styled from "styled-components"
import serviceIcon1 from "../../assets/icons/service1.png"
import serviceIcon2 from "../../assets/icons/service2.png"
import serviceIcon3 from "../../assets/icons/service3.png"
import serviceIcon4 from "../../assets/icons/service4.png"


function ServiceTab() {
  return (
    <ServiceTabContaniner>
        <Title>
            <h4>서비스</h4>
            <span>전체보기</span>
        </Title>
        <ServiceIconWrapper>
            <img src={serviceIcon1}/>
            <img src={serviceIcon2}/>
            <img style={{width: "28px"}} src={serviceIcon3}/>
            <img style={{width: "34px"}} src={serviceIcon4}/>
        </ServiceIconWrapper>
    </ServiceTabContaniner>
  )
}


const ServiceTabContaniner = styled.div`
    width: 375px;
    height: 92.74px;
    padding: 0 18.55px 26.74px 17.45px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    gap: 282px;
    h4{
        font-size: 9px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.grey2};
    }
    span{
        font-size: 8px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.grey2};
    }
`
const ServiceIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 63px;
    justify-content: center;
    img{
        width: 24px;
        height: 39px;
    }
`

export default ServiceTab