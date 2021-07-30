


$(() => {
    console.log("everything is ready");
});

    const getUserById = (id) => {
        $.getJSON(`http://localhost:8888/api/users/${id}`)
        .done(res => {console.debug(res);
        })
        .fail(err => {console.error(err);
        });
    };

    const getAllUsers = () => {
    $.getJSON(`http://localhost:8888/api/users`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
    }

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users){
        let tr = $("<tr></tr>");
        tr.append($(`<td>${user.id}</td>`));
        tr.append($(`<td>${user.userName}</td>`));
        tr.append($(`<td>${user.firstName} ${user.lastName}</td>`));
        tr.append($(`<td>${user.phone}</td>`));
        tr.append($(`<td>${user.email}</td>`));
        tr.append($(`<td>${(user.reviewer? "Yes" : "No")}</td>`));
        tr.append($(`<td>${(user.admin? "Yes" : "No")}</td>`));
        tbody.append(tr);
    }
};