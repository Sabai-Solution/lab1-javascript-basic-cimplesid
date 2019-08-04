function va() {
    var txtEmail = document.myForm.Email.value;
    var txtUsername = document.myForm.Username.value;
    var txtZip = document.myForm.Zip.value;
    var txtCountry = document.myForm.Country.value;

    if (txtEmail == "") {
        alert("please provide email");
        var validEmail = validateEmail();
        if (!validEmail) {

            document.myForm.Email.focus();
            return false;
        }
    }
    if (txtUsername == "") {
        alert("please provide USername");
        document.myForm.Username.focus();
        return false;
    }
    if (txtZip == "" || isNaN(txtZip) || txtZip.length != 5) {
        alert("please provide zip in format #####");
        document.myForm.Zip.focus();
        return false;
    }
    if (txtCountry == "-1") {
        alert("please choose country");
        return false;
    }
    return (true);




}
function validateEmail() {
    var email = document.myForm.Email.value;
    atpos = email.indexOf("@");
    dotpos = email.indexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("please enter corect email")
        document.myForm.Email.focus();
        return false;

    } else
        return (true);
}
//what is regex ? how we can check for regex in js?