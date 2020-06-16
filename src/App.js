import React from 'react';
import FullBar from './components/FullBar';
import Input from './components/Input';
import { calculateSalaryFrom } from './utils/salary'
import DisabledInput from './components/DisabledInput';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      salary: 1000,
      baseINSS: 1000,
      baseIRPF: 925,
      discountINSS: 75,
      discountIRPF: 0,
      netSalary: 925,
      barOne: 7.5,
      barTwo: 0,
      barThree: 92.5
    }
  }

  roundNumbers = (number) => {
    return Math.round(number * 100) / 100;
  }

  getPercentage = (baseINSS, discountINSS, discountIRPF, netSalary) => {

    let barOne = this.roundNumbers((discountINSS*100)/baseINSS);
    let barTwo = this.roundNumbers((discountIRPF*100)/baseINSS);
    let barThree = this.roundNumbers((netSalary*100)/baseINSS);
    
    if(baseINSS === 0){
      barOne = 0
      barTwo = 0
      barThree = 0;
    }
    console.log(barOne, barTwo, barThree);
    return { barOne, barTwo, barThree };
  }

  handleSalary = (salary) => {
    const taxes = calculateSalaryFrom(Number(salary));
    console.log(taxes);
    const { barOne, barTwo, barThree } = this.getPercentage(
      taxes.baseINSS,
      taxes.discountINSS,
      taxes.discountIRPF,
      taxes.netSalary
    );

    this.setState({ ...taxes, salary, barOne, barTwo, barThree })
    console.log(this.state);
  }

  render() {
    const {
      salary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      barOne,
      barTwo,
      barThree
    } = this.state;

    const disabledValuesNames = [
      {
        value: baseINSS,
        name: 'Base INSS',
        currentColor: '#000',
        percentage: ``
      },
      {
        value: discountINSS,
        name: 'Desconto INSS',
        currentColor: '#e67e22',
        percentage: `(${barOne}%)`
      },
      {
        value: baseIRPF,
        name: 'Base IRPF',
        currentColor: '#000',
        percentage: ``
      },
      {
        value: discountIRPF,
        name: 'Desconto IRPF',
        currentColor: '#c0392b',
        percentage: `(${barTwo}%)`
      },
      {
        value: netSalary,
        name: 'Salário Líquido',
        currentColor: '#16a085',
        percentage: `(${barThree}%)`
      }
    ]
    return (
      <div className={'container'}>
        <h1 className={'center teal-text'}> Salário líquido (CLT-2020) </h1>
        <div className={'row s12'}>
          <Input salary={salary} getSalary={this.handleSalary} />

          {
            disabledValuesNames.map(disabled => {
              return <DisabledInput
                key={disabled.name}
                value={disabled.value}
                name={disabled.name}
                currentColor={disabled.currentColor}
                percentage={disabled.percentage}
              />
            })
          }
        </div>
        <FullBar barOne={barOne} barTwo={barTwo} barThree={barThree} />
      </div>
    );
  }
}
