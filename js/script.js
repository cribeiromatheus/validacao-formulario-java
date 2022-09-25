let CamposObrigatorios = document.querySelectorAll('input.obrigatorio');
let CampoNumerico = document.querySelectorAll('input.numero');
let CampoTel = document.querySelectorAll('input.tel');

for(let emFoco of CampoTel){
    validaTel(emFoco);
}
for(let emFoco of CamposObrigatorios){
    validaCampo(emFoco);
}
for(let emFoco of CampoNumerico){
    validaNumerico(emFoco);
}

function validaCampo(elemento){   

elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        
        if(this.value == ""){
            document.querySelector('.mensagemerro').innerHTML = "Verifique os campos marcados em vermelho!";
            this.classList.add('erro');            
            return false;
        }else{
            document.querySelector('.mensagemerro').innerHTML = "";
            this.classList.remove('erro');
        }
    });
}

//Validação de CEP//

function validaNumerico(elemento){   

    elemento.addEventListener('focusout', function(event) {
    event.preventDefault();        
        
    if(this.value != this.value.match(/[0-9]{5}[-][0-9]{3}/)){
        document.querySelector('.mensagemerro').innerHTML = "Verifique os campos marcados em vermelho!";
        this.classList.add('erro');
        console.log(CampoNumerico);
        document.getElementById('env').type ="button";
        
        return false;
    }else if (this.value.match(/[0-9]{5}[-][0-9]{3}/)){
        document.querySelector('.mensagemerro').innerHTML = "";
        this.classList.remove('erro');
        document.getElementById('env').type ="submit";
    }
    });
}
/* Validação número de telefone*/
function validaTel(observar){
    
    observar.addEventListener('focusout', function(){
        if(this.value != this.value.match(/[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}/)){
            document.querySelector('.mensagemerro').innerHTML ="Verifique os campos marcados em vermelho!";
            this.classList.add('erro');
            document.getElementById('env').type ="button";
        return false;
        }else if(this.value.match(/[0-9]{5}[-][0-9]{3}/)){
            document.querySelector('.mensagemerro').innerHTML ="";
            this.classList.remove('erro');
            document.getElementById('env').type ="submit";
        }
    });
}