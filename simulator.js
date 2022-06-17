//Return an array with results per year
function computeProjection( aer, years, initialAmount){
    const compoundingIntervalInMonths = 12;
    const compoundsPerYear = 12 / compoundingIntervalInMonths; 
    const totalMonths = 12 * years;
    const compoundingFactor = Math.pow( 1 + aer / compoundsPerYear, compoundsPerYear);
    let principalAmount = initialAmount;
    let projection = [];
     
    for( let month=0; month <= totalMonths; month++){
        if( month > 0 && month % compoundingIntervalInMonths === 0){
            principalAmount *= compoundingFactor;
        }

        if(  month % 12 === 0){
            projection.push( principalAmount.toFixed(2) );
        }
    }
    return projection;

}