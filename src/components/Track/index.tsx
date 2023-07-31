import { useContext } from "react";
import { Song, SongsContext } from "../../context/SongsContext"
import { ArtistContainer, ButtonContainer, ButtonIcon, TrackContainer, TrackInfo } from "./styles";
import { PlusCircle, PlayPause } from "@phosphor-icons/react";

interface TrackProps {
  song: Song;
}

export const Track = ({ song }: TrackProps) => {
  const { handleAddSong } = useContext(SongsContext)

  return (
    <TrackContainer>
      <TrackInfo>
        <img src={song.album.cover} alt="" />
        <ArtistContainer>
          <p className="title">{song.title}</p>
          <p className="name">{song.artist.name}</p>
          <p className="album">{song.album.title}</p>
        </ArtistContainer>
      </TrackInfo>
      <ButtonContainer>
        <ButtonIcon onClick={() => handleAddSong(song)}>
          <PlusCircle className="icon" size={32} />
        </ButtonIcon>
        <ButtonIcon>
          <PlayPause className="icon" size={32} />
        </ButtonIcon>
      </ButtonContainer>
    </TrackContainer>
  )
}
