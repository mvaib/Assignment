let Name = document.getElementById("name")
let Amount = document.getElementById("amount")
let Nextbtn = document.getElementById("nextbtn")
let Paybtn = document.getElementById("paybtn")
let UPIinp = document.getElementById("upi")
let UPIlabel = document.getElementById("upilable")
let UPItext = document.getElementById("upiText")
let SuccessfulPage = document.getElementById("contSuccessful")
let ProcessingPage = document.getElementById("contProcessing")
let FailPage = document.getElementById("contFail")
let SuccessfulPaidAmount = document.getElementById("successfulpaidAmount")
let SuccessfulPaidTo = document.getElementById("successfulpaidTo")
let FailPaidAmount = document.getElementById("failpaidAmount")
let FailPaidTo = document.getElementById("failpaidTo")


function next(){
    if(Name.value === "" && Amount.value ===""){
        Nextbtn.disable = true;
        alert("Please Enter the Recipient Name and Amount")
    }
    else if(Name.value === ""){
        Nextbtn.disable = true;
        alert("Please Enter the Recipient Name")
    }
    else if(Amount.value ===""){
        Nextbtn.disable = true;
        alert("Please Enter the Amount")
    }
    else{
        Nextbtn.disable = false;
        Nextbtn.style.display = "none"
        UPItext.style.display = "block"
        UPIinp.style.display = "block"
        UPIlabel.style.display = "block"
        Paybtn.style.display = "block"

    }
}


let isBankServerOn = true;

function pay(){
    SuccessfulPaidAmount.innerText = Amount.value;
    SuccessfulPaidTo.innerText = Name.value;
    FailPaidAmount.innerText = Amount.value;
    FailPaidTo.innerText = Name.value;

    if(UPIinp.value === ""){
        Paybtn.disable = true;
        alert("Please Enter the UPI ID")
    }
    else{
        Paybtn.disable = false;
        let myPromise = new Promise(function(resolve,reject){
            ProcessingPage.style.display = "flex"
        })
        setTimeout(function(){
            let promise = new Promise(function(resolve,reject){
                if(isBankServerOn === true){
                    if(UPIinp.value === "abcd1@okhdfcbank"){
                        ProcessingPage.style.display = "none"
                        SuccessfulPage.style.display = "flex"
                        resolve("Promise Resolve")
                    }
                    else{
                        ProcessingPage.style.display = "none"
                        FailPage.style.display = "flex"
                        setTimeout(function(){
                            alert("You have Enter Wrong UPI ID")
                        },1000)
                        reject("something went wrong")
                        
                    }
                }
                else{
                    reject("bank Server is Down")
                }
            })
            console.log(promise)
            promise
            .then(function(res){
                console.log(res)
            })
            .catch(function(err){
                console.log(err)
            })
        },3000)
        
        SuccessfulPage.style.display  = "none"
        FailPage.style.display = "none"    
        console.log(myPromise)
    }
}

