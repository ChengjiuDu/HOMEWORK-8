function getData() {
    const movie = document.getElementById("movie").value;
    const url = `https://www.omdbapi.com/?apikey=32aef7ef&t=${movie}`;
    const xhttps = new XMLHttpRequest()
    
    xhttps.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
            const data = JSON.parse(this.responseText);
            
            document.getElementById("poster").src = data.Poster;
            document.getElementById("director").innerHTML = data.Director;
            document.getElementById("writer").innerHTML = data.Writer;
            document.getElementById("actors").innerHTML = data.Actors;
            document.getElementById("plot").innerHTML = data.Plot;
            document.getElementById("country").innerHTML = data.Country;

            
            
            
}
        
    };
    xhttps.open("GET", url, true);
    xhttps.send();
}
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  getData();
  document.getElementById("container").style.border = `2px solid #000`;
});