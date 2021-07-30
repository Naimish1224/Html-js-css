

$(() => {

    $("#save").on("click", ()=> {
        add();
    });

});

const add = () => {
    let newUser ={
        id : 0,
        userName: $("#xUsername").val(),
        password: $("#xPassword").val(),
        firstName: $("#xFirstname").val(),
        lastName: $("#xLastname").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val(),
        reviewer: $("#Reviewer").prop("checked"),
        admin: $("#Admin").prop("checked")
    }

    $.ajax({
        method: "POST",
        url: "http://localhost:8888/api/users",
        data: JSON.stringify(newUser),
        contentType: "application/json"
    }).done(res => {
        console.debug(res, "- Added");
    }).fail(err => {
        console.error(err);
    });
};