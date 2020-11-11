$(document).ready(main) ;
function main(){
    
    var opened = null ;
    
    $('.question').click(ouvre) ;   // gestionnaire sur la div et ce qu'elle contient
    $('h3').off() ;  // pas de gestionnaire sur les questions, l'evenement s'execute 1 
    $('p').off() ;   // seule fois: sur la div
    $('.question').hover(function(){ $(this).children('h3').css('font-weight', '700');}, function(){
        if($(this).is(opened)) return ;
        $(this).children('h3').css('font-weight', '400') ;
    } ) ;

    function ouvre(){  
        $('.question').children('.reponse').toggle(false) ; //ferme tout
        $('.question').children('img').toggleClass('up', false) ;
        //$('.reponse').removeClass('up') ;
        
        
        if( $(this).is(opened) ){ // si click sur element deja ouvert
            opened = 0 ;          // on signal que rien n'est ouvert
        }
        else{
            $(this).children('.reponse').toggle() ; //ouvre element cliqué
            $(this).children('img').toggleClass('up') ;
            //$(this).children('.reponse').addClass("show") ; // on ouvre ce qui est cliqué
            opened = $(this) ;    // on signal celui qui est ouvert 
            //$(this).children('h3').toggleClass('up') ;
            //$(this).children('img').addClass('up') ;
        }
    }// ouvre()

    function ferme(okay){
        $('h3').css('font-weight', '400') ;  // on remet tout en normal
        okay.children('h3').css('font-weight', '700') ;//en gras tant que la souris est dessus
        $('.down').switchClass("down", "up") ;
    }// ferme()

}// main()