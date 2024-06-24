function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') {
            reject('BAD VALUE') 
            return;} // da erro caso não seja uma string
        
        setTimeout(() =>{
            resolve(msg)
        }, tempo);
    });
}

const promises =['Primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    // esperaAi(1111, 1000),
    'outro valor'
] 
Promise.all(promises).then(valor => console.log(valor)).catch(e => console.log(e)) // te entrega todas as promises como array
Promise.race(promises).then(valor => console.log(valor)).catch(e => console.log(e)) // te entrega o primeiro a resolver

