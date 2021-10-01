function blink ()
    {
        let body = document.querySelector('body');

        if (body.style.visibility === 'hidden')
        {
            body.style.visibility = 'visible';
        }
        else
        {
            body.style.visibility = 'hidden';
        }
    }
    // this function basically tells javascript to call this function over and over again!
    window.setInterval(blink, 500);