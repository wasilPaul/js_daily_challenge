var userName = localStorage.getItem('name')

if (userName) {
    alert('hello' + userName)
}else {
    localStorage.setItem("name", prompt('your name?'))
}

