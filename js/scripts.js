document.addEventListener( 'DOMContentLoaded', function() {

  // console.log(
  //   '%cYour menu. \n%cAnywhere in the World.',
  //   'font-family:"Montserrat",sans-serif;font-weight:600;font-size:20px;color:#f58220;',
  //   'font-family:"Montserrat",sans-serif;font-weight:600;font-size:20px;color:#000;'
  // );

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Helper Functions
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  function hasClass( el, className ) {
    return el.classList ? el.classList.contains( className ) : new RegExp( '\\b'+ className+'\\b' ).test( el.className );
  }

  function addClass( el, className ) {
    if ( el.classList ) el.classList.add( className );
    else if ( !hasClass( el, className ) ) el.className += ' ' + className;
  }

  function removeClass( el, className ) {
    if ( el.classList ) el.classList.remove( className );
    else el.className = el.className.replace( new RegExp( '\\b'+ className+'\\b', 'g' ), '' );
  }

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Animated Favicon ( https://github.com/dlom/favicon.js/tree/master )
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  favicon.animate([
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVQ4EWNkYGD4D8RkAyaydUI1jhrAwMCCHIj//xMXIYyMjHBttAlEBQUFBkFBQbgtIDZIDBcAuRuMgV4AAwEBARQ+SB4kBgMw9SAa5BniPA5UiA3QJgyw2YRLbBi4AADqNSiBnQQ3BAAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVQ4EWP8DwQMFAAmCvSCtY4awMDAghyIjIyMyFycbOSIo00gPnjwgOH9+/dwF4DYIDFsAMULMAX8/PwMAgICMC4KGy4IZTCOpkQG2kQjekjj4wMAE6oWgm3dkXAAAAAASUVORK5CYII="
  ], 500);

});
