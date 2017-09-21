function validarCartao(numero_cartao){
  let numero_string, numero_inteiro;
  numero_string=numero_cartao.toString();
  numero_inteiro=parseInt(numero_string[1],numero_inteiro);

console.log(numero_string);
numero_string=numero_string.split("").reverse().toString();
console.log(numero_string);


if(false){

  if (numero_string.length==15){

    if(numero_string[1]==='4' && numero_string[0]==='3'|| numero_string[1]==='7' && numero_string[0]==='3'){

      console.log("AMEX");

    }else{

      console.log("Cartão inválido");

    }

  }else if (numero_string.length==16 || numero_string.length==13) {

      if(numero_string[0]==='6' && numero_string[1]==='0' && numero_string[2]==='1' && numero_string[3]==='1' && numero_string.length==16){

      console.log("Discover");

    }else if (numero_string[0]==='5' && numero_inteiro < 6 && numero_inteiro > 0 && numero_string.length==16) {

      console.log("MasterCard");

    }

    else if(numero_string[0]==='4'){

      console.log("Visa");

    }else{

      console.log("Cartão inválido");

    }

  }else {

    console.log("Cartão inválido");

  }

}

}

//
// validarCartao(541300000000000);
// validarCartao(571300000000000);
// validarCartao(371300000000000);
// validarCartao(3713000000000);
// validarCartao(341300000000000);
// validarCartao(6011000000000000);
// validarCartao(3713000000000000);
// validarCartao(5622000000000000);
// validarCartao(5722000000000000);
// validarCartao(5522000000000000);
// validarCartao(4722000000000);
// validarCartao(4522000000000000);
// validarCartao(8722000000000);
// validarCartao(8522000000000000);
