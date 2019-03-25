$("button").click(function() {
    var weather = $(".weather").val();
     if(weather === 'rainy') {
    $(".e").text("Bring an umbrella.");
} 
else {
    $(".e").text("Bring nothing.");
}
});