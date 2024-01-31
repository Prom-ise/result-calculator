// Unary Operator - requires one operand; ++, --, typeof
// Binary Operator - requires two operands; +, -, /, *., **
// Ternary Operator - requires three operands

// if (2+2==4) {
//     console.log("yes");
// } else{
//     console.log("no");
// }

// (2+2==4)
//     console.log("yes"):console.log(no)


function calculate(){
   if (Name.value == '' || identify.value == '' || Math.value == '' || Eng.value == '' || Agric.value == '' || Animal.value == '' || Phy.value == '' || Bio.value == '' || Chm.value == '' || Yor.value == '') {
    warning.style.display = "block"
   } 
   else {
    var confirmation = confirm ("Are you sure you want to proceed?")
    if (confirmation == true){
    warning.style.display = "none"
    var Mathemaics = Maths.value
    var English = Eng.value
    var Agricultural_Science = Agric.value
    var Animal_Husbandry = Animal.value
    var Biology = Bio.value
    var Chemistry = Chm.value
    var Physics = Phy.value
    var Yoruba = Yor.value

    var add = Number(Mathemaics) + Number(English) + Number(Agricultural_Science) + Number(Animal_Husbandry) + Number(Biology) + Number(Chemistry) + Number(Physics) + Number(Yoruba)
 5
    var cumulative = (add/800) * 100 .toFixed(2)
    
    if ( Math.value > 100 || Eng.value > 100 || Agric.value > 100 || Animal.value > 100 || Phy.value > 100 || Bio.value > 100 || Chm.value > 100 || Yor.value > 100){
        alert("Warning: Invalid Score Input 'Score can not be more than 100'")
    }
    else{
        console.log( cumulative );
    show.innerHTML = cumulative

    }
    }
   }
}