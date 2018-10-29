
var arrayOne = [ 3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1 ];
var arrayTwo = [ -1, -8, -2 ];
var arrayTree = [ 1, 7, 3 ];
var arrayFour = [ 1, undefined, 3, 5, -3 ];
var arrayFive = [ 1, NaN, 3, 5, -3 ];

function arrayOperation (array, operation) {
  var i;
  var sum = 0;
  var min = Infinity;
  var max = -Infinity;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
    if ( array[i] < min ) min = array[i];
    if ( array[i] > max ) max = array[i];
  }

  if ( operation ==='sum' ) {
    if (!Number.isNaN(sum) ) {
      console.log ( "Summa " + sum );
    } else {
      console.log ("Summa with NaN or undefine");
    }

  }

  if ( operation === 'min' ) {
    console.log ( "Min " + min );
  }

  if ( operation === 'max' ) {
    console.log ( "Max " + max );
    console.log ("---------------------");
  }

}

arrayOperation ( arrayOne, 'sum' );
arrayOperation ( arrayOne, 'min' );
arrayOperation ( arrayOne, 'max' );

arrayOperation ( arrayTwo, 'sum' );
arrayOperation ( arrayTwo, 'min' );
arrayOperation ( arrayTwo, 'max' );

arrayOperation ( arrayTree, 'sum' );
arrayOperation ( arrayTree, 'min' );
arrayOperation ( arrayTree, 'max' );

arrayOperation ( arrayFour, 'sum' );
arrayOperation ( arrayFour, 'min' );
arrayOperation ( arrayFour, 'max' );

arrayOperation ( arrayFive, 'sum' );
arrayOperation ( arrayFive, 'min' );
arrayOperation ( arrayFive, 'max' );