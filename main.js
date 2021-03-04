/* 1. feladat */
function task1() {
    let result = document.forms.task_1.number.value;
    if (result != 0) {
        if (result % 2 == 0) {
            result = "A megadott szám páros.";
        } else {
            result = "A megadott szám páratlan.";
        }
    } else {
        result = "Helytelen adat !"
    }
    document.getElementById("task1_result").innerHTML = `${result}`;
}

/* 2. feladat */
function task2() {
    let result = document.forms.task_2.number.value;
    if (result > 100) {
        if (result % 2 == 0) {
            result = "A megadott szám páros.";
        } else {
            result = "A megadott szám páratlan.";
        }
    } else {
        result = "A megadott szám nem nagyobb 100-nál !";
    }
    document.getElementById("task2_result").innerHTML = `${result}`;
}

/* 3. feladat */
function task3() {
    let player1 = document.forms.task_3.player1.value;
    let player2 = document.forms.task_3.player2.value;
    if (player1 == "" || player2 == "") {
        result = `Hiányos nevek !`;
    } else {
        let winner = "";
        let player1_score = Math.floor(Math.random() * 6) + 1;
        let player2_score = Math.floor(Math.random() * 6) + 1;
        if (player1_score == player2_score) {
            winner = 'döntetlen';
        } else if (player1_score > player2_score) {
            winner = player1;
        } else {
            winner = player2;
        }
        result = `A két játékos a dobókockával ezeket dobta: <br>${player1}: ${player1_score}<br>${player2}: ${player2_score}<br>A játékot nyerte: ${winner}`;
    }
    document.getElementById("task3_result").innerHTML = `${result}`;
}

/* 4. feladat */
function task4() {
    let bmi = 0
    let tipus = "";
    let height = parseFloat(document.forms.task_4.height.value);
    let weight = parseFloat(document.forms.task_4.weight.value);
    if (height > 0 && weight > 0) {
        bmi = weight/(height/100*height/100);
        if (bmi < 18.5) { tipus = "sovány" } 
        else if (bmi > 18.5 && bmi < 25) { tipus = "normál" } 
        else {tipus = "túlsúlyos"}
        result = `A megadott értékek alapján a test tömeg index (BMI): ${bmi.toFixed(1)}, azaz ${tipus} .`;
    } else {
        result = `Helytelen adatok !`;
    }
    document.getElementById("task4_result").innerHTML = `${result}`;
}

/* 5. feladat */
function task5() {
    let month = document.forms.task5.month.value;
    let season = '';
    if (isNaN(parseInt(month))) {
        month = month.toLowerCase();
    }
    switch(month) {
        case '12': 
        case 'december':
        case '1':
        case 'január':
        case '2':
        case 'február':
            season = 'Tél';
        break;
        case '3':
        case'március':
        case '4':
        case'április':
        case '5':
        case'május':
            season = 'Tavasz';
        break;
        case '6':
        case'június':
        case '7':
        case'július':
        case '8':
        case'augusztus':
            season = 'Nyár';
        break;
        case '9':
        case'szeptember':
        case '10':
        case'október': 
        case '11':
        case'november':
            season = 'Ősz';
        break;
        default:
            season = 'error';
    }
    if (season != `error`) {
        result = `A megadott hónap a következő évszakhoz tartozik: ${season}`;        
    } else { result = `Helytelen adat !`}
    document.getElementById("task5_result").innerHTML = `${result}`;
}

/* 6. feladat */
function task6() {
    var even_numbs = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            even_numbs.push(i);
        }
    }
    document.getElementById("task6_result").innerHTML = `${even_numbs}`;
}

/* 7. feladat */
function task7() {
    var even_numbs = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            even_numbs.push(i);
        }
    }
    result = `0 és 100 között ${even_numbs.length} db. páros szám található`;
    document.getElementById("task7_result").innerHTML = `${result}`;
}

/* 8. feladat */
function task8() {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
        sum = sum + i;
    }
    result = `1 és 100 között a számok összege: ${sum}`;
    document.getElementById("task8_result").innerHTML = `${result}`;
}

/* 9. feladat */
function task9() {
    let number1 = parseFloat(document.forms.task_9.number1.value);
    let number2 = parseFloat(document.forms.task_9.number2.value);
    let seged1 = 0;
    let seged2 = 0;
    let counter = 0;
    if (number1 > 0 && number2 > 0 && number1 % 1 === 0 && number2 % 1 === 0) {
        if (number1 > number2) {
            seged1 = number2;
            seged2 = number1;
        } else {
            seged1 = number1;
            seged2 = number2;
        }
        for (let i = seged1; i < seged2; i++) {
            if (i % 2 == 0) {
                counter++;
            }
        }
        result = `${number1} és ${number2} között ${counter} db. páros szám található`;
    } else {
        result = `Helytelen adatok !<br>Pozitív egész számokat adj meg !`
    }
    document.getElementById("task9_result").innerHTML = `${result}`;
}

