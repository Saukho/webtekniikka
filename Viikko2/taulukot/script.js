
/*taulukko väärinpäin*/
function backwardArray(){
    let num = document.getElementById('numb').value;

    let values = [];
    for (let i = 0; i <num ;i++){
        values.push((i) + 1);
    }
    values.reverse();
    document.querySelector('#text').innerHTML = `${values}`;
}
/*taulukko väärinpäin*/
/*osallistujalista*/
function attenderArray(){
    let users = document.getElementById('users').value;
    let user = '';
    let num = 0;
    for(let i=0; i < users; i++){
        num++;
        let res = user;
        res = prompt('Anna nimi');
        let li  = document.createElement('ol');
        li.style.marginLeft = 'auto';
        li.style.marginRight = 'auto';
        li.textContent = `${num + ".  " + res}`;
        let userList = document.querySelector('#userList');
        userList.appendChild(li);
    }
}

/*koiralista*/
function dogsArr(){
        let dog = [];
        let num = 0;
        for(let i = 0; i < 6;i++) {
            num++;
            let name = prompt(`Anna koiran nimi`);
            dog[i] = name;

        }
         dog.sort().reverse();

        for(let j = 0; j < 6; j++){
            let ul = document.createElement('ul');
            let dogList = document.getElementById('dogsList');
            ul.textContent = `${'Koiran ' + (num) + ' nimi ' + dog[j]}`;
            dogList.appendChild(ul);
            dogList.appendChild(ul);
            console.log(dog[j]);
        }

}

/*koiralista*/

/*numerot vaarassa jarjestyksessa*/
function reverseNums(){
    let nums;
    let numbers = [];

    while(true){
        nums = parseInt(prompt('Anna lukuja 0 lopettaa'));
        if(nums === 0){
            break;
        }else{
            numbers.push(nums);
        }
    }

    numbers = numbers.sort((a,b) => b -a);

    for (let i = 0; i < numbers.length;i++){
        let list = document.getElementById('reverseList');
        list.textContent=`${numbers}`;
    }
}
/*numerot vaarassa jarjestyksessa*/
/*Aiemmin annetut numerot*/
function givenNum(){
    let nums;
    let numbers = [];

    while(true){
        nums = parseInt(prompt('Anna lukuja 0 lopettaa'));
        if(numbers.includes(nums)){
            break;
        }else{
            numbers.push(nums);
        }
    }

    numbers = numbers.sort((a,b) => b -a);

    for (let i = 0; i < numbers.length;i++){
        let list = document.getElementById('numList');
        list.textContent=`${numbers}`;
    }

}

/*Aiemmin annetut numerot*/
/*mediaani*/
function medianNum(){
    let nums;
    let numbers = [];

    while(true){
        nums = parseInt(prompt('Anna lukuja 0 lopettaa'));
        if(nums === 0){
            break;
        }else{
            numbers.push(nums);
        }
    }

    let middle = Math.floor(numbers.length /2);
    let average = numbers[middle -1] + numbers[middle] / 2;
    let list = document.getElementById('median');

    if(numbers.length % 2 === 0){
        list.textContent=`${average}`;
    }else{
        list.textContent=`Annettujen numeroiden mediaani on ${numbers[middle]}`;
    }

}
/*mediaani*/
/*äänestysohjelma */
function voteNum(){

    let candidates = +prompt('Syötä ehdokkaiden lukumäärä: ');
    let voters = +prompt('Syötä äänestäjien lukumäärä: ');
    let votes = [];

    for(let i = 0; i < candidates; i++){
        votes.push(0);
    }

    for (let i = 0; i < voters; i++) {
        let vote = +prompt('Ehdokasnumero? ');
        if (vote != 0) {
            votes[vote -1]++;
        }
    }
    let maxIdx = votes[0];
    let max = 0;
    for (let i = 0; i < votes.length; i++){
        if(votes[i] > maxIdx){
            max = i;
            maxIdx = votes[i];
        }
    }
    let winner = max + 1;

    let vo = document.getElementById('vote');
    vo.textContent=`äänestyksen voittaja on  ${winner + ' äänisaldo ' + votes[max] }`;
}
/*äänestysohjelma */