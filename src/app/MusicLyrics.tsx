import React, { useState, useEffect } from 'react';
import Lrc from 'lrc-file-parser';

const SongWithLyrics = () => {
  const [lrcData, setLrcData] = useState([]);

  useEffect(() => {
    const lrcString = `
      [00:13.00] Ever since I was a small boy
      [00:18.00] No one else compared to you, no way
      [00:24.00] I always thought heroes stayed close
      [00:28.00] Whenever troubled times arose
      [00:33.00] I didn't know
      [00:36.00] Ain't always how it goes
      [00:42.00] Every single word you told me
      [00:47.00] I believed without a question, always
      [00:52.00] To save all of us, you told us both to trust
      [00:58.00] But now I know you only saved yourself
      [01:06.00] Did you think I'd never know?
      [01:10.00] Never wise up as I grow?
    `;
    const parser = new Lrc(lrcString);
    setLrcData(parser.lines);  // This will set the parsed lyrics with timing
  }, []);

  return (
    <div>
      <audio controls>
        <source src="your-audio-file.mp3" type="audio/mpeg" />
      </audio>
      <div>
        {lrcData.map((line, index) => (
          <p key={index}>{line.text}</p>
        ))}
      </div>
    </div>
  );
};

export default SongWithLyrics;
