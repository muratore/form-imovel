

// fetch ---- https://viacep.com.br/ws/01001000/json/

// const sendBtn = document.querySelector

const getCepData = async (cep)=> {
  try {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => console.log(data))
  } catch (error) {
    console.log(error);
  }
     

}
getCepData(60135208);
