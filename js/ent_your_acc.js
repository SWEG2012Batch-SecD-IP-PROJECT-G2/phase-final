
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function(){
Form1.style.left = "-450px";
Form2.style.left = "40px";
progress.style.width = "240px";
}

Back1.onclick = function(){
Form1.style.left = "40px";
Form2.style.left = "450px";
progress.style.width = "120px";

}
Next2.onclick = function(){
Form2.style.left = "-450px";
Form3.style.left = "40px";
progress.style.width = "360px";
}

Back2.onclick = function(){
Form2.style.left = "40px";
Form3.style.left = "450px";
progress.style.width = "240px";
}
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
        
        pass.addEventListener('input', () => {
            if(pass.value.length > 0){
                msg.style.display = "block";
            }
            else{
                msg.style.display = "none";
            }
            if(pass.value.length < 4){
                str.innerHTML = "weak";
                pass.style.borderColor ="red";
                msg.style.color = "#ff5925";
            }
           else if(pass.value.length >= 4 && pass.value.length < 8){
                str.innerHTML = "medium";
                pass.style.borderColor ="yellow";
                msg.style.color = "yellow";
            }
           else if(pass.value.length >= 8){
                str.innerHTML = "strong";
                pass.style.borderColor ="green";
                msg.style.color = "green";
            }
        } )
           

function myFunction(){
   if(pass.value.myFunction){       
         alert("you have registered successfully");
}
}


function validation(){
var val = document.getElementById("vall");
var email = document.getElementById("email").value;
var text = document.getElementById("text");
var pattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);   ///^[^]+@[^]+\.[a-z]{2,3}$/

if(email.match(pattern)){
val.classList.add("valid");
val.classList.remove("invalid");
text.innerHTML="email is valid";
text.style.color="green";
}
else{
val.classList.remove("valid");
val.classList.add("invalid");
text.innerHTML="please enter valid email";
text.style.color="red";
}
}
function phoneValidation(){
var mob = document.getElementById("mob");
const phone = document.getElementById("phone").value;
let text = document.getElementById("text1");
let pattern =(/^(\+[0-9]{3})?[ -.]?([0-9]{3})[ -.]?([0-9]{3})[-. ]?([0-9]{3})$/);


if(phone.match(pattern)){
mob.classList.add("valid");
mob.classList.remove("invalid");
text.textContent = "phone num is valid";
text.style.color = "green";
}
else{
mob.classList.remove("valid");
mob.classList.add("invalid");
text.innerHTML="please enter valid phone";
text.style.color="red";

}
}
/*
<script >
    
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function(){
Form1.style.left = "-450px";
Form2.style.left = "40px";
progress.style.width = "240px";
}

Back1.onclick = function(){
Form1.style.left = "40px";
Form2.style.left = "450px";
progress.style.width = "120px";

}
Next2.onclick = function(){
Form2.style.left = "-450px";
Form3.style.left = "40px";
progress.style.width = "360px";
}

Back2.onclick = function(){
Form2.style.left = "40px";
Form3.style.left = "450px";
progress.style.width = "240px";
}
var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
        
        pass.addEventListener('input', () => {
            if(pass.value.length > 0){
                msg.style.display = "block";
            }
            else{
                msg.style.display = "none";
            }
            if(pass.value.length < 4){
                str.innerHTML = "weak";
                pass.style.borderColor ="red";
                msg.style.color = "#ff5925";
            }
           else if(pass.value.length >= 4 && pass.value.length < 8){
                str.innerHTML = "medium";
                pass.style.borderColor ="yellow";
                msg.style.color = "yellow";
            }
           else if(pass.value.length >= 8){
                str.innerHTML = "strong";
                pass.style.borderColor ="green";
                msg.style.color = "green";
            }
        } )
           

function myFunction(){
   if(pass.value.myFunction){       
         alert("you have registered successfully");
}
}


function validation(){
var val = document.getElementById("vall");
var email = document.getElementById("email").value;
var text = document.getElementById("text");
var pattern = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);   ///^[^]+@[^]+\.[a-z]{2,3}$/

if(email.match(pattern)){
val.classList.add("valid");
val.classList.remove("invalid");
text.innerHTML="email is valid";
text.style.color="green";
}
else{
val.classList.remove("valid");
val.classList.add("invalid");
text.innerHTML="please enter valid email";
text.style.color="red";
}
}
function phoneValidation(){
var mob = document.getElementById("mob");
const phone = document.getElementById("phone").value;
let text = document.getElementById("text1");
let pattern =(/^(\+[0-9]{3})?[ -.]?([0-9]{3})[ -.]?([0-9]{3})[-. ]?([0-9]{3})$/);


if(phone.match(pattern)){
mob.classList.add("valid");
mob.classList.remove("invalid");
text.textContent = "phone num is valid";
text.style.color = "green";
}
else{
mob.classList.remove("valid");
mob.classList.add("invalid");
text.innerHTML="please enter valid phone";
text.style.color="red";

}
}
</script>
*/