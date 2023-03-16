const h1 = document.createElement("h1");
h1.textContent = "Lab7 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

const hr1 = document.createElement("hr");
document.body.appendChild(hr1);

const h2 = document.createElement("h2");
h2.textContent = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

const p = document.createElement("p");
p.innerHTML =
  'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(p);

const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
li1.classList.add("even");
li1.style.color = "green";
li1.innerHTML =
  'find elements in the DOM (<b>5 points</b>);';
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.classList.add("odd");
li2.style.color = "purple";
li2.innerHTML =
  'create/add/remove elements (<b>5 points</b>);';
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.classList.add("even");
li3.style.color = "green";
li3.innerHTML =
  'change content of the elements (<b>5 points</b>);';
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.classList.add("odd");
li4.style.color = "purple";
li4.innerHTML =
  'change styles of the elements (<b>5 points</b>);';
ul.appendChild(li4);

const li5 = document.createElement("li");
li5.classList.add("even");
li5.style.color = "green";
li5.innerHTML =
  'change attributes of the elements (<b>5 points</b>);';
ul.appendChild(li5);

const li6 = document.createElement("li");
li6.classList.add("odd");
li6.style.color = "purple";
li6.innerHTML =
  'change classes of the elements (<b>5 points</b>).';
ul.appendChild(li6);

const hr2 = document.createElement("hr");
document.body.appendChild(hr2);

const h2_2 = document.createElement("h2");
h2_2.textContent = "Submission";
h2_2.style.color = "red";
document.body.appendChild(h2_2);

const p2 = document.createElement("p");
p2.textContent = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

const ul2 = document.createElement("ul");
document.body.appendChild(ul2);

const li7 = document.createElement("li");
li7.classList.add("even");
li7.style.color = "green";
li7.innerHTML =
  'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).';
ul2.appendChild(li7);

const li8 = document.createElement("li");
li8.classList.add("odd");
li8.style.color = "purple";
li8.textContent = "Clone this repository to your local machine and work inside it.";
ul2.appendChild(li8);

const li9 = document.createElement("li");
li9.classList.add("even");
li9.style.color = "green";
li9.innerHTML =
  'Push your changes to Github (<b>1 point</b>).';
ul2.appendChild(li9);