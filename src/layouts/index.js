import styled from "@emotion/styled";

// normal CSS
export const Title = styled.h1`
  text-align: center;
  color: #1976d2;
`;
export const TwoColumnsLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  text-align: center;
  background-color: white;
  min-height: 100vh;
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

export const Center = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const Input = styled.input`
  width: 90%;
  margin: 0 auto;
  font-size: x-large;
  padding: 0.2rem;
`;

export const TableHead = styled.th`
  text-align: center;
  font-size: x-large;
  color: #1976d2;
`;
