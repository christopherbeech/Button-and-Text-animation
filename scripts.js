const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const descript = document.querySelector('.des');
root = document.documentElement;


btn.addEventListener('click', (e) => {

    e.preventDefault();

    btn.classList.toggle('active');
    descript.style.animation = 'border-animation 1.2s infinite';

    if(btn.classList.contains('active')){
        text.textContent = 'Orange';
        descript.innerHTML = `The Box Color is <span style=\"color: purple; transition: all 0.3s ease-in;\">Purple</span>`
        root.style.setProperty('--change', 'purple');
    } else{
        text.textContent = 'Purple';
        descript.textContent = "The Box Color is Orange"
        descript.innerHTML = `The Box Color is <span style=\"color: #FF7F50; transition: all 0.3s ease-in\">Orange</span>`
        root.style.setProperty('--change', '#FF7F50');
    }

})