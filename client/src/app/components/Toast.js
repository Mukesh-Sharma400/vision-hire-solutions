import styled from "styled-components";

export default function Toast({ message }) {
  return <DisplayWrapper>{message}</DisplayWrapper>;
}

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(225, 225, 225, 1);

  @media (max-width: 400px) {
    width: 300px;
    font-size: 14px;
  }
`;
