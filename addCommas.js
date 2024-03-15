function addCommas(intNum) {
    const strArr = String(intNum).split('').map(num => Number(num))
    const revArr = strArr.reverse();
    console.log(revArr);

    let exit = false;
    let idx = 0;
    while(!exit){
        if(idx === 0){
            idx += 3; 
        }
        else{
            idx += 4;
        }
        console.log('idx: '+idx);
        console.log('element: '+revArr[idx]);
        if(Number.isInteger(revArr[idx])){
            revArr.splice(idx, 0, ',');
        }
        else{
            exit = true;
        }
    }

    const regArr = revArr.reverse();
    if(!regArr[0]){
        regArr[0] = '-';
    }
    const result = regArr.join('');
    
    console.log(result);

    return result;
}

addCommas(-12345678);

module.exports = addCommas;