const request = obj => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open(obj.method, obj.url, true);
        xhr.send()
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });

};
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    };
    const response = await request(objConfig);
    loadResult(response)
    console.log(href);
}

function loadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response
}