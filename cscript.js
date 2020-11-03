var stringRes, ac, c, multi, div, minus, plus, equal, zero, one, two, three, four, five, six, seven, eight, nine, visor;

stringRes = "";
ac = document.getElementById('ac');
c = document.getElementById('c');
multi = document.getElementById('multi');
div = document.getElementById('div');
minus = document.getElementById('minus');
plus = document.getElementById('plus');
equal = document.getElementById('equal');
zero = document.getElementById('0');
one = document.getElementById('1');
two = document.getElementById('2');
three = document.getElementById('3');
four = document.getElementById('4');
five = document.getElementById('5');
six = document.getElementById('6');
seven = document.getElementById('7');
eight = document.getElementById('8');
nine = document.getElementById('9');
visor = document.getElementById('visor');
// ---------------------------------------------------------------------------------------------


// -------------------------------CALCULO-------------------------------
function calcProb(x) {
  
  if (x.includes("*") || x.includes("/")) {
    
    if (x.includes("*") && x.includes("/")) {
    
    let multi = x.indexOf("*");
    let div = x.indexOf("/");
    
      if (multi < div) {
    
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("*");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
    
      let res = num1 * num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
    
     } else  if (div < multi) {
    
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("/");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
    
      let res = num1 / num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
    
     }
    
    } else if (x.includes("*")) {
      
        let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("*");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
      
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
    
      let res = num1 * num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
      
    } else if (x.includes("/")) {
      
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("/");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
    
      let res = num1 / num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
      
    }
    
  } else if (x.includes("+") || x.includes("-")) {
    
    if (x.includes("+") && x.includes("-")) {
    
    let plus = x.indexOf("+");
    let minus = x.indexOf("-");
    
      if (plus < minus) {
    
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("+");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
      
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
    
      let res = num1 + num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
    
     } else  if (minus < plus) {
    
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("-");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
    
      let res = num1 - num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
    
     }
    
    } else if (x.includes("+")) {
      
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("+");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
      
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
    
      let res = num1 + num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
      
    } else if (x.includes("-")) {
      
      let arr = x.split(/([*/+-])/g);
    
      let i = arr.indexOf("-");
    
      let num1 = arr[i - 1];
      let num2 = arr[i + 1];
    
      let res = num1 - num2;
    
      arr[i - 1] = res;
      arr[i] = "";
      arr[i + 1] = "";
    
      arr.splice(i, 1);
      arr.splice(i, 1);
    
      let resProv = arr.join("");
      calcProb(resProv);
      
    }
    
  } else {
    
    stringRes = x;
    
    visor.value = stringRes;
    
  }
  
}
// ---------------------------------------------------------------------------------------------


// -------------------------------LIMPAR UM NÚMERO-------------------------------
function clearOne() {
  
  if (stringRes.length > 0) {
    
    let i = stringRes.length;

    stringRes = stringRes.slice(0, -1);

    stringRes = stringRes;
    
    visor.value = stringRes;
    
  }
  
}
// ---------------------------------------------------------------------------------------------


// -------------------------------SETTAR A STRING DA CONTA-------------------------------
function setString(x) {
  
  stringRes += x;
  visor.value = stringRes;
  
}
// ---------------------------------------------------------------------------------------------


// ------------------------------- CHAMA O CALCULO-------------------------------
function equalAll() {
  
  calcProb(stringRes);
  
}
// ---------------------------------------------------------------------------------------------


// -------------------------------LIMPAR TUDO-------------------------------
function clearAll() {
  
  stringRes = "";
  visor.value = stringRes;
  
}