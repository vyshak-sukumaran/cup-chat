import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import styled from "styled-components";

interface MProps {
  sender?: boolean;
  message?: string;
  timestamp?: any 
}

const Wrapper = styled.div<MProps>`
  width: fit-content;
  background-color: ${(props) =>
    props.sender ? "var(--blue-dark)" : "var(--cream)"};
  color: ${(props) => (props.sender ? "white" : "var(--black)")};
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.sender ? "8px 8px 0 8px" : "8px 8px 8px 0"};
  position: relative;
  box-sizing: border-box;
  margin: ${props => props.sender ? "0 12px 0 auto" : "0 0 0 12px"};
  max-width: 350px;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    ${props => props.sender ? "right: -10px;" : "left: -10px;"}
    bottom: 0;
    width: 12px;
    height: 8px;
    background: ${(props) =>
      props.sender
        ? "linear-gradient(45deg, var(--blue-dark) 50%, rgba(255, 255, 255, 0) 50%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0) 50%, var(--cream) 50%)"};
  }
`;
const Time = styled.div<MProps>`
  margin-top: 8px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: ${(props) => (props.sender ? "#d6d6d6" : "#747474")};
  text-align: ${props => props.sender ? "right" : "left"};
`;

const Message = ({ sender, message, timestamp }: MProps) => {
  let t = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate()
  let time = dayjs(t).format('HH:mm a')
  return (
    <Wrapper sender={sender}>
      <span>{message}</span>
      <Time sender={sender}>{time}</Time>
    </Wrapper>
  );
};

export default Message;
