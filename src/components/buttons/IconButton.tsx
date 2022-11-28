import styled from "styled-components";
// import { breakpoints } from '../../utils/breakpoints'
interface BProps {
  filled?: boolean;
}

const IconButton = styled.button<BProps>`
  background-color: ${(props) =>
    !props.filled ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.096)"};
  outline: 0 !important;
  border: 0 !important;
  height: fit-content;
  padding: 0.6rem;
  border-radius: 50%;
  transition: all 200ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  svg {
    height: 25px;
    width: 30px;
    fill: ${props => !props.filled ? "white" : "var(--blue)"} !important;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      !props.filled ? "rgba(255, 255, 255, 0.021)" : "rgba(255, 255, 255, 0.151)"};
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }

`;

export default IconButton;
