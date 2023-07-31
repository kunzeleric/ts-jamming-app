import { styled } from "styled-components";


export const PlaylistContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const EmptyPlayListContainer = styled.div`
    text-align: center;
    background-color: rgba(92, 62, 163, 0.8);
    padding: 2rem 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;

    p {
        font-size: 1.5rem;
        color: var(--white);
    }

    a {
        text-decoration: none;
        color: var(--gray-900);
        font-weight: bold;

        &:hover {
            color: var(--purple-200);
        }
    }

`