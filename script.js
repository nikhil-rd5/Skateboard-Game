document.onkeydown = function(e){
    console. log("Key code is: ", e.keyCode)
   if(e.keyCode==38){
        skater = document .querySelector ('.skater');
        skater. classList. add('animateskater');
        setTimeout(()=> {
            skater. classList.remove('animateskater')
        },1500)
        }
    }

    setInterval(() => {
        skater = document.querySelector('.skater');
        gameOver = document.querySelector('.gameOver');
        obstacle = document.querySelector('.obstacle');
        
        sx = parseInt(window.getComputedStyle(skater, null).getPropertyValue('left'));
        sy = parseInt(window.getComputedStyle(skater, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

        offsetX=Math.abs(sx-ox);
        offsetY=Math.abs(sy-oy);
        console.log(offsetX,offsetY)
        if(offsetX< 93 && offsetY<52){
            gameOver.style.visbility = "visbile";
            obstacle.classList.remove("obstacleAni")

        }
    }, 100); 
