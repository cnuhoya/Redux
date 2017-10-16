import React from 'react';
import { connect } from 'react-redux';

class Confirm extends React.Component {
    render() {
        return (
            <div>
                <h1>나오는 숫자를 맞춰주세요.</h1>
                <h2>{ this.props.check }</h2>
                <h2>{ this.props.random }</h2>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        random: state.counter.random,
        check: state.counter.okay
    };
}

Confirm = connect(mapStateToProps)(Confirm);

export default Confirm;
