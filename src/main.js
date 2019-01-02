import './style.scss'
import {
  compressToEncodedURIComponent as compress,
  decompressFromEncodedURIComponent as decompress
} from 'lz-string'

function snow(id, {n, r=10, w, h, minY=0, minX=0}) { // must be 1:1 for px
  const {random} = Math;
  const flake = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" />s`
  document.getElementById(`snow_${id}`).innerHTML =  Array(n)
    .fill(0)
    .map(()=> [random() *  w + minX, random() * h + minY])
    .map(([x, y]) => flake(x,y,r))
    .join('\n')
}

window.onload = function(){
  [
    {n: 3000, r:.35, w: 500, h: 300, minX: -100},
    {n: 3000, r:.35, w: 300, h: 300},
    {n: 1000, r:.5, w: 600, h: 600, minX: -200,},
    {n: 1000, r:4, w: 2000, h: 2000},
    {n: 1000, r:3.5, w: 2000, h: 2000},
  ].forEach((opts, i) => snow(i+1, opts))
  const msg = document.getElementById('msg')
  if (location.search)  msg.innerText = decompress(location.search.slice(1))
  msg.addEventListener('keypress', () =>{
    const path = `${location.origin}?${compress(msg.innerText)}`
    history.pushState({path}, '', path)
  })
}
