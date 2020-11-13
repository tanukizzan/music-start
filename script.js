const inputFile = document.getElementById('file');
const music = document.getElementById('music');

const canvas = document.getElementById('sample');
if (canvas.getContext) {
  const context = canvas.getContext('2d');
  // TODO かっこいい図形作る
  context.fillRect(20, 20, 100, 100);
  context.fill();
}

inputFile.addEventListener('change', function (e) {
  const file = e.target.files;
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = function () {
    // music.src = reader.result;
    const rythm = new Rythm();
    rythm.setMusic(reader.result);
    // rythm.addRythm('rythm-bass', 'neon', 0, 10, {
    //   from: [0,0,255],
    //   to:[255,0,255]
    // });
    // rythm.addRythm('rythm-bass', 'borderColor', 0, 10);
    rythm.start();
  }
})

/* ビジュアライザー
window.onload = function(){
  var source, animationId;
  const audioContext = new AudioContext;
  const fileReader   = new FileReader;
　
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 128;
  analyser.connect(audioContext.destination);
　
  const canvas        = document.getElementById('visualizer');
  const canvasContext = canvas.getContext('2d');
  canvas.setAttribute('width', analyser.frequencyBinCount * 10);
　
  fileReader.onload = function(){
    audioContext.decodeAudioData(fileReader.result, function(buffer){
      if(source) {
        source.stop();
        cancelAnimationFrame(animationId);
      }
　
      source = audioContext.createBufferSource();
　
      source.buffer = buffer;
      source.connect(analyser);
      source.start(0);
　
      animationId = requestAnimationFrame(render);
    });
  };
　
  inputFile.addEventListener('change', function(e){
    fileReader.readAsArrayBuffer(e.target.files[0]);
  });
　
  render = function(){
    var spectrums = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(spectrums);
　
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0, len=spectrums.length; i<len; i++){
      canvasContext.fillRect(i*10, 0, 5, spectrums[i]);
    }
　
    animationId = requestAnimationFrame(render);
  };
};

*/