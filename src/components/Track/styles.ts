import { styled } from "styled-components";

export const TrackContainer = styled.div`
    display: flex;
    text-align: left;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    transition: transform 0.2s ease-in-out;
    border-bottom: 1px solid var(--purple-500);

    &:first-child {
        border-top: 1px solid var(--purple-500);
    }

    .icon {
        color: white;
        cursor: pointer;
    }

    .icon:hover {
        color: var(--purple-200);
        transform: scale(1.15);
        transition: all 0.2s;
    }
`;

export const TrackInfo = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ArtistContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1.5rem;

    p {
        color: var(--white);
    }

    p.title{
        font-size: 1.25rem;
        font-weight: bold;
    }

    p.name {
        font-size: 1.1rem;
    }

    p.album {
        font-style: italic;
        font-size: 1.1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const ButtonIcon = styled.button`
    background: transparent;
    border: 0;
    color: var(--white);
    cursor: pointer;
`

