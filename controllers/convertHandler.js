/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  var charRegex = /[A-Za-z]/;
  var fracRegex = /[\/]/g;
  var firstCharIndex;
  var counter = 0;
  
  this.getNum = function(input) {
    var result;
    // console.log(input.search(charRegex));
    firstCharIndex = input.search(charRegex);
    // console.log(input.slice(0,firstCharIndex));
    


    
    
    if(firstCharIndex == 0 ){
      result = 1;
    }else{
      result = input.slice(0,firstCharIndex);
      
      
      //looking for number of fractions
      var tempArray;
      // = fracRegex.exec('3/2/2');
      while((tempArray=fracRegex.exec(result)) !== null){
          counter ++;
          // console.log(counter);
      }
      // console.log(counter);
      
      try{ eval(result); } catch(e) {
        if(e instanceof ReferenceError || e instanceof SyntaxError){
          result = "invalid number";
        } 
      }
      
      if(result !== "invalid number" && counter < 2){
        result = eval(result);
      }else{
       result = "invalid number";
        
      }
    }
    counter = 0;//reset counter
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let testResult = input.slice(firstCharIndex,input.length);
    
    if(["gal", "L", "lbs", "Kg", "mi", "Km"].indexOf(testResult) !== -1){
      result = testResult;
    }else{
      result = "invalid unit";
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit){
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "Kg";
        break;
      case "Kg":
        result = "lbs";
        break;
      case "mi":
        result = "Km";
        break;
      case "Km":
        result = "mi";
        break;
      default:
        result = "Error";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit){
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "Kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "Km":
        result = "kilometers";
        break;
      default:
        result = "Error";
    }    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit){
      case "gal":
        result = (initNum * galToL).toFixed(5);
        break;
      case "L":
        result = (initNum / galToL).toFixed(5);
        break;
      case "lbs":
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case "Kg":
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case "mi":
        result = (initNum * miToKm).toFixed(5);
        break;
      case "Km":
        result = (initNum / miToKm).toFixed(5);
        break;
      default:
        result = "Error";
    }
    
    result = Number(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    // console.log(initUnit + " to string " + this.spellOutUnit(initUnit));
    
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
