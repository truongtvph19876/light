const light = document.querySelector('img');
const button = document.querySelector('button');
let state = false;


button.onclick = () => {
     if (!state) {
          light.src = "img/light-on.jpg";
          button.innerText = "Turn Off"
     } else {
          light.src = "img/light-off.png";
          button.innerText = "Turn On"
     }
     state = !state;
}