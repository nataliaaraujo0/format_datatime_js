window.addEventListener('load', start);

const clickArray = [];

function start(){
    const button = document.querySelector('#clickbutton');    
    button.addEventListener('click', handleButtonClick);
}

function handleButtonClick(){
    clickArray.push(getNemTimestamp());
    render();
}

function render(){
    const ul = document.querySelector('#data');
    ul.innerHTML = '';

    let lis = '';

    clickArray.map((item) => {

    lis +=  `<li>${item}</li>`; 
    });

    ul.innerHTML = lis;

    document.title=clickArray.length;
    
   

    
} 





