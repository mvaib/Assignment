let orderNo = document.getElementById("ordernumber")
let OrderPage = document.getElementById("orderPage")
let OrderConfrim = document.getElementById("orderConfirm")
let isCheckBurger = document.getElementById("burger")
let isCheckCoke = document.getElementById("coke")
let isCheckFries = document.getElementById("fries")
let burgerImg = document.getElementById("burgerImg")
let cokeImg = document.getElementById("cokeImg")
let friesImg = document.getElementById("friesImg")
let Images = ["https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg?w=740",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP0orbYCB_wBMTbHGoMCm0zE8ug8ANMpvhg&usqp=CAU",
"https://img.freepik.com/premium-vector/cute-happy-french-fries-icon-cartoon-illustration_274619-664.jpg?w=2000"
]

function checkedBurger(){
    isCheckBurger = true
}
function checkedCoke(){
    isCheckCoke = true
}
function checkedFries(){
    isCheckFries = true
}

function placeOrder(){
    setTimeout(function(){
        let promise = new Promise(function(resolve,reject){
            if(placeOrder){
                if(isCheckBurger === true){
                    burgerImg.setAttribute("src",
                    Images[0])
                    orderNo.innerText = "789"
                    
                }
                if(isCheckCoke === true){
                    cokeImg.setAttribute("src",Images[1])
                    orderNo.innerText = "789"
                    // console.log("coke")
    
                }
                if(isCheckFries === true){
                    friesImg.setAttribute("src",Images[2])
                    orderNo.innerText = "789"
                    // console.log("fries")
    
                }
            
                OrderPage.style.display = "none"
                OrderConfrim.style.display = "flex"
                resolve("Promise Resolve")
            }
            else{
                reject("Something went wrong")
            }
        
            
        })
        console.log(promise)
        promise
        .then(function(result){
            console.log(result)
        })
        .catch(function(error){
            console.log(error)
        })

    },1000)
    
}