'use strict'

const input_of_name = document.getElementById('input_of_name');
const add_member = document.getElementById('add_member');
const pick_one_btn = document.getElementById('pick_one');
const picked_member = document.getElementById('picked_member')
const container_of_members = document.getElementById('container_of_names');
const remove_member = document.querySelectorAll('.member');
const arrOfMembers = [];

const addMember = function() {
 //check if input is empty
 if(input_of_name.value.trim() !== '') {
  //create elements
  //////////////////////////
  const div = document.createElement('div');
  div.classList.add('bg-slate-400', 'rounded', 'text-white', 'flex', 'items-center', 'justify-center', 'px-2', 'py-1', 'member');
  //////////////////////////
  const span = document.createElement('span');
  span.textContent = input_of_name.value;
  //////////////////////////
  const img = document.createElement('img');
  img.classList.add('w-4', 'ml-2', 'cursor-pointer');
  img.setAttribute('src','./assets/cancel.png');
  img.setAttribute('alt','remove member');
  //////////////////////////
  //append elements
  div.appendChild(span);
  div.appendChild(img);
  container_of_members.appendChild(div);
  //push members to arrays
  arrOfMembers.push(input_of_name.value);
  //empty the input
  input_of_name.value = '';
 }
}

add_member.addEventListener('click', function() {
 addMember();
})

input_of_name.addEventListener("keypress", function (event) {
 if (event.key === "Enter") {
  addMember();
 }
})

pick_one_btn.addEventListener('click',function() {
 if(arrOfMembers.length > 1) {
  const random_index = Math.floor(Math.random() * arrOfMembers.length);
  picked_member.textContent = arrOfMembers[random_index];
 } 
});

console.log(remove_member);
remove_member.forEach(function(el) {
 el.addEventListener('click',function() {
  console.log(el);
 })
})