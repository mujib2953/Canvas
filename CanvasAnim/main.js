/*
 * @Author: Mujib Ansari 
 * @Date: 2018-05-28 08:42:48 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-05-28 08:58:04
 */


var can,
    ctx,
    
    nWidth = 184,
    nHeight = 325,

    nStartX = 0,

    canInterval,
    
    spriteImg = new Image();

window.onload = function() {

    can = document.getElementById( 'gameCanvas' );
    can.width = nWidth;
    can.height = nHeight;

    ctx = can.getContext( '2d' );

    spriteImg.src = './sprite.png';

    spriteImg.onload = function() {
        
        drawImage();


        canInterval = setInterval( function() {
            
            nStartX += nWidth;

            if( nStartX >= 1472 )
                nStartX = 0;

            drawImage();
        }, 100 );
    }

}

function drawImage() {
    
    ctx.clearRect( 0, 0, nWidth, nHeight );

    ctx.beginPath();

    ctx.moveTo( 0, 0 );

    ctx.drawImage( spriteImg, nStartX, 0, nWidth, nHeight, 0, 0, nWidth, nHeight  );

    ctx.closePath();

}