function validateEmptyValues() {

    var txtEmail = document.getElementById("txtEmail");
    var txtUsername = document.getElementById("txtUsername");
    var txtPassword = document.getElementById("txtPassword");

    var appendError = "";
    if (txtEmail = "") {
        appendError = "email";

    }
    if (txtUsername = "") {
        if (appendError != "") {
            appendError = appendError + "and";
        }
        appendError = appendError + "Username";

    }
    if (txtPassword = "") {
        if (appendError != "") {
            appendError = appendError + "and";
        }
        appendError = appendError + "password";

    }
    if (appendError != "") {
        appendError = appendError + "cannot be empty";
        alert(appendError);
        return false;
    } else {
        return true;
    }
}