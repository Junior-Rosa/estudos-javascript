// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         xhr.open(obj.method, obj.url, true);
//         xhr.send()
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });

// };
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!')
        const html = await response.text();
        loadResult(html)
    }catch(e){
        console.error(e);
    }
}

function loadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response
}