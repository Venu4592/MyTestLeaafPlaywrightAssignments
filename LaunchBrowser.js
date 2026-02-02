function launchBrowser(browserName){
    if(browserName.toLowerCase()==='chrome'){
        console.log("Running the tests in Chrome Browser....")
    }else{
        console.log("Running tests in other browsers ....")
    }
}

function runTests(testType){
    switch(testType.toLowerCase()){
        case "smoke":
            console.log("Smoke tests");
            break
        case "regression":
            console.log("Regression Tests");
            break
        case "sanity":
            console.log("Sanity Run");
            break
        case "integration":
            console.log("Integration Tests");
            break
        default:
            console.log("End to End Testing is in progress");
    }
}

launchBrowser("chrome")
runTests("sanity")