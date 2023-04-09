import React, { useState, useEffect, useRef } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import AudioPlayer from 'react-audio-player';

const spotifyApi = new SpotifyWebApi();
const clientId = 'a4e5ac6852d54e5da4dcb7154f770571';
const clientSecret = 'dfcb6a5faf37477c9644d352c892aef1';

const SongPlayer = () => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
  };

  const getPreviewUrl = async () => {
    const token = await getToken();
    spotifyApi.setAccessToken(token);
    const searchResults = await spotifyApi.searchTracks('Mikrokosmos BTS');
    const trackId = searchResults.body.tracks?.items[0]?.id;
    if (trackId) {
      const track = await spotifyApi.getTrack(trackId);
      setPreviewUrl(track.body.preview_url as string);
    }
  };

  useEffect(() => {
    getPreviewUrl();
  }, []);

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
<>
<>
  <button className='' onClick={playSong}>
  {previewUrl && (
    <audio ref={audioRef} controls autoPlay>
      <source src={previewUrl} type="audio/mpeg" />
    </audio>
  )}
  </button>
</>
</>
  );
};

export default SongPlayer;
