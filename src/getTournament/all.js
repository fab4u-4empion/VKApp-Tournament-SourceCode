import React from 'react';
import Upcoming from "./Upcoming";
import RegStart from "./RegistrationStart";
import RegFinish from "./RegistrationFinish";
import Running from "./Running";
import Finish from "./Finish";

class All extends React.Component {
    render() {
        return(
            <div>
                <RegStart mode="none"/>
                <Upcoming mode="none"/>
                <RegFinish mode="none"/>
                <Running mode="none"/>
                <Finish mode="none"/>
            </div>
        )
        
    }
}

export default All;