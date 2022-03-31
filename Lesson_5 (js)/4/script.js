let parent = document.getElementById("test");

for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.innerHTML = i;
  parent.appendChild(li);
}
