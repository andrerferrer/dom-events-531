// console.log("Hallo Welt!");
// hot reload

// 1st ALWAYS - select the element
// const list = document.querySelector('ul');

// <ul id="players">
const list = document.querySelector('ul#players');

// const list = document.getElementById('players');
// console.log(list);

// insert players
// list.insertAdjacentHTML('position', 'HTML')
list.insertAdjacentHTML('beforeend', '<li>Ammy Rodriguez</li>');
list.insertAdjacentHTML('beforeend', '<li>Marjorie Simon</li>');

const lis = document.querySelectorAll('li');
// console.log(lis);

// Insert Davinia to the List
// 1st thing always: select the element
// const list = document.querySelector('ul#players');

// list
// {/* <ul id=​"players">​…​</ul>​ */}

const student = "Davinia Abreu";

list.insertAdjacentHTML('beforeend', `<li>${student}</li>`);


// 1st thing always
const images = document.querySelectorAll('.roundable');
// image.addEventListener('event', 'callback function')
images.forEach((image) => {
  debugger
  image.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.currentTarget);
    // image == event.currentTarget
    
    // add the class img-circle to the image
    event.currentTarget.classList.add('img-circle');
  });
})

// TAKEAWAY - best practices with JS
// one element - use ID
// many elements - use a CLASS