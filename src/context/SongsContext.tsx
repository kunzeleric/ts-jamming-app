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
  fetchData: (query: string) => Promise<void>;
}

export const SongsContext = createContext({} as SongsContextType)

interface SongsContextProviderProps {
  children: ReactNode
}

export function SongsContextProvider({ children }: SongsContextProviderProps) {
  const [songs, setSongs] = useState<Song[]>([])

  async function fetchData(query: string): Promise<void> {
    const response = await Deezer.searchTrack(query);
    if (response) {
      setSongs(response);
    }
  }

  return (
    <SongsContext.Provider value={{ songs, fetchData }}>
      {children}
    </SongsContext.Provider>
  )
}