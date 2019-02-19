import React from 'react';
import { connect } from 'react-redux';
import {
    increaseNumber,
    decreaseNumber
} from '../redux/actions';

class Number extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { number, increaseNumber, decreaseNumber } = this.props;
        console.log(this.props);
        return (
            <div style={{textAlign: 'center'}}>
                <h2>{number}</h2>
                <button onClick={increaseNumber}>+</button>
                <button onClick={decreaseNumber}>-</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    number: state.number
});

const actionToProps = {
    increaseNumber,
    decreaseNumber
}

export default connect(mapStateToProps, actionToProps)(Number);