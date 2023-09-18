// Create two arrays, initialize their elements and display them
function start()
{
    var n1 = new Array(5); // allocate five-element array
    var n2 = new Array(); // allocate empty array
    // assign values to each element of array n1

    var length = n1.length;
    for ( var i = 0; i < length; ++i )
    {
        n1[ i ] = i*10;
    } 

    // create and initialize five elements in array n2
    for ( i = 0; i < 5; ++i )
    {
        n2[ i ] = i*5;
    }
    outputArray( "Array n1:", n1, document.getElementById( "output1" ) );
    outputArray( "Array n2:", n2, document.getElementById( "output2" ) );
} //
// output the heading followed by a two-column table
// containing indices and elements of "theArray"
function outputArray( heading, theArray, output )
{
    var total;
    var content = "<h2>" + heading + "</h2><table>" +
    "<thead><th>Index</th><th>Value</th></thead><tbody>";
    // output the index and value of each array element
    var length = theArray.length; // get array's length once before loop
    for ( var i = 0; i < length; ++i )
    {
        content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + "</td></tr>";
    } 
    content += "</tbody></table>";
    output.innerHTML = content; // place the table in the output element

    
} // end function outputArray
window.addEventListener( "load", start, false );


/*for ( var element in theArray )
{
    total += theArray[ element ];
}


var 2Darray = new Array(5);
2Darray(0)= new Array(3);
2Darray(1)= new Array(4);
2Darray(2)= 
2Darray(3)=
2Darray(4)=




*/

