console.log(
  '%cCheat enabled\n%cyou wascally wabbit.',
  'font-family:"Roboto Slab",sans-serif;font-weight:400;font-size:20px;color:#f58220;',
  'font-family:"Roboto",sans-serif;font-weight:400;font-size:20px;color:#808080;'
);

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

function toggleClass( el, className ) {
  if ( hasClass( el, className ) ) {
    removeClass( el, className );
  } else {
    addClass( el, className );
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Animated Favicon ( https://github.com/dlom/favicon.js/tree/master )
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

favicon.animate([
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMjgiIHI9IjEyOCIvPjwvc3ZnPg",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMTI4IiBjeT0iMTI4IiByPSIxMjgiLz48L3N2Zz4="
], 500);
