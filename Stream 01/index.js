// DATA
const playLists = [
  {
    id: 1,
    title: 'Hip-Hop Hots',
tracks: [
  {
    artist: 'Eminem',
    title: 'Rap God',
    isNot: true,
    imageSource: 'file src'
  },
  {
    artist: '50 cent',
    title: 'RIn da Club',
    isNot: true
  }
]
  },
  {
    id: 2,
    title: 'Rap Hits 1990s',
    tracks: [
      {
        artist: 'EmPublic Enemy',
        title: 'Fight the Power',
        isNot: true
      },
    ]
  }
]

// RENDER

const root = document.getElementById('root');

for (let i = 0; i < playLists.length; i++) {
  const playList = playLists[i];

  const playListElement = document.createElement('div');

  const playListTitleElement = document.createElement('h2');
  playListTitleElement.append(playList.title);

  playListElement.append(playListTitleElement);

  root.append(playListElement);

  const tracksElement = document.createElement('ul');

  for (let j = 0; j < playList.tracks.length; j++) {
    const track = playList.tracks[j];
    
    const trackElement = document.createElement('li');

    const trackImageElement = document.createElement('img');
    trackImageElement.src = track.imageSource;

    trackElement.append(track.title);

    tracksElement.append(trackElement);

    
  }

playListElement.append(tracksElement);

root.append(playListElement);
}