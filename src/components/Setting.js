import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            init_num: '0'
        }


        this.onChangeNum = this.onChangeNum.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" value={ this.state.init_num } onChange={this.onChangeNum}></input>
            </div>
        );
    }

    onChangeNum(e) {

        if(isNaN(e.target.value))
            return;

        this.setState({ init_num: e.target.value });


        this.props.onUpdateNum(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateNum: (value) => dispatch(setDiff(value))
    };
}

Setting = connect(undefined, mapDispatchToProps)(Setting);

export default Setting;
