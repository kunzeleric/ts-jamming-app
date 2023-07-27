import { useContext } from "react"
import { SearchBar } from "../../components/SearchBar"
import { HomeContainer, TrackListWrapper } from "./styles"
import { SongsContext } from "../../context/SongsContext"
import { Track } from "../../components/Track"

export const Home = () => {

  const { songs } = useContext(SongsContext);

  console.log(songs)

  return (
    <HomeContainer>
      <SearchBar />
      <TrackListWrapper>
        {
          songs ? songs.map((song) => {
            return <Track key={song.id} song={song} />
          }) : null
        }
      </TrackListWrapper>
    </HomeContainer>
  )
}
