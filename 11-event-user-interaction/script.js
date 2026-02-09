const showButton = document.getElementById("showButton");
// call back function
showButton.addEventListener("click", function(){
    console.log("Button clicked");
})

const showTitle = () => {
    console.log("Title clicked");
}
showButton.addEventListener("click", showTitle);

const showEvent = (event) => {
    console.log(event.target.innerText);
}
showButton.addEventListener("click", showEvent);

const myInput = document.getElementById("myInput");
myInput.addEventListener("keydown", (event) => {
    console.log(event.target.value);
});