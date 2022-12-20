/* class component */
import React from "react";
//import of the scss file
import "../scss/MyHeader.scss";

export default class MyHeader extends React.Component<any, any> {
  state:any = {};

  //a component can have a constructor that can receive properties
  constructor(props: any) {
    super(props);
    console.log(props.title);
    this.increment = this.increment.bind(this);
    this.state = { count: 0 , count2:0,count3:0};
  }

  count: number = 0;
  increment (){
    this.setState({count:++this.count})
    // this.state.count++;
    console.log(this.count);
  };
  increment2 = () => {
    this.setState(function(state:any){return{count2:++state.count2}})
    // this.state.count++;
  };
  increment3 = () => {
    this.setState((state:any)=>({count3:++state.count3}))
    // this.state.count++;
  };


//lifecycle hooks
componentDidMount(): void{
    // the component is loaded and displayed
    console.log('component displayed and ready');
}

shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    console.log('component can be updated');
    return true;// if false, no updates
}

componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    console.log('component updated')
}

componentWillUnmount(): void {
    console.log('the component will be destroyed')
}



  //a class component always has to display something with a render method
  // mandatory a return in JSX
  // Careful ! The content on the same line of the return, else use parentheses
  render() {
    return (
      <div>
        <header>
          <img
            src="https://images.credly.com/size/340x340/images/5c27aa9b-a7b4-4695-9c97-6329bf271f27/uploads_2F1549888378916-qcv1o5-78514a35fb8c2a40acfc8974fbbc049d_2Fblob.jpeg"
            alt="myProfile"
          />
          <div style={{padding:'20px'}}>
            <h1> {this.props.title} </h1>
            <h2>{this.props.punchline}</h2>
            <button onClick={this.increment}>{this.state.count}</button>
            <button onClick={this.increment2}>{this.state.count2}</button>
            <button onClick={this.increment3}>{this.state.count3}</button>
          </div>
        </header>
      </div>
    );
  }
}
