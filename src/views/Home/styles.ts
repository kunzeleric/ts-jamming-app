import { styled } from "styled-components";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const HomeContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TrackListHeader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    border-radius: 10px;
    background-color: rgba(110, 50, 180, 0.9);
    width: 100%;
    align-items: center;
    
    h2{
        color: var(--white);
        text-transform: uppercase;
    }
`

export const TrackListWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    overflow: auto;
    height: 530px;
`

export const BarWrapper = styled(SimpleBar)`
    background-color: rgba(92, 62, 163, 0.8);
    border-radius: 10px;
    max-width: 700px;
    margin: 0 auto;
`

export const IconWrapper = styled.button`
    background: transparent;
    border: 0;
    border-radius: 8px;
    color: var(--white);
    cursor: pointer;
    padding: 1rem;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s;
        background-color: orange;
    }
`