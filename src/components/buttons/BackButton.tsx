import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import IconButton from './IconButton';
import { ReactComponent as ArrowBackIcon } from "../../assets/arrow-back.svg";

const Wrapper = styled.div`
    z-index: 5;
`

const BackButton = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
  return (
    <Wrapper>
            <IconButton
              filled
              onClick={goBack}
            >
              <ArrowBackIcon />
            </IconButton>
          </Wrapper>
  )
}

export default BackButton