// Event listener for the scroll event
window.addEventListener("scroll", () => {

    // Find the current scroll position using window.scrollY or document.documentElement.scrollTop
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // Calculate the total scrollable height using document.documentElement.scrollHeight and clientHeight
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculate scroll percentage
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    // Update the width of the progress bar element with id "progress-bar" using the calculated scroll percentage
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
  
  });
