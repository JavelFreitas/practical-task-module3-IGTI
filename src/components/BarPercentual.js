import React, { Component } from 'react'

export default class BarPercentual extends Component {

    constructor() {
        super();
        this.state = {
            innerNumber: ''
        }
    }

    handleValueShow(stringNumber) {
        this.setState({
            ...this.state,
            innerNumber: `${stringNumber}`
        });

    }

    render() {
        const { currentValue, currentColor } = this.props;
        const { innerNumber } = this.state;
        return (
            <div
                style={{
                    marginTop: '4vh',
                    width: currentValue + '%',
                    height: '4vh',
                    backgroundColor: `${currentColor}`,
                }}
                onMouseOver={() => { this.handleValueShow(String(currentValue)+'%') }}
                onMouseLeave={() => { this.handleValueShow('') }}
            >
                <h2 style={{
                    backgroundColor: `${currentColor}`,

                }}>
                    {`${innerNumber}`}
                </h2>
            </div>
        )
    }
}
