/* eslint-disable @typescript-eslint/no-misused-promises */
import { ReactNode, createContext, useMemo, useState } from "react";
import { Deezer } from "../api/Deezer";
import { toast } from "react-toastify";

interface AlbumType {
  cover: string;
  title: string;
}

interface ArtistProps {
  name: string;
  picture: string;
  tracklist: string;
}

export interface Song {
  id: number;
  preview: string;
  title: string;
  album: AlbumType;
  artist: ArtistProps;
  isInPlaylist: boolean | null;
}

interface SongsContextType {
  songs: Song[];
  playlist: Song[];
  fetchData: (query: string) => Promise<void>;
  handleAddSong: (song: Song) => void;
  handleRemoveSong: (song: Song) => void;
}

export const SongsContext = createContext({} as SongsContextType);

interface SongsContextProviderProps {
  children: ReactNode;
}

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Song[]>([]);

  const notify = (msg?: string) => toast(msg);

  async function fetchData(query: string): Promise<void> {
    const response = await Deezer.searchTrack(query);
    if (response) {
      setSongs(response);
    }
  }

  const handleAddSong = (song: Song) => {
    notify("Song added!");
    setPlaylist((prevTracks) => [
      ...prevTracks,
      { ...song, isInPlaylist: true },
    ]);

    setSongs((prevTracks) =>
      prevTracks.filter((track) => track.id !== song.id)
    );
  };

  const handleRemoveSong = (song: Song) => {
    notify("Song removed!");
    setPlaylist((prevTracks) =>
      prevTracks.filter((track) => track.id !== song.id)
    );
    setSongs((prevTracks) => [...prevTracks, { ...song, isInPlaylist: false }]);
  };

  const contextValue = useMemo(
    () => ({ songs, playlist, fetchData, handleAddSong, handleRemoveSong }),
    [songs, playlist, fetchData, handleAddSong, handleRemoveSong]
  );

  return (
    <SongsContext.Provider value={contextValue}>
      {children}
    </SongsContext.Provider>
  );
}
