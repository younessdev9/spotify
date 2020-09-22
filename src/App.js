import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/login/Login';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';

    const _token = hash.acces_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
    }
  }, [dispatch, token]);
  return (
    <div className="app">{token ? <h1>I'm Mogged in</h1> : <Login />}</div>
  );
}

export default App;
