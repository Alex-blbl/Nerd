var leftPip = document.querySelector('.left__pip');

leftPip.addEventListener('mousedown', function (evt) {
    console.log('work');
    if (leftPip.addEventListener('mousemove', function(mv) {
        if(mv.x--) {
            leftPip.style.left = 16 + 20 + 'px';
        }
    })) {
        
    }
});

