// Select all form inputs

const cep = document.querySelector('input[name="cep"]');
const street = document.querySelector('input[name="street"]');
const district = document.querySelector('input[name="district"]');
const city = document.querySelector('input[name="city"]');

// Button 
const sendBtn = document.querySelector('button[type="submit"]')
sendBtn.addEventListener('click', (e)=>{
  e.preventDefault();
    getCepData(cep.value);
})

// Get data cep from viacep
const getCepData = async (cep)=> {
  try {
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        return alert('Insira um Cep válido')
      }else{
        fillFields(data)
      }
    })
  } catch (error) {
    console.log(error);
  }   
}
// Fill Fields of the forms
const fillFields = (cepData)=>{
    street.value = cepData.logradouro
    district.value = cepData.bairro
    city.value = cepData.localidade
}
