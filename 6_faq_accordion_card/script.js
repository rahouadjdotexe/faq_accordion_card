$(document).ready(main) ;
function main(){
    
    var opened = null ;
    
    $('.question').click(ouvre) ;   // gestionnaire sur la div et ce qu'elle contient
    $('h3').off() ;  // pas de gestionnaire sur les questions, l'evenement s'execute 1 
    $('p').off() ;   // seule fois: sur la div
    $('.question').hover(mouseIn, mouseOut) ;

    function mouseIn(){
        $(this).children('h3').toggleClass("hover");
    }
    function mouseOut(){
        $(this).children('h3').toggleClass("hover") ;
    }
    
    function ouvre(){  
        $('.question').children('.reponse').toggle(false) ; // on ferme tout
        $('.question').children('img').toggleClass('up', false) ;
        $('h3').toggleClass('clicked', false) ;
        
        if( $(this).is(opened) ){ // si click sur element deja ouvert
            opened = 0 ;          // on signal que rien n'est ouvert
        }
        else{
            $(this).children('.reponse').toggle() ; // on ouvre element cliqué
            $(this).children('img').toggleClass('up') ;
            $(this).children('h3').toggleClass("clicked") ;
            opened = $(this) ;    // on signal celui qui est ouvert 
        }
    }// ouvre()


}// main()