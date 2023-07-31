/* eslint-disable @typescript-eslint/no-misused-promises */
import { ReactNode, createContext, useState } from "react";
import { Deezer } from "../api/Deezer";

interface AlbumType {
  cover: string
  title: string
}

interface ArtistProps {
  name: string
  picture: string
  tracklist: string
}

export interface Song {
  id: number,
  preview: string,
  title: string,
  album: AlbumType,
  artist: ArtistProps
}

interface SongsContextType {
  songs: Song[],
  playlist: Song[],
  fetchData: (query: string) => Promise<void>;
  handleAddSong: (song: Song) => void;
  handleRemoveSong: (song: Song) => void;
}

export const SongsContext = createContext({} as SongsContextType)

interface SongsContextProviderProps {
  children: ReactNode
}

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const [songs, setSongs] = useState<Song[]>([])
  const [playlist ,setPlaylist] = useState<Song[]>([])

  async function fetchData(query: string): Promise<void> {
    const response = await Deezer.searchTrack(query);
    if (response) {
      setSongs(response);
    }
  }

  const handleAddSong = (song: Song) => {
    setPlaylist((prevTracks) => [...prevTracks, song])
  }

  const handleRemoveSong = (song: Song) => {
    setPlaylist((prevTracks) => prevTracks.filter((track) => {
      return track.id !== song.id
    }))
  }

  return (
    <SongsContext.Provider 
      value={{ songs, playlist, fetchData, handleAddSong, handleRemoveSong }}>
      {children}
    </SongsContext.Provider>
  )
}