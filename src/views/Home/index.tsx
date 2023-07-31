import { useContext } from "react"
import { SearchBar } from "../../components/SearchBar"
import { HomeContainer, TrackListWrapper, BarWrapper, TrackListHeader, IconWrapper } from "./styles"
import { SongsContext } from "../../context/SongsContext"
import { Track } from "../../components/Track"
import 'simplebar-react/dist/simplebar.min.css';
import { MusicNotes, Playlist } from "phosphor-react"
import { Link } from "react-router-dom"

export const Home = () => {
  const { songs } = useContext(SongsContext);

  return (
    <HomeContainer>
      <SearchBar />
      {
        songs.length > 0 ?
          <BarWrapper>
            <TrackListHeader>
              <Link to="/">
                <IconWrapper>
                  <MusicNotes color="white" size={32} />
                </IconWrapper>
              </Link>
              <h2>Search Results</h2>
              <div>
                <Link to="/playlist">
                  <IconWrapper>
                    <Playlist color="white" size={32} />
                  </IconWrapper>
                </Link>
              </div>
            </TrackListHeader>
            <TrackListWrapper>
              {
                songs?.map((song) => {
                  return <Track key={song.id} song={song} />
                })
              }
            </TrackListWrapper>
          </BarWrapper>
          : null}
    </HomeContainer>
  )
}
