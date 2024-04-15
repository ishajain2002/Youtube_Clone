
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "8bb88a4997msh7ed6dc18f2636c1p12480ajsne5cccd14ff31");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com\n");

xhr.send(data);