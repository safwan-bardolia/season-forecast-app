import React from 'react';

class Spinner extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            message: props.message , 
            defaultMessage: 'Loading...'    // if we did not pass any message to instance of Spinner component then display the default message
        };                                  // Because we frequently use this spinner component in large project           
    }
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.state.message || this.state.defaultMessage}   {/*If we did not pass any message to spinner then default msg is displayed  */}
                </div>
            </div>
        );
    }
}


export default Spinner;