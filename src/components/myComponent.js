import React from 'react';

class MyComponent extends React.Component{

	myFunction(){
		console.log('This is a test button');
	}

    render(){	
	return(
		<div className="myClass" id="myId">
			<h1>Hello World</h1>
			<button onClick={this.myFunction()}>My Button</button>
	    </div>
	)
    }
};

export default MyComponent
