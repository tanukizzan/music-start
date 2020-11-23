const inputFile = document.getElementById('file');
const music = document.getElementById('music');

inputFile.addEventListener('change', function (e) {
  const file = e.target.files;
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = () => {
    music.src = reader.result;
    const rythm = new Rythm();
    rythm.setMusic(reader.result);
    rythm.connectExternalAudioElement(music);
    rythm.addRythm('jump', 'jump', 150, 40, {min: -20, max: 20});
    rythm.addRythm('jump2', 'jump', 150, 40, {min: 20, max: -20});
    rythm.addRythm('twist', 'twist', 0, 10);
    rythm.addRythm('twist2', 'twist', 0, 10, {direction: 'left'});
    rythm.addRythm('tilt', 'tilt', 0, 10);
    rythm.addRythm('tilt2', 'tilt', 0, 10, {reverse : true});
    rythm.addRythm('swing', 'swing', 0, 10, {direction: 'left'});
    rythm.addRythm('pulse', 'pulse', 0, 10, {min: 1, max: 1.75});
    rythm.addRythm('neon', 'neon', 0, 10, {
      from: [0,0,255],
      to:[255,0,255]
    });
    rythm.addRythm('fontColor1', 'fontColor', 0, 10, {
      from: [255,0,255],
      to:[0,0,255]
    });
    rythm.addRythm('fontColor2', 'fontColor', 0, 10, {
      from: [0,255,0],
      to:[255,255,0]
    });
    rythm.addRythm('color1', 'color', 0, 10, {
      from: [0,0,255],
      to:[255,0,255]
    });
    rythm.addRythm('color2', 'color', 0, 10, {
      from: [0,255,0],
      to:[255,255,0]
    });
    rythm.start();
    music.play();
  }
});