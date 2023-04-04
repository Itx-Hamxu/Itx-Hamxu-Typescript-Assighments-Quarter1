"use strict";
function make_album(artist, title, tracks) {
  const album = {
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
const album3 = make_album("Ed Sheeran", "\xF7 (Divide)", 16);
console.log(album1);
console.log(album2);
console.log(album3);
//# sourceMappingURL=index.js.map
