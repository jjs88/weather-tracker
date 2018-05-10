import React, { Component } from 'react';
import PinCityFormItem from './PinCityFormItem/PinCityFormItem';
import Button from '../ui/Button/Button';
import { connect } from 'react-redux';
import { addPin } from '../../store/actions/pinned';
import { validation } from './validation';

class PinCityForm extends Component {

  state = {
    zip: null,
    message: null,
    valid: true
  }

  handleInput = (e) => {
    this.setState({zip: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // moved work of validation into its own file, pass PinCityForm context
    const isValid = validation(this);
    isValid ? this.props.addPin(this.state.zip) : null
    e.target.reset();
  }

  errorMsg = () => {
    const { message } = this.state;
    return <div className="Invalid">
      <span className="Error_Warning">&#x26A0;</span>
      <span>{message}</span>
    </div>;
  }

  render() {
    const { valid } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="PinCityForm">
        { !valid ? this.errorMsg() : null }
        <PinCityFormItem type="text" name="zip" handler={this.handleInput}/>
        <Button text="Pin City" type="submit"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.pinned
  }
}

export default connect(mapStateToProps, { addPin })(PinCityForm);