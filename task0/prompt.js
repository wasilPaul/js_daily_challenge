(function (){
    var check = confirm('czy dajesz radę?')

    if (check == false){
        return alert("bomba")
    } else {
        var odp = prompt("podaj imię")
        if (odp=='Jim'){
            return alert('Fuck you Jim')
        }else {
        return alert('pomożemy Ci: ' + odp)
        }
    }
})()