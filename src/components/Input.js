import React, { Component } from 'react'

export default class Input extends Component {
    
    constructor(props){
        super(props);
    }

    handleValueInput(event){
        const {value} = event.target;
        this.props.getSalary(value);
    }

    render() {
        const {salary} = this.props;
        return (
            <div className="input-field col s12">
                <input value={salary} onChange={(event) => this.handleValueInput(event)} placeholder="Salary" id="salary" type="text" className="validate"/>
                <label htmlFor="salary">Salary</label>
            </div>
        )
    }
}
