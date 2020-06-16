import React, { Component } from 'react'
import formatNumber from '../utils/formatNumber';

export default class DisabledInput extends Component {
    render() {
        const {value, name, currentColor, percentage} = this.props;
        return (
                <div className="input-field col s3 l6">
                    <input readOnly value={`${formatNumber(value)} ${percentage}`} id={`disabled${name}`} type="text" className="validate" style={{color: currentColor}}/>
                    <label htmlFor="disabled">{name}</label>
                </div>
        )
    }
}
