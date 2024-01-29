const MarkAllAsRead = document.getElementById('MarkAllAsRead');
const redActive = document.getElementById('redActive')
const redActive1 = document.getElementById('redActive1');
const redActive2 = document.getElementById('redActive2');
const nonValue = document.getElementById('nonValue');
const activeNotify = document.getElementById('activeNotify');
const activeNotify1 = document.getElementById('activeNotify1');
const activeNotify2 = document.getElementById('activeNotify2');



MarkAllAsRead.onclick = function() {
    redActive.style.display = "none";
    redActive1.style.display = "none";
    redActive2.style.display = "none";
    activeNotify.style.backgroundColor = "transparent";
    activeNotify1.style.backgroundColor = "transparent"
    activeNotify2.style.backgroundColor = "transparent"
    nonValue.innerHTML = 0;

}


