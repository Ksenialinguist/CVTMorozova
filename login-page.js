var form = document.querySelector('#form_id');
var login = document.querySelector('#email');
var password = document.querySelector('#password');

var loginError = document.querySelector('#login-error');
var passwordError = document.querySelector('#password-error');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    loginError.innerHTML = '';
    passwordError.innerHTML = '';
   

    var loginValue = login.value;
    var passwordValue = password.value;
  
    var loginErr = '';
    var passwordErr = '';
    

    if (!(/\S+@[a-z]+.[a-z]+/g.test(loginValue))) {
        loginErr = 'Введите корректный логин (e-mail)';
    }

    if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/g.test(passwordValue))) {
        passwordErr = 'Неправильный пароль';
    }

    if (passwordValue.length < 6) {
        passwordErr = 'Пароль должен быть длиннее 6 символов';
    }


    loginError.innerHTML = loginErr;
    passwordError.innerHTML = passwordErr;
    

    if (loginErr.length === 0 && passwordErr.length === 0 && phoneErr.length === 0) {
        alert('Успешный вход');
    }
});

function clock() {   // дата и время
    var d = new Date();
    var month_num = d.getMonth()
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var weekday_num = d.getDay();

    var weekday= ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var month = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    date_time = "Сегодня - " + weekday[weekday_num] + ", " + day + " " + month[month_num] + " " + d.getFullYear() +
        " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
    if (document.layers) {
        document.layers.doc_time.document.write(date_time);
        document.layers.doc_time.document.close();
    } else {
        document.getElementById("doc_time").innerHTML = date_time;
    }

    setTimeout("clock()", 1000);
}

clock();

if (/MSIE 10/i.test(navigator.userAgent)) {
    // This is internet explorer 10
    window.alert('isIE10');
}

if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    // This is internet explorer 9 or 11
    window.location = 'pages/core/ie.htm';
}

if (/Edge\/\d./i.test(navigator.userAgent)) {
    // This is Microsoft Edge
    window.alert('Microsoft Edge');
}
