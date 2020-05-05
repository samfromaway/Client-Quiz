import React, { Component } from 'react';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Checkbox1: false,
      Checkbox2: false,
      Checkbox3: false,
      Checkbox4: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const checked = target.checked ? 'Checked' : 'Not Checked';
    const name = target.name;
    const value = target.value;
    console.log(target.value);

    switch (value) {
      case 'Checkbox1':
        this.setState({ Checkbox1: `${name} is ${checked}` });
        break;
      case 'Checkbox2':
        this.setState({ Checkbox2: `${name} is ${checked}` });
        break;
      case 'Checkbox3':
        this.setState({ Checkbox3: `${name} is ${checked}` });
        break;
      case 'Checkbox4':
        this.setState({ Checkbox3: `${name} is ${checked}` });
        break;
    }
  }

  render() {
    return (
      <div className='quiz-question'>
        <h3 className='quiz-question-title'>{this.props.title}</h3>
        <form className='quiz-form' action=''>
          <div>
            <label className='quiz-element'>
              <img className='quiz-image' alt='Logo' src={this.props.img1} />
              <span>{this.props.desc1}</span>
              <input
                className='checkbox'
                name={this.props.desc1}
                value='Checkbox1'
                type='checkbox'
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label className='quiz-element'>
              <img className='quiz-image' alt='Logo' src={this.props.img2} />
              <span>{this.props.desc2}</span>
              <input
                className='checkbox'
                name={this.props.desc2}
                value='Checkbox2'
                type='checkbox'
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label className='quiz-element'>
              <img className='quiz-image' alt='Logo' src={this.props.img3} />
              <span>{this.props.desc3}</span>
              <input
                className='checkbox'
                name={this.props.desc3}
                value='Checkbox3'
                type='checkbox'
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label className='quiz-element'>
              <img className='quiz-image' alt='Logo' src={this.props.img4} />
              <span>{this.props.desc4}</span>
              <input
                className='checkbox'
                name={this.props.desc4}
                value='Checkbox4'
                type='checkbox'
                onChange={this.handleInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default QuizQuestion;
