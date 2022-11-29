import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 200ms ease-out;
  color: white;
  height: fit-content;
  padding: 1rem;
`;

const shine = keyframes`
    to {
        background-position-x: -20%;
    }
`;

const Shining = styled.div<{ height?: string; width?: string }>`
  height: ${(props) => (!props.height ? "2.2rem" : props.height)};
  width: ${(props) => (!props.width ? "50%" : props.width)};
  background-color: #cecccc;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      #e0e0e07e 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #9c9c9c;
  background-size: 200% 100%;
  background-position-x: 180%;
  margin-bottom: 1rem;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  animation: ${shine} 1500ms linear infinite forwards;

  &:last-child {
    margin-bottom: 0;
  }
`;
const MessageContainer = styled.div<{sender?: boolean}>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${props => !props.sender ? "row" : "row-reverse"};
  gap: 7px;
`;
const MessageImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #cecccc;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      #e0e0e07e 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #9c9c9c;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: ${shine} 1500ms linear infinite forwards;
  overflow: hidden;
`;
const MessageWrapper = styled.div`
  width: 150px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 200ms ease-out;
  color: white;
  height: fit-content;
  padding: 0.8rem;
`;

const RoomSkeleton = () => {
  return (
    <Wrapper>
      <Shining width="30%"></Shining>
      <Shining height="20px"></Shining>
      <Shining height="20px" width="80%"></Shining>
    </Wrapper>
  );
};

const MessageSkeleton = ({ sender }: { sender?: boolean }) => {
  return (
    <MessageContainer sender={sender}>
      <MessageImage></MessageImage>
      <MessageWrapper>
        <Shining
          height="25px"
          width="100%"
          style={{ marginBottom: "10px" }}
        ></Shining>
        <Shining height="15px" width="100%"></Shining>
      </MessageWrapper>
    </MessageContainer>
  );
};

export { RoomSkeleton, MessageSkeleton };
