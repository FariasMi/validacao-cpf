console.log('Javascript carregado');

function validaCPF(cpf){
    if(cpf.length !=11){
        return false;
    }else{
        let numeros = cpf.substring(0,9);
        let digitos = cpf.substring(9);  

        let soma = 0
        for(let i = 10; i>1; i--){
            soma += numeros.charAt(10-i)*i;
        }
        let resultado = soma % 11 < 2 ? 0 :11-(soma %11);
        
        //Validação do primeiro dígito
        if(resultado != digitos.charAt(0)){
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0,10);

        for(let k=11; k>1; k--){
         soma += numeros.charAt(11-k)*k;   
        }

        resultado = soma % 11 < 2 ? 0 :11 -(soma % 11);

        if(resultado != digitos.charAt(1)){
            return false;
        }
        
        return true;
    }
}

function validacao(){
  
    let cpf = document.getElementById('cpf_digitado').value;
    let sucesso = document.getElementById('success');
    let erro = document.getElementById('error');

    sucesso.style.display = 'none';
    erro.style.display = 'none';

    let verificaCpf = validaCPF(cpf); 
      if (verificaCpf){
        sucesso.style.display = 'block';
    }else{
        erro.style.display = 'block';
    }
    
    
}