import './style.scss'
const qsa = s => [...document.querySelectorAll(s)]

function snow({n, r=10, w, h, minY=0, minX=0}) { // must be 1:1 for px
  const {random, round} = Math;
  const flake = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" />`
  return Array(n)
    .fill(0)
    .map(()=> [random() *  w + minX, random() * h + minY])
    .map(([x, y]) => flake(x,y,r))
    .join('\n')
}

snow_2.innerHTML= snow({n: 3000, r:.4, w: 300, h: 300})
snow_1.innerHTML= snow({n: 3000, r:.53, w: 300, h: 300})
snow_3.innerHTML= snow({n: 1000, r:.5, w: 600, h: 600, minX: -200,})
snow_4.innerHTML= snow({n: 1000, r:4, w: 2000, h: 2000})

Object.assign(window, {snow, qsa})
// window.snow = snow(1000, 1000)
// make a snow svg <template>
// copy it to each cloud-layer ?
