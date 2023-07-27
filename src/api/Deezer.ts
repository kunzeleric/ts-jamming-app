import axios from 'axios';
import { Song } from '../context/SongsContext';

export interface ResponseType {
    data: {
        data: Song[],
        total: number,
        next: string
    }
}

export class Deezer {

    static async searchTrack(query: string) {
        const options = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/search?`,
            params: { q: query },
            headers: {
                'X-RapidAPI-Key': '0bad04c920mshe1e5ae991190eb6p119effjsnde8dae1141bb',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const { data }: ResponseType = await axios.request(options)
            return data.data
        } catch (error) {
            console.error(error);
        }
    }
}