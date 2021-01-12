const url = "http://localhost:5000"
function signup() {
    axios({
        method: 'post',
        url: "http://localhost:5000/signup",
        data: {
            uid: document.getElementById("txt_id").value,
            uname: document.getElementById("txt_name").value,
            email: document.getElementById("txt_email").value,
            password: document.getElementById("txt_password").value,
            phone: document.getElementById("txt_number").value,
            gender: document.getElementById("gender").value
        }
    })
        .then(function (response) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "login.html"
        })
        .catch(function (error) {
            console.log(error);
        });
    return false;
}

function login() {
    axios({
        method: 'post',
        url: "http://localhost:5000/login",
        data: {
            email: document.getElementById("txt_email").value,
            password: document.getElementById("txt_password").value,
        },
        withCredentials: true
    })
        .then(function (response) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "profile.html";

        })
        .catch(function (error) {
            console.log(error);
        });

    return false;
}

function profile() {

}