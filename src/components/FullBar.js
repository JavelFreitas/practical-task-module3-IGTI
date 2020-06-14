import React, { Component } from 'react'
import BarPercentual from './BarPercentual'

export default class FullBar extends Component {
    render() {
        const {barOne, barTwo, barThree} = this.props;
        return (
            <div 
            style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <BarPercentual currentValue={barOne} currentColor={'#e67e22'}/>
                <BarPercentual currentValue={barTwo} currentColor={'#c0392b'}/>
                <BarPercentual currentValue={barThree} currentColor={'#16a085'}/>
            </div>
        )
    }
}
