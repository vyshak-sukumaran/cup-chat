import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import styled from "styled-components";
import { breakpoints } from '../../utils/breakpoints'

interface MProps {
  sender?: boolean;
  message?: string;
  timestamp?: any;
  photoUrl?: string;
}
const Container = styled.div<{ sender?: boolean }>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${(props) => (!props.sender ? "row" : "row-reverse")};
  gap: 5px;
`;
const Wrapper = styled.div<MProps>`
  width: fit-content;
  background-color: ${(props) =>
    props.sender ? "var(--blue-dark)" : "var(--cream)"};
  color: ${(props) => (props.sender ? "white" : "var(--black)")};
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  box-sizing: border-box;
  margin: ${(props) => (props.sender ? "0 3px 0 auto" : "0 0 0 3px")};
  max-width: 350px;

  /* &::before {
    content: " ";
    display: block;
    position: absolute;
    ${(props) => (props.sender ? "right: -10px;" : "left: -10px;")}
    bottom: 0;
    width: 12px;
    height: 8px;
    background: ${(props) =>
      props.sender
        ? "linear-gradient(45deg, var(--blue-dark) 50%, rgba(255, 255, 255, 0) 50%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0) 50%, var(--cream) 50%)"};
  } */
`;
const Time = styled.div<MProps>`
  margin-top: 8px;
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: ${(props) => (props.sender ? "#d6d6d6" : "#747474")};
  text-align: ${(props) => (props.sender ? "right" : "left")};
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;

  @media (${breakpoints.sm}) {
    width: 3rem;
  height: 3rem;
  }
`

const Message = ({ sender, message, timestamp, photoUrl }: MProps) => {

  let t = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
  let time = dayjs(t).format("HH:mm a");
  return (
    <Container sender={sender}>
      <Image src={photoUrl? photoUrl : "/favicon.ico"} />
      <Wrapper sender={sender}>
        <span>{message}</span>
        <Time sender={sender}>{time}</Time>
      </Wrapper>
    </Container>
  );
};

export default Message;
