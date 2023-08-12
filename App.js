
    /* Javascript */
    //    let root = document.getElementById("root"); 
    //    root.innerHTML = "";
    //   let cretEle = document.createElement("h1");
    //   cretEle.innerHTML = "Welcome to Reactjs";
     // root.append(cretEle)

     /* jQuery */

     let ele = $("<h1>").text("welcome to javascript");
     //$("#root").html(ele);
/*
     const heading = React.createElement('h1',{id:'parent', className:'hello'}, "Welcome to Reactjs");
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(heading);

     */
     const heading = React.createElement('h1',
                              {id:'parent', className:'hello'},[
                                React.createElement('div',
                                        {id:'child', className:'child'}, "Welcome to child 1", 
                                        
                                ),
                                React.createElement('div',
                                {id:'child1', className:'child1'}, "Welcome to child 2", 
                                
                        )

                                
                              ]
                              
                              
                              
                              );
                              
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(heading);



