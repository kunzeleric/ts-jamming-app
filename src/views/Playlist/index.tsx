import { useContext } from "react";
import { EmptyPlayListContainer, PlaylistContainer } from "./styles";
import { SongsContext } from "../../context/SongsContext";
import { MusicNotes, Playlist as PlaylistIcon } from "phosphor-react";
import { Link } from "react-router-dom";
import { Track } from "../../components/Track";
import {
  BarWrapper,
  TrackListHeader,
  IconWrapper,
  TrackListWrapper,
} from "../Home/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Playlist = () => {
  const { playlist } = useContext(SongsContext);

  return (
    <PlaylistContainer>
      <ToastContainer
        autoClose={1000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme={"dark"}
      />
      {playlist.length > 0 ? (
        <BarWrapper>
          <TrackListHeader>
            <Link to="/">
              <IconWrapper>
                <MusicNotes color="white" size={32} />
              </IconWrapper>
            </Link>
            <h2>My Playlist</h2>
            <div>
              <Link to="/playlist">
                <IconWrapper>
                  <PlaylistIcon color="white" size={32} />
                </IconWrapper>
              </Link>
            </div>
          </TrackListHeader>
          <TrackListWrapper>
            {playlist?.map((song) => {
              return <Track key={song.id} song={song} />;
            })}
          </TrackListWrapper>
        </BarWrapper>
      ) : (
        <EmptyPlayListContainer>
          <p>
            No songs yet! Please go back to <Link to="/">home</Link> and add
            some :)
          </p>
        </EmptyPlayListContainer>
      )}
    </PlaylistContainer>
  );
};
