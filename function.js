let trackwrappers = document.querySelectorAll('.track-name-wrapper');

for (let track of trackwrappers) {
  console.log(track.querySelector('.tracklist-name').innerText + ' | by ' + track.querySelector('.link-subtle').innerText);
}
