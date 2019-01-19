// budgetPop: populates the page with elements necessary to generate a budget
function budgetPop() {
    removeAllNodes();
}

// investPop: populates the page with elements necessary to generate a portfolio
function investPop() {
    removeAllNodes();
}

// goalPop: populates the page with elements necessary to generate and track financial goals
function goalPop() {
    removeAllNodes();
}


// removeAllNodes: deletes all content on the page except for the title so that page can repopulate with the desired functionality
function removeAllNodes() {
    var body = document.getElementById("parent");
    var bodyLength = body.childElementCount;

    // This line is to check if all elements except for the 'title' is removed after the user clicks on one of the buttons
    // console.log("Length of body element: " + bodyLength);

    while (bodyLength > 1) {
        body.removeChild(body.lastChild);
        bodyLength = bodyLength - 1;
    }
}