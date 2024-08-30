// TODO: Write Your JavaScript Code Here
function isEqual(a, b) {
    if (a === b) {
        alert("They are equal in type and value");
    } else if (a == b) {
        alert("They are equal in value");    
    } else {
        alert("The values are not equal");
    }
}

isEqual(100, 100)