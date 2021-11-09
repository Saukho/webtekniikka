/*Luvun kertoma*/

function factorial(){
  let counted = document.getElementById('numb').value
  const txt = document.getElementById('text')

  let total = 1

  for(let i =1; i <= counted; i++) {
    total *= i
  }
  txt.innerHTML = `<p>Tulos on ${total}</p>`;
}
/*Luvun kertoma*/

/*Luvun neliöjuuri*/
function square(){
  let counted = document.getElementById('numb1').value
  const txt1 = document.getElementById('text1')


  let total = 1

  for(let i = 1; i <= counted; i++) {
    total = Math.sqrt(counted)
  }
  txt1.innerHTML = `<p>Tulos on ${total}</p>`;
}
/*Luvun neliöjuuri*/
/*Aloitus ja lopetusvuosi*/

function leapYears() {
  const year1 = document.getElementById('year1').value
  const year2 = document.getElementById('year2').value
  const yearList = document.getElementById("listYears")
  let list = ''
  const listYear = []

  for (let i=year1; i < year2; ++i) {

    if (!(i%4)&&(i%100)||!(i%400) ) {
       listYear.push(i)
        let last = listYear[listYear.length-1]
        list += `<ul><li>${last}</li></ul>`
      console.log(i);
      console.log(listYear);

    }
  }
  yearList.innerHTML =`<h3>Karkausvuodet ovat</h3> ${list}`;
}
/*Karkausvuosi*/

//Noppapeli

function countDice(){
  const dices = document.getElementById('dices').value
  const countedVal = document.getElementById('countDicesVal')
  let diceMath =  Math.floor(Math.random() * 6) + 1;
  const res = [];
  let result =''
  let results = ''

    for (let i = 1; i <= dices; i++) {
      res.push(i)
      console.log(res)
      result =  res.length
      results = `<ul><li>${result * diceMath}</li></ul>`
    }
  countedVal.innerHTML = `<p>Noppien yhteenlasketut pisteet </p> ${results}`

}
//Noppapeli

/*Alkuluvut*/
function checkPrimes() {
  const prime = document.getElementById('prime').value
  const isValPrime = document.getElementById('countIsPrime')
  let theResult = ''

  for (let i = 2; i <= Math.sqrt(prime); i++) {
    if (prime > 9999999 ) {
      console.log(prime )
      theResult = `<p>Antamasi luku ei kelpaa</p>`
      break;
    } else if (prime % 2 === 0) {
      theResult = `<p>Antamasi luku ${prime} ei ole alkuluku</p>`
      break;
    } else {
      theResult = `<p>Antamasi luku ${prime} on alkuluku</p>`
    }
  }
  isValPrime.innerHTML = theResult
}
/*Alkuluvut*/


/*Noppien lukumaara ja silmalukujen todennakoisyys*/
function diceOdds(){
  let dices = +prompt('Anna noppien lukumaara');
  let odds = +prompt(`Veikkaa noppien silmalukujen yhteismaara`);

  const printVal = document.getElementById('calculateOdds')
  let count= 0
  let rounds = 10000

  for (let i = 0; i <= rounds; i++) {
    let num= 0;
    for (let i = 0; i < dices; i++) {
     num += Math.floor(Math.random() * 6) + 1;
    }
    if (odds === num) {
      count++;
    }
  }
  let res = 100 * (count/rounds);
  printVal.innerHTML = `Todennakoisyys saada tulokseksi ${odds} antamillasi nopilla on ${res} %.`

}
/*Noppien lukumaara ja silmalukujen todennakoisyys*/

/*bingolappu*/
function bingoSheet(){
const bingo = document.getElementById('bingo')
  const bet = document.getElementById('bet')

  let table = []
  let min = 1;
  let max = 4;
  for(let i=1; i<25;i++){
    let res = (Math.floor(Math.random() * max) + min)
    min += 4;
    table.push(res)
    console.log(res)
  }
  bet.textContent = 'Arvotut numerot ovat:'
  bingo.textContent = table.slice(0,12)+ "\n"+ table.slice(13,25)
}
/*bingolappu*/