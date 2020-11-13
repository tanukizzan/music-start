const inputFile = document.getElementById('file');
const music = document.getElementById('music');

inputFile.addEventListener('change', function(e) {
  const file = e.target.files;
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = function() {
    // music.src = reader.result;
    const rythm = new Rythm();
    rythm.setMusic(reader.result);
    // rythm.addRythm('rythm-bass', 'neon', 0, 10, {
    //   from: [0,0,255],
    //   to:[255,0,255]
    // });
    rythm.addRythm('rythm-bass', 'borderColor', 0, 10);
    rythm.start();
  }
})