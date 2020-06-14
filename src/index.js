import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    
    state = { latitude: null , Error: null };
    
    renderContent() {
        if(this.state.latitude && !this.state.Error) {
            // return <div> lattitude:{this.state.latitude}</div>
            
            //passing state object property as props
            return <SeasonDisplay lat={this.state.latitude}/>
        }

        if(!this.state.latitude && this.state.Error) {
            return <div>Error:{this.state.Error}</div>
        }
        
        // if above 2 condition failed then it is loading 
        // so write some UI code for better user experience (it is loading when data is fetching from API )
        return <Spinner message="Please allow your GPS location" />
    }

    render() {
        return <div className="border-red">{this.renderContent()}</div>
    }

    // call only one time
    componentDidMount(){
        console.log("component mounted");
        window.navigator.geolocation.getCurrentPosition(            
            (position) => this.setState({latitude: position.coords.latitude}),                 
            (err) => this.setState({Error: err.message})
        );                               
    }
    
    // componentDidUpdate(){
    //     console.log(this.componentDidUpdate);
    // }

}


ReactDOM.render(<App/>, document.getElementById('root'));