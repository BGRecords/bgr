document.getElementById("badges").innerHTML = '<span id="bluebadge" style="display: inline;"><span style="color: blue; font-size: 20px;"><img src="https://cdn.glitch.global/6374d241-d518-4441-bcff-f2489ef8336d/check.png?v=1678037355442" width="20px" height="20px" style="position: relative; transform: translateY(15%);"></span></span></span><span id="orangebadge" style="display: none;"><span style="color: orange; font-size: 20px;"><img src="https://cdn.glitch.global/6374d241-d518-4441-bcff-f2489ef8336d/check.png?v=1678037355442" width="20px" height="20px" style="position: relative; transform: translateY(15%); filter: hue-rotate(140deg);"></span></span><span id="greenbadge" style="display: none;"><span style="color: green; font-size: 20px;"> <img src="https://cdn.glitch.global/6374d241-d518-4441-bcff-f2489ef8336d/check.png?v=1678037355442" width="20px" height="20px" style="position: relative; transform: translateY(15%); filter: hue-rotate(210deg);"> </span><span><a href="https://bgr.glitch.me/badges">?</a></span></h1>';

if (document.getElementById("artist").innerHTML === "Boss_GamerYT" || document.getElementById("artist").innerHTML === "Boss_GamerYT, Liam McMaster") {
  document.getElementById('bluebadge').style.display = "inline"
}
if (document.getElementById("artist").innerHTML === "Boss_GamerYT") {
  document.getElementById('greenbadge').style.display = "inline"
}
if (document.getElementById("artist").innerHTML === "Boss_GamerYT") {
  document.getElementById('orangebadge').style.display = "inline"
}