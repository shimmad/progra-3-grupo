const form = document.getElementById('addWord');
const text = document.getElementById('inputText');
const list = document.getElementById ('empty');
const message = document.getElementById('message');

function addingWords(){
    form.addEventListener('submit', async function(e){
        e.preventDefault();

        const textValue = text.value.trim();
    
        if(textValue !== ''){

            message.textContent ="Agregando palabra...";
            message.classList.add('message');

            await new Promise(resolve => setTimeout(resolve,2000));

            const item = document.createElement('li');
            item.textContent = textValue;
            item.classList.add('item');
            list.appendChild(item);
            
            item.addEventListener('click', ()=>{

                item.classList.toggle('check');
            })
            text.value = '';
            message.textContent = '';
            console.log('Se agrego');
        }
        else {
            console.log('El campo esta vacio');
        }
    })
}

addingWords();
