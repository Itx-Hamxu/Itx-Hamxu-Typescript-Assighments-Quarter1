interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = make_album("Taylor Swift", "Folklore");
const album2 = make_album("The Beatles", "Abbey Road", 17);
const album3 = make_album("Ed Sheeran", "÷ (Divide)", 16);

console.log(album1);
console.log(album2);
console.log(album3);
