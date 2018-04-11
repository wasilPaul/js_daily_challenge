function f(tags, children, content) {
    tags = tags || 'div';
    children = children || 'p';
    content = content ? content : 'ala ma kota'
    var childDiv = document.createElement(children)
    var parDiv = document.createElement(tags)
    childDiv.innerHTML = "<div><p>" + content + "</p></div>"
    document.querySelector('body').appendChild(parDiv)
    parDiv.appendChild(childDiv)
}

function ddedClass() {

    var divis = document.createElement('div')

    document.querySelector('body').appendChild(divis)

    document.querySelector('div').classList.add('color')
}

function dedInput() {

    var input = document.createElement('input')

    document.querySelector('body').appendChild(input)

    document.querySelector('input').setAttribute("disabled", "")
}

function element(){
    var div1 = document.createElement('div')

    var div2 = document.createElement('div')

    document.querySelector('body').appendChild(div1)
    document.querySelector('div').appendChild(div2)

    document.querySelector('div').style.background = 'red'
    document.querySelector('div').style.width = '100px'
    document.querySelector('div').style.height = '200px'

    document.querySelector('div').


}