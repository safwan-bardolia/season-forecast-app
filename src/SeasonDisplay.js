// webpack place automatically this content of css file in index.html 
import './SeasonDisplay.css';   
import React from 'react';

//season configuration object
const seasonConfig = {
    summer:{
        text:"let's hit the beach",
        iconName:'sun'
    },
    winter:{
        text:"Burr it is cold",
        iconName:'snowflake'
    }
}

function getCurrentSeason(lat,month) {

    if(month>=3 && month<=8) {
        //if lattitude is greater than 0 then it is northen hemispher 
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        //if northen hemispher & month is 0,1,2 or 9,10,11
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season=getCurrentSeason(props.lat, new Date().getMonth());
    // const text=
    //     season==='summer' ? 'lets hit the beach' : 'snow is falling outside the window';

    // const iconName=
    //     season==='summer' ? 'sun' : 'snowflake';

    //pull above 2 things together using season config object
    
    const{text, iconName}=seasonConfig[season];    //if season is summer then seasonConfig return summer object & we destructured that object

    return(
        <div className={`season-display ${season}`}>
                     
                                 {/*massive sun icon (string concatenation)  */}
            <i className={`icon-left massive ${iconName} icon`}></i> {/* advantage of striplets for concatenation*/}
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
                        {/* icon-left::custom css class */}
        
        </div>
    ); 
}

export default SeasonDisplay;