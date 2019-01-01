import './style.scss'
const qsa = s => [...document.querySelectorAll(s)]

function snow({n, r=10, w, h}) { // must be 1:1 for px
  const {random, round} = Math;
  const flake = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" />`
  return Array(n)
    .fill(0)
    .map(()=> [random() * w, random() * h])
    .map(([x, y]) => flake(x,y,r))
    .join('\n')
}

snow_2.innerHTML= snow({n: 3000, r:.2, w: 300, h: 300})
Object.assign(window, {snow, qsa})
// window.snow = snow(1000, 1000)
// make a snow svg <template>
// copy it to each cloud-layer ?
