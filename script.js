let pls = document.querySelector('#plus');
let popup = document.querySelector('#popup');

pls.addEventListener('click', () =>{
    popup.classList.toggle('inactive');

    if(pls.classList.contains('fa-circle-plus')){
        pls.classList.remove('fa-circle-plus');
        pls.classList.add('fa-circle-minus')
    }
    else {
        pls.classList.remove('fa-circle-minus');
        pls.classList.add('fa-circle-plus');
    }
    
});


