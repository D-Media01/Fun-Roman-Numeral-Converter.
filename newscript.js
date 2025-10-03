const containerArr = document.querySelectorAll("#container .child");

const arrUpdate = Array.from(containerArr);
const colorArr = [
  "red","blue","green","yellow","purple","orange","pink","brown","white",
  "gray","cyan","magenta","lime","teal","olive","aqua","silver",
  "#f4a261","#e76f51","#2a9d8f","#264653","#e9c46a","#ff6b6b","#1a535c","#4ecdc4","#ffe66d","#ff9f1c",
  "rgb(123, 31, 162)","rgb(0, 188, 212)","rgb(255, 87, 34)","rgb(76, 175, 80)","rgb(63, 81, 181)",
  "hsl(0, 100%, 50%)","hsl(120, 100%, 25%)","hsl(240, 100%, 50%)","hsl(60, 100%, 50%)","hsl(300, 100%, 50%)",
  "coral","crimson","gold","khaki","indigo","violet","orchid","plum","salmon","tomato",
  "turquoise","seagreen","lavender","mintcream","honeydew","ivory","beige","wheat","rosybrown"
];

function colorAll() {
  arrUpdate.forEach(child => {
    let ranColor = Math.floor(Math.random() * colorArr.length);
    child.style.backgroundColor = colorArr[ranColor];
    child.textContent = "Catch Me";

    let link = child.closest("a");
    if (link) {
      // store original href
      link.dataset.href = link.getAttribute("href");
      // disable click initially
      link.removeAttribute("href");
    }


  });
}

// ...existing code...

function animation() {
  let currentIndex = null;
  setInterval(() => {
    // Hide previous child
    if (currentIndex !== null) {
      let prevChild = arrUpdate[currentIndex];
      prevChild.style.visibility = "hidden";
      prevChild.style.pointerEvents = "none";
      let prevLink = prevChild.closest("a");
      if (prevLink && prevLink.dataset.href) {
        prevLink.removeAttribute("href");
      }
    }

    // Pick new random child
    let ranIndex = Math.floor(Math.random() * arrUpdate.length);
    currentIndex = ranIndex;
    let child = arrUpdate[ranIndex];
    child.style.display = "block";
    child.style.visibility = "visible";
    child.style.pointerEvents = "auto";

    // Restore its link only
    let link = child.closest("a");
    if (link && link.dataset.href) {
      link.setAttribute("href", link.dataset.href);
    }
  }, 1000);
}

// ...existing code...

document.addEventListener("DOMContentLoaded", () => {
  colorAll();
  animation();
});
