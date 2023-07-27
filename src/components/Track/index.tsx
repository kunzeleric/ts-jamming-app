import { Song } from "../../context/SongsContext"
import { TrackContainer } from "./styles";

interface TrackProps {
  song: Song;
}

export const Track = ({ song }: TrackProps) => {
  return (
    <TrackContainer>
      <img src={song.album.cover} alt="" />
      <div>
      <p>{song.title}</p>
      <p>{song.artist.name}</p>
      <p>{song.album.title}</p>
      </div>
    </TrackContainer>
  )
}
