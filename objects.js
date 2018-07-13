var playlist = { artist: "song" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = { }
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist
}
