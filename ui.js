let resultSection;

//draws the results section
function drawSection( section, projectionResults){
    
    section.innerHTML = `<h2>Results</h2>
    <table>
     <thead>
     <tr>
      <th>Year</th><th>Principal</th>
     </tr>
     </thead>
     <tbody id="resultList">
     </tbody>
    </table>`;
    const resultList = document.getElementById("resultList");

    projectionResults.forEach( (principal, year) => {
        const resultTemplate = `<td>${year}</td><td>${principal}</td>`;
        const result = document.createElement( "tr");
        result.innerHTML = resultTemplate;
        resultList.appendChild( result);
    });
    

}

//remove all childs in passed section, return the section.
function clearSection( section){
    while( section.hasChildNodes() ){
        const toRemove = section.firstChild;
        section.removeChild( toRemove);
    }
    return section;
}

//set action for button
const generateButton = document.getElementById("generateProjectionButton");
generateButton.addEventListener("click", evt => {
    const initialAmount = Number.parseFloat( document.getElementById( "initialAmount").value );
    const years = Number.parseInt( document.getElementById( "years").value );
    const aer = Number.parseFloat( document.getElementById( "aer").value );
    const projectionDetail = computeProjection( aer, years, initialAmount);

    if ( resultSection === undefined){
        const body = document.querySelector("body");
        resultSection = document.createElement( "div");
        resultSection.setAttribute("id", "resultSection");
        body.appendChild( resultSection);
    }else{
        clearSection( resultSection);
    }
    drawSection( resultSection, projectionDetail);
    
});