const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const results= document.querySelector('.results')



window.onload = () => text.focus();

btn.addEventListener('click',()=>{
    if(!text.value){
        alert('Listeye Birşeyler Giriniz')
    }
    else{
        results.innerHTML += ` <div class="result">
            <i class="fa-regular fa-square"></i>
        <p>${text.value}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
        </div>`;
        text.value = ''
    }
})

text.addEventListener('keydown',(e) =>{
    if(e.code === 'Enter'){
        btn.click()
    }
})

results.addEventListener('click',(e)=>{
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.remove()
    }

    else if(e.target.classList.contains('fa-square')){
        e.target.parentElement.classList.add("bg")
      e.target.classList.remove("fa-regular","fa-square");
       e.target.classList.add("fa-solid" ,"fa-check");
    }
    else if (e.target.classList.contains("fa-check")) {
         e.target.parentElement.classList.remove("bg");
      e.target.classList.add("fa-regular", "fa-square");
      e.target.classList.remove("fa-solid", "fa-check");
    }
   
    })

