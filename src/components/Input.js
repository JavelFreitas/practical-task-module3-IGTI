import React, { Component } from 'react'
import {calculateSalaryFrom} from '../utils/salary'

export default class Input extends Component {
    
    getSalary(salary){
        const salaryInfo = calculateSalaryFrom(salary);
        return salaryInfo;
    }

    render() {
        return (
            <div className="input-field col s6">
                <input placeholder="Salary" id="first_name" type="text" className="validate"/>
                <label htmlFor="first_name">First Name</label>
            </div>
        )
    }
}
