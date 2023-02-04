var shoppingCart = {
    books : 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 2,
    pen  : 25
}

var pencourt = shoppingCart.pen;

var pencourt2 = shoppingCart['pen']

var phopertiesName = 'mouse' ;



var phoperties = Object.keys(shoppingCart);
var phopertyValues = Object.values(shoppingCart);

console.log(phoperties);