function colorChange1(){
    const Box1 = document.getElementById('box-1');
Box1.style.backgroundColor ='red';
}

function colorChange2(){
    const Box2 = document.getElementById('box-2');
Box2.style.backgroundColor ='Blue';
}

function colorChange3(){
    const Box3 = document.getElementById('box-3');
Box3.style.backgroundColor ='Green';
}

function colorChange4(){
    const Box4 = document.getElementById('box-4');
Box4.style.backgroundColor ='Yellow';
}

function greet(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim(); 
  const heading = document.getElementById('heading');

  if (name === "") {
    heading.textContent = "Hello";
    return;
  }

  heading.textContent = "Hello, " + name + "!";
}
