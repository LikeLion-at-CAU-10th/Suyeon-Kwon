console.log('화이팅!');
const checkbox = document.querySelector('.checkbox');
console.log(checkbox);

checkbox.addEventListener('click',toggleClick);

function click() {
    if(document.body.classList.contains('dark'))
    {
        document.body.classList.remove('dark');
        console.log('convert into Light Mode');
    } 
    else 
    {
        document.body.classList.add('dark');
        console.log('convert into Dark Mode');
    }
}

//toggle
function toggleClick() {
    document.body.classList.toggle('dark');
    console.log('Working!');
    }