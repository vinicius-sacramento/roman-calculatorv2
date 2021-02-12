import styled from "styled-components";
import { shade } from "polished";
import { screen } from "../../breakpoints";

export const Display = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 20px;
  box-shadow: 1px 1px 2px 0 rgba(255, 255, 255, 0.25);

  background-color: #000;
  @media ${screen.desktop} {
    width: 50%;
  }
`;

export const OperationContainer = styled.div`
  width: 85%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;
  padding: 10px;

  background-color: #333333;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0 rgba(255, 255, 255, 0.25);

  @media ${screen.desktop} {
    width: 50%;
  }
`;

export const OperationInput = styled.input`
  width: 85%;

  padding: 10px;
  margin-right: 10px;

  font-size: 1rem;

  background-color: #6a6a6a;
  border: none;
  border-radius: 10px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 0.8; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;

export const OperationButton = styled.button`
  width: 15%;
  min-width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  background-color: #fe9505;
  border-radius: 10px;
  border: none;

  transition: 0.2s;
  &:hover {
    background-color: ${shade(0.1, "#fe9505")};
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const Result = styled.h1`
  word-break: break-word;
  padding: 10px 25px;

  font-size: 2.5rem;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  padding: 10px 25px;

  color: #cd2525;
  font-size: 1.1rem;
  text-align: center;
`;
