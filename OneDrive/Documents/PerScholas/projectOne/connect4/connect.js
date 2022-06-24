document.addEventListener('DOMContentLoaded', () => {

    let playerOne;
    let playerTwo;
    let playerOneTurn = true

    //player 1 is red
    //player 2 is yellow


    //Getting elements and assigning them to a variable to be able to select the whole row or column if needed

     columnSelect0 = document.getElementById('C0');
     columnSelect1 = document.getElementById('C1');
     columnSelect2 = document.getElementById('C2');
     columnSelect3 = document.getElementById('C3');
     columnSelect4 = document.getElementById('C4');
     columnSelect5 = document.getElementById('C5');
     columnSelect6 = document.getElementById('C6');

     column0 = document.querySelectorAll('.column0');
     column1 = document.getElementsByClassName('column1');
     column2 = document.getElementsByClassName('column2');
     column3 = document.getElementsByClassName('column3');
     column4 = document.getElementsByClassName('column4');
     column5 = document.getElementsByClassName('column5');
     column6 = document.getElementsByClassName('column6');

     allDivs = document.querySelectorAll('#container-board div');

    // console.log(allDivs)


    //I want to display current player chip up top when hovering over its respective column ✔
    //If player1 turn display their color and vice versa ✔
    //Try a for loop to iterate through each one to avoid writing the same code for each column (come back when project finish.
    // see if I can implement and make code DRYer)

    for (let i = 0; i < column0.length; i++) {

        column0[i].addEventListener('mouseenter', function() {

            playerOneTurn ? columnSelect0.style.backgroundColor= 'red' : columnSelect0.style.backgroundColor= "yellow"
    
        })

        column0[i].addEventListener('mouseout', function () {
            columnSelect0.style.backgroundColor= 'white'
        })
    }

    for (let i = 0; i < column1.length; i++) {

    column1[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect1.style.backgroundColor= 'red' : columnSelect1.style.backgroundColor= "yellow"
    
    })

    column1[i].addEventListener('mouseout', function () {
    columnSelect1.style.backgroundColor= 'white'
    })
    }

    for (let i = 0; i < column2.length; i++) {

    column2[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect2.style.backgroundColor= 'red' : columnSelect2.style.backgroundColor= "yellow"
    
    })

    column2[i].addEventListener('mouseout', function () {
    columnSelect2.style.backgroundColor= 'white'
    })
    }

    for (let i = 0; i < column3.length; i++) {

    column3[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect3.style.backgroundColor= 'red' : columnSelect3.style.backgroundColor= "yellow"
    
    })

    column3[i].addEventListener('mouseout', function () {
    columnSelect3.style.backgroundColor= 'white'
    })
    }

    for (let i = 0; i < column4.length; i++) {

    column4[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect4.style.backgroundColor= 'red' : columnSelect4.style.backgroundColor= "yellow"
    
    })

    column4[i].addEventListener('mouseout', function () {
    columnSelect4.style.backgroundColor= 'white'
    })
    }

    for (let i = 0; i < column5.length; i++) {

    column5[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect5.style.backgroundColor= 'red' : columnSelect5.style.backgroundColor= "yellow"
    
    })

    column5[i].addEventListener('mouseout', function () {
    columnSelect5.style.backgroundColor= 'white'
    })
    }

    for (let i = 0; i < column6.length; i++) {

    column6[i].addEventListener('mouseenter', function() {

    playerOneTurn ? columnSelect6.style.backgroundColor= 'red' : columnSelect6.style.backgroundColor= "yellow"
    
    })

    column6[i].addEventListener('mouseout', function () {
    columnSelect6.style.backgroundColor= 'white'
    })
    }

    // Depending on Player if click on column fill next available empty div. Add the class occupied.

    for (let i = 0; i < allDivs.length; i++) {
      
        allDivs[i].addEventListener('click', () => {

            if (allDivs[i + 7].classList.contains('occupied')){

                if (playerOneTurn === true) {

                    if (allDivs[i].classList.contains('occupied')) {
                        
                        playerOneTurn = true
                        alert('Circle already selected! Select a different circle.')
                        

                    } else {
                        
                        allDivs[i].classList.add('occupied')
                        allDivs[i].classList.add('player-one')
                        
                    
                        playerOneTurn = false}
                    

                } else { 

                    if (allDivs[i].classList.contains('occupied')) {
                        
                        playerOneTurn = false
                        alert('Circle already selected! Select a different circle.')
                        

                        } else {
                    
                        allDivs[i].classList.add('occupied')
                        allDivs[i].style.backgroundColor= 'yellow'
                    
                        playerOneTurn = true
                    }
                }

            } else {

                alert('Can\'t go here! Select a different circle.')
            }
        })
        
    }
       
       
       
       
       
       
       
       
       
       
       
    //    if (playerOneTurn === true) {
                    
    //              {
                
    //                     allDivs[i].addEventListener('click', () => {
                    
    //                     allDivs[i].classList.add('occupied')
    //                     allDivs[i].classList.add('player-one')

    //                     // allDivs[i].style.backgroundColor = "red"
                   
                    
    //                     playerOneTurn = false
    //                 })
        
    //             } else { playerOneTurn = true}
                
    //     } else { 
    //                 if ( allDivs[i + 7].classList.contains('occupied')) {

    //                     allDivs[i].addEventListener('click', () => {

    //                     allDivs[i].classList.add('occupied')
    //                     allDivs[i].classList.add('player-two')

    //                     // allDivs[i].style.backgroundColor = "yellow"
                    
    //                     playerOneTurn = true
    //                     }) 

    //                 } else {playerOneTurn = false}  

                

             

    //             }


                   
        
    

})