const sizes= document.querySelectorAll(".size");
const colors=document.querySelectorAll(".color");
const shoes=document.querySelectorAll(".shoe");
const gradiants=document.querySelectorAll(".gradiant");

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradiant=document.querySelector(`.gradiant[color="${color}"]`);
   colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.documentElement.style.setProperty('--primary', primary);
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');
    
    gradiants.forEach(g => g.classList.remove('first'));
    gradiant.classList.add('first');
    
    
    
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));