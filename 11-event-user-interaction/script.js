const showButton = document.getElementById("showButton");
// call back function
showButton.addEventListener("click", function(){
    console.log("Button clicked");
})

const showTitle = () => {
    console.log("Title clicked");
}
showButton.addEventListener("click", showTitle);