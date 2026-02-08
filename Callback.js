let browser="chrome"
// Function 1 checkBrowserVersion
function checkBrowserVersion(callback){
    console.log("Browser Version is ...")
    // Setting the time out to load the version for 2 sec
    setTimeout(function(){
        callback(browser);
    },2000);
}
// Function 2 logBrowserVersion
function logBrowserVersion(browserName){
    console.log("Browser Version: ",browserName)
}
// Calling the function with callback function
checkBrowserVersion(logBrowserVersion)


