/*
 * @Author: Mujib Ansari 
 * @Date: 2018-06-04 08:17:30 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-06-04 08:44:33
 */

( function() {

    var can,
        ctx,
        
        nWidth = 500,
        nHeight = 500,

        nMaxCircle = 100,
        
        aAllCircle = [],
        
        myInterval;

    window.onload = function() {

        can = document.getElementById( 'gameCanvas' );

        ctx = can.getContext( '2d' );

        can.width = nWidth;
        can.height = nHeight;

        get100Circles();

        myInterval = setInterval( function() {
            drawMyCircle();
        }, 100 );

    }

    function get100Circles() {

        for( let i = 0; i < nMaxCircle; i++ ) {

            let oPos = getRandomPositions(),
                sColor = getRandomColor(),
            
                nRadnomRadius = getRandom( nWidth / 2 );

            aAllCircle.push( {
                position: oPos,
                color: sColor,
                radius: nRadnomRadius
            } );

        }

    }

    function drawMyCircle() {

        // ctx.arc(
        //     centX, --- number
        //     centY, --- number
        //     radius, --- number 
        //     Start_angle, --- Radians
        //     End_angle, --- Radians with the help PI
        //     isClockwise --- boolean
        // );

        ctx.clearRect( 0, 0, nWidth, nHeight );

        for( let i in aAllCircle ) {

            let tempData = aAllCircle[ i ],
                nDecRadius = getRandom( 10 );

            ctx.beginPath();
            ctx.fillStyle = tempData.color;

            ctx.arc(
                tempData.position.x,
                tempData.position.y,

                tempData.radius,
                0,
                2 * Math.PI,

                false
            );
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            tempData.radius = ( tempData.radius - nDecRadius );

            if( tempData.radius < 0 )
                aAllCircle.splice( i, 1 );

            if( aAllCircle.length === 0 )
                get100Circles();

        }

    }

    function getRandom( p_max ) {
        return Math.floor( Math.random() * p_max );
    }

    function getRandomPositions() {

        let nX = getRandom( nWidth ),
            nY = getRandom( nHeight );
            
        return { x: nX, y: nY };
    }
    
    function getRandomColor() {

        let aPossibleHex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ],
            nLen = aPossibleHex.length,
            
            sColor = '#';

        for( let i = 0; i < 6; i++ ) {

            let randomIndex = getRandom( nLen ),
                myColor = aPossibleHex[ randomIndex ];

            sColor += myColor;

        }


        return sColor;
    }

}() );