// let Info = document.getElementById("info")
// let feedBack = document.getElementById("feedback")
// let button = document.getElementById("btn2")
function next(event) {
    event.preventDefault()
    document.getElementById("info").style.display = "none"
}
function prev(event){
    event.preventDefault()
    if (info.style.display === 'none') {
        info.style.display = 'block'
    }
}
function nexts(event){
    event.preventDefault()
    document.getElementById('feedback').style.display = 'none'
}
function previous(event){
    event.preventDefault()
    if (feedback.style.display === 'none') {
        feedback.style.display = 'block'
    }
}
function sub(event){
    event.preventDefault()
    document.getElementById('final').style.display = 'none'
}
