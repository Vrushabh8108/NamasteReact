
//-------------------------giving Attributes to the Element as 2nd Argument
       
      //    const heading = React.createElement("h1", {id:"heading"}, "Hello React Inside App.js");
        //     const  root = ReactDOM.createRoot(document.getElementById("root"));

        //      root.render(heading);

 //-------------------Creating parent and child elements--------------

        const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"sibling1"},"Child tag 1 i.e H1 Tag"),React.createElement("h1",{id:"sibling2"},"Child tag 2 i.e H2 Tag")]));
        const  root1 = ReactDOM.createRoot(document.getElementById("root"));
         root1.render(parent);
     
         console.log(parent);
  
