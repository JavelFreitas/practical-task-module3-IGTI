import React, { Component } from 'react'

export default class DisabledInput extends Component {
    render() {
        const {value, name, currentColor, percentage} = this.props;
        return (
                <div className="input-field col s3 l6">
                    <input readOnly value={`${value} ${percentage}`} id={`disabled${name}`} type="text" className="validate" style={{color: currentColor}}/>
                    <label htmlFor="disabled">{name}</label>
                </div>
        )
    }
}
