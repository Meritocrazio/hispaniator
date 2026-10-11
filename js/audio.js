/* HISPANIATOR: música instrumental local y efectos; la reproducción comienza tras un gesto del usuario. */
const AudioEngine=(()=>{
 let ctx=null,fx=true,music=true,volume=.95,started=false,scene='';
 const tracks={privilegio:'corte',pueblo:'pueblo',victoria:'victoria',tragedia:'tragedia',decisiones:'decisiones',reflexion:'reflexion'};
 const players={};
 for(const [key,file] of Object.entries(tracks)){
  const a=new Audio('assets/audio/'+file+'.ogg');a.preload='auto';a.loop=(key==='privilegio'||key==='pueblo'||key==='decisiones'||key==='reflexion');players[key]=a;
 }
 function applyVolume(){for(const a of Object.values(players))a.volume=music?Math.min(1,volume*.90):0}
 function unlock(){started=true;if(ctx?.state==='suspended')ctx.resume();if(scene&&music)play(scene)}
 function play(which){if(!tracks[which])return;scene=which;for(const [k,a] of Object.entries(players))if(k!==which){a.pause();a.currentTime=0}const a=players[which];applyVolume();if(!music||!started)return;if(a.paused){a.currentTime=0;const promise=a.play();if(promise?.catch)promise.catch(()=>{});}}
 function context(){try{ctx??=new (window.AudioContext||window.webkitAudioContext)();if(ctx.state==='suspended'&&started)ctx.resume();return ctx}catch{return null}}
 function tone(freq,start,duration,type='sine',gain=.13,endFreq=null){if(!fx||!started)return;const a=context();if(!a||a.state!=='running')return;const osc=a.createOscillator(),amp=a.createGain(),t=a.currentTime+start;osc.type=type;osc.frequency.setValueAtTime(Math.max(20,freq),t);if(endFreq)osc.frequency.exponentialRampToValueAtTime(Math.max(20,endFreq),t+duration);amp.gain.setValueAtTime(.0001,t);amp.gain.exponentialRampToValueAtTime(Math.max(.0002,gain*volume),t+.02);amp.gain.exponentialRampToValueAtTime(.0001,t+duration);osc.connect(amp);amp.connect(a.destination);osc.start(t);osc.stop(t+duration+.03)}
 function sound(kind){switch(kind){case 'click':tone(260,0,.10,'triangle',.15,110);break;case 'victory-end':tone(392,0,.27,'triangle',.18);tone(523,.23,.3,'triangle',.17);tone(659,.47,.34,'triangle',.18);tone(784,.75,.7,'triangle',.21);break;case 'defeat-end':tone(247,0,.38,'triangle',.22,196);tone(185,.38,.52,'triangle',.23,139);tone(110,.9,.85,'sine',.27,55);break;case 'recompensa':tone(523,0,.17,'triangle');tone(659,.12,.2,'triangle');tone(784,.25,.38,'triangle');break;case 'error':tone(440,0,.20,'sawtooth',.08,330);tone(311,.19,.30,'triangle',.1,180);break;case 'problema':tone(140,0,.38,'sine',.3,45);tone(196,.16,.40,'triangle',.1,130);break;case 'desastre':tone(180,0,.48,'sine',.36,35);tone(110,.18,.55,'sawtooth',.09,55);tone(75,.48,.65,'sine',.22,32);break;case 'ley':tone(180,0,.09,'triangle',.25,60);tone(120,.13,.26,'sine',.25,45);break;case 'ironia':tone(523,0,.16,'square',.05);tone(659,.13,.16,'square',.05);tone(622,.28,.37,'triangle',.1,500);break;}}
 function stopMusic(){scene='';for(const a of Object.values(players)){a.pause();a.currentTime=0}}
 return {unlock,sound,ambience:play,ending:type=>play(type==='victoria'?'victoria':'tragedia'),stopMusic,setEffects:v=>fx=!!v,setMusic:v=>{music=!!v;applyVolume();if(!music){for(const a of Object.values(players))a.pause()}else if(scene)play(scene)},setVolume:v=>{volume=Math.max(0,Math.min(1,Number(v)||0));applyVolume()}};
})();
