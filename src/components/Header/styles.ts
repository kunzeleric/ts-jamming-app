import { styled } from "styled-components";

export const HeaderSection = styled.header`

  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 3rem;
  background-color: rgb(50, 50, 56, 0.4);

    h1 {
        font-size: 3rem;
        color: var(--white);
    }

    strong {
      color: var(--purple-500);
      text-decoration: underline;
      line-height: 1.6;
    }
`;