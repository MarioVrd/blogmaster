import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.65em 1.5em;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 4px;
  border: none;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
