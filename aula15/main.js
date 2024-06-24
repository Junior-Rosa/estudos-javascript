function rand(min=0, max=3){
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

async function executa(){
    try{
    const fase1 = await esperaAi('promise 1', rand());
    console.log(fase1);
    const fase2 = await esperaAi('promise 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('promise 3', rand());
    console.log(fase3);
    }
    catch(e){
        console.log(e);
    }
}
executa()

// estados
// pending -> pendente
// fullfilled -> resolvida
// reject -> rejeitada