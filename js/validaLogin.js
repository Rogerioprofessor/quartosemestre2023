function validaLogin(){
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;

    if(email != 'rogerio.santos@edu.sc.senai.br' || senha != '1234'){
          document.getElementById('msg').innerHTML = "Erro na autenticação";
          document.getElementById("msg").style.color = "red";
    }
    else{      
        document.getElementById('msg').innerHTML = "Autenticação realizada com sucesso";
        document.getElementById("msg").style.color = "green";
    }
    return false;

}