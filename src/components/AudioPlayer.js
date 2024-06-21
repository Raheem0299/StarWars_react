import React from 'react';


const AudioPlayer = () => {
  return (
    <div>

      <audio controls autoPlay hidden>
        <source src="/src/media/starWarsAudio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

    </div>
  );
};

export default AudioPlayer;
