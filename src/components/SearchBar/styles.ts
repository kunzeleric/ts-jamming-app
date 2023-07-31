import { styled } from "styled-components";


export const SearchFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: var(--gray-700);
      color: var(--gray-100);
      padding: 1rem;

      &::placeholder {
      color: var(gray-300);
    }
  }
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 0;
      border-radius: 6px;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--white);
      padding: 1rem;
      background: var(--purple-500);
      cursor: pointer;

      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: var(--purple-300);
        transition: background-color 0.2s;
      }
    }
`