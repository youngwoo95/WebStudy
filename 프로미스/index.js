let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("성공")   
    },1000);
});

myFirstPromise.then((successMessage)=>{
    console.log("와!" + successMessage);
});