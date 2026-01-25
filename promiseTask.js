function firstPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },6000);
    })
};

function secondPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("world ");
        },3000);
    })
};



//Forma concatenada, esto espera a que la primera promises salga bien, para que se ejecute la segunda
firstPromise()
    .then((result)=>{
        console.log(result);
    secondPromise().then((result)=>{
        console.log(result);
    })
});



//aqui ya es secuencial
firstPromise()
.then((result)=>{
    console.log(result);
});


secondPromise()
.then((result)=>{
    console.log(result);
});
