'use strict'

const container_of_names = document.getElementById('container_of_names');
const input_of_name = document.getElementById('input_of_name');
const add_member = document.getElementById('add_member');

add_member.addEventListener('click', function() {
 addMember();
})

input_of_name.addEventListener("keypress", function (event) {
 if (event.key === "Enter") {
  addMember();
 }
})

const addMember = function() {
 //check if input is empty
 if(input_of_name.value.trim() !== '') {
  //create element
  const ele = document.createElement('span');
  ele.textContent = input_of_name.value;
  ele.classList.add('bg-slate-400', 'rounded', 'text-white', 'block', 'h-8', 'w-fit', 'px-2', 'py-1');
  container_of_names.appendChild(ele);
  //empty the input
  input_of_name.value = '';
 }
}