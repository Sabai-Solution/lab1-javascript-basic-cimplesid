function validateEmptyValues() {

    var txtEmail = document.getElementById("txtEmail").value;
    var txtUsername = document.getElementById("txtUsername").value;
    var txtPassword = document.getElementById("txtPassword").value;

    var appendError = "";
    if (txtEmail == "") {
        appendError = "email";

    }
    if (txtUsername == "") {
        if (appendError != "") {
            appendError = appendError + "and";
        }
        appendError = appendError + "Username";

    }
    if (txtPassword == "") {
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