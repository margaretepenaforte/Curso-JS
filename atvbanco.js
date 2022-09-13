let Banco = {
    conta: "1111",
    saldo: 8000,
    tipo: "corrente",
    agencia: "1313",
  };
  
  let saldo = function () {
    console.log(`Saldo atual: ${Banco.saldo}`);
  };
  
  let depositar = function (valor) {
    return (Banco.saldo = Banco.saldo + valor);
  };
  
  let sacar = function (valor) {
    return (Banco.saldo = Banco.saldo - valor);
  };
  
  let conta = function () {
    console.log(`Número da conta: ${Banco.conta}`);
  };
  
  saldo();
  depositar(2000);
  saldo();
  sacar(500);
  saldo();
  conta();
  