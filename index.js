var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}
function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than 0: l = "+ l+ ", and b= "+b);

    }else{
        console.log("The area of the restangle is" + rect.area(l,b));
        console.log("The permiter of the restangle is" + rect.perimeter(l,b));

    }

}
solveRect(2,4);
solveRect(0,4);
solveRect(-3,4);