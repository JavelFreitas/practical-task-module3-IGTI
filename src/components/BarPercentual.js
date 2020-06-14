import React, { Component } from 'react'

export default class BarPercentual extends Component {

    render() {
        const { currentValue, currentColor} = this.props;

        return (
            <div style={{
                marginTop: '4vh',
                width: currentValue + '%',
                height: '4vh',
                backgroundColor: `${currentColor}`
            }}
            >
            </div>
        )
    }
}
