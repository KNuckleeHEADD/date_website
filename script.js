function moveButton() {
    var x = Math.random() * (1200 - document.querySelector('.no_button').offsetWidth);
    var y = Math.random() * (600 - document.querySelector('.no_button').offsetHeight);
    document.querySelector('.no_button').style.left = `${x}px`;
    document.querySelector('.no_button').style.top = `${y}px`;
}

function nextPage() {
    //window.location.href = "yes.html";
    document.querySelector('.image_before').style.display = 'none';
    document.querySelector('.image_after').style.display = 'flex';
    // document.querySelector('.title').style.setProperty('--before-content', '""');
    document.querySelector('.title').innerText = 'Bhabhi mill gayi bhai';
    document.querySelector('.yes_button').style.display = 'none';
    document.querySelector('.no_button').style.display = 'none';
}

var temp = document.querySelector('.title')

temp.addEventListener('mouseover' , () => {
    temp.innerText = 'Tapri wali chai with me'
})

temp.addEventListener('mouseout' , () => {
    temp.innerText = 'Will you go on a date with me?'
})