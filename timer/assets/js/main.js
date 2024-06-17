function relogio() {
    const start = document.querySelector('.iniciar');
    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;


    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startClock() {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('zerar')) {
            start.removeAttribute('disabled');
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;

        }
        if (el.classList.contains('pausar')) {
            start.removeAttribute('disabled');
            relogio.classList.add('pausado');
            clearInterval(timer);

        }
        if (el.classList.contains('iniciar')) {
            el.setAttribute('disabled', true);
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();

        }
    })
}
relogio()