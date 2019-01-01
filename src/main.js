import './style.scss'

function snow(w, h) { // must be 1:1 for px
  const {random, round} = Math;
  const flake = (x, y) => `<circle cx="${x}" cy="${y}" r="10" />`
  return Array(round(w * h / 1000))
    .fill(0)
    .map(()=> [random() * w, random() * h])
    .map(([x, y]) => flake(x,y))
    .join('\n')
}

// make a snow svg <template>
// copy it to each cloud-layer ?
