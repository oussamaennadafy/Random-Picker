'use strict'

const add_member = document.getElementById('add_member');
const pick_one_btn = document.getElementById('pick_one');
const picked_member = document.getElementById('picked_member')
const container_of_members = document.getElementById('container_of_names');
const daysOff = ['Jan 01','Jan 11','Mar 20','May 01','May 02','May 29','Jun 21','Jul 09','Jul 29','Jul 30','Aug 14','Aug 20','Aug 21','Sep 23','Oct 07','Nov 06','Now 18','Dec 21','Dec 31'];
const thematics = ['agile: Scrum', 'agile: Extreme Programming (XP)', 'agile: Kanban', 'agile: Lean Development', 'agile: Crystal', 'javascript: Dom And Bom', 'javascript: OOP', 'javascript: Asynchronous javascript', 'javascript: Events Handling', 'javascript: Higher order Functions', 'reactJs: Virtual DOM', 'reactJs: JSX', 'reactJs: Components', 'reactJs: Props', 'reactJs: State' ,'nodeJs: Non-blocking or Asynchronous I/O', 'nodeJs: Prototypes', 'nodeJs: Modules', 'nodeJs: Callbacks', 'nodeJs: Promises'];
let thematicsOftoday = 0;
let increasing = 0;

//function to add the member
const addMember = function() {
 const input_of_name = document.getElementById('input_of_name');
 //check if input is empty
 if(input_of_name.value.trim() !== '') {
  //check if there is members
  if(container_of_members.children.length + 1 > 0) {
   document.getElementById('There_is_no_Member').classList.add('hidden');
  }
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
  //empty the input
  input_of_name.value = '';
  //remove elements onclick on them
  const membersCloseIcon = document.querySelectorAll('.member img');
  membersCloseIcon.forEach(function(ele) {
   ele.addEventListener('click',function() {
    //remove the element from the dom
    this.parentElement.remove();
    //check if there is no members
    if(container_of_members.children.length === 0) {
     document.getElementById('There_is_no_Member').classList.remove('hidden');
    }
   })
  })
 }
}

//add member to the list with click button
add_member.addEventListener('click', function() {
 addMember();
})

//add member with enter in keyboard
input_of_name.addEventListener("keypress", function (event) {
 if (event.key === "Enter") {
  addMember();
 }
})

//pick random member
pick_one_btn.addEventListener('click',function() {
 if(container_of_members.children.length > 0) {
  //generate ramdom index 
  const random_index = Math.floor(Math.random() * container_of_members.children.length);
  //show the random member
  picked_member.textContent = '🎇 ' + container_of_members.children[random_index].textContent + ' 🎇';
  //add date of presentation
  const today = new Date();
  const tomorrow = new Date(today);
  increasing++;
  tomorrow.setDate(tomorrow.getDate() + increasing);
  if(String(tomorrow).split(' ')[0] === 'Fri') increasing+=2;
  // if(daysOff.includes(String(tomorrow).split(' ').slice(1,3).join(' '))) {increasing++; console.log();}
  document.getElementById('date_for_member').textContent = String(tomorrow).split(' ').slice(0,4).join(' ');
  //add topic
  if(thematics[thematicsOftoday] === undefined) document.getElementById('topic').textContent = 'There is no more topics';
  else document.getElementById('topic').textContent = thematics[thematicsOftoday];
  thematicsOftoday++;
  //remove the random member from the list
  container_of_members.children[random_index].remove();
 }
 //check if there is no members
 if(container_of_members.children.length === 0) document.getElementById('There_is_no_Member').classList.remove('hidden');
 });