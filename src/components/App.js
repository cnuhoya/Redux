import React from 'react';
import Confirm from './Confirm';
import Buttons from './Buttons';
import Setting from './Setting';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Confirm/>
                <Setting/>
                <Buttons/>
            </div>
        );
    }

}

export default App;
