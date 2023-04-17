const button = document.getElementsByTagName('button')[0]
const select = document.getElementById("selectt")


const dolar =4.91
const euro =5.43
const bitcoin=0.000062

const convertValues = () => {
    const inputReal =document.getElementById('input-real').value
    const valorEmReal = document.getElementById('valor-real')
    const valorEmdDolar = document.getElementById('valor-dolar')

// esses valores são para a troca do simbolo da moeda  e conversão de valores
valorEmReal.innerHTML= new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency: "BRL",
}).format(inputReal)

                                                                 //valorEmReal.innerHTML=inputReal
    
                                                                                          //valorEmdDolar.innerHTML=inputReal/dolar//

    if(select.value==="us$ Dolar americano"){
        valorEmdDolar.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD",
    
        }).format(inputReal/dolar)
    }                                                     
     

   
if(select.value==="€ Euro"){
    valorEmdDolar.innerHTML= new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"EUR",

    }).format(inputReal/euro)
}
if (select.value==="bitcoin"){
    valorEmdDolar.innerHTML= inputReal/bitcoin
}

 
}
 


// esses valores são para a troca de nome de dolar para euro
changeCurrency =() =>{
   const currencyname = document.getElementById("currency-name")
   const  currrencyimg = document.getElementById("currency-img")

   if(select.value==='us$ Dolar americano'){
    currencyname.innerHTML="Dolar americano"           //troca o nome para euro
    currrencyimg.src="./imag/estados-unidos (1) 1.png"
}

   if(select.value==='€ Euro'){
    currencyname.innerHTML="€ Euro"           //troca o nome para euro
    currrencyimg.src="./imag/euro.png"      //trocar a bandeira para euro
   }

   if(select.value==='bitcoin'){
    currencyname.innerHTML="bitcoin"
    currrencyimg.src="./imag/biticoin.png"
   }
   convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)

 