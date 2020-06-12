import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
 
const TwitchPlayerOne = () => {
  return (
    <div>
      <TwitchEmbed
        channel="mothydula"

        theme="dark"
        muted
        onVideoPause={() => console.log(':(')}
      />
    </div>
  );
}

export default TwitchPlayerOne