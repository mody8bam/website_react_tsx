import React from "react"


// List component
function List({description}: { description: string }) {
  return (
    <>
      <div>{description}</div>
      <p>list paragraph</p>
    </>
  );
}

// Define props types for the Description component  you can use an interface or type 
// to describe the component’s props:
type DescriptionParam = {
  text: string
  subtext?: string// Optional subtext property
}

// Description component
function Description({text, subtext}: DescriptionParam) {
  return (
    <> 
      <div>
        <h3>{text}</h3>
        {/* Conditionally render subtext if provided */}
        {subtext && <h4>{subtext}</h4>}
        {/* Render the List component */}
        <List description="description from list" />
      </div>
    </>
  );
}

export default Description;
