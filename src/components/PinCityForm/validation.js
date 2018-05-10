//helper function to do the validation
//takes in the context of the form 
export const validation = (context) => {
  const regex = /[a-zA-Z]/;
    //# of pins currently
    const length = context.props.locations.length;
    // if contains a letter, than true
    const hasLetter = regex.test(context.state.zip) ? true:false

    if(context.state.zip.length !== 5) {
      context.setState({message: 'length must be 5', valid: false});
      return false;
    }

    if(hasLetter) {
      context.setState({message: 'numbers only for valid zip', valid: false});
      return false;
    }

    if(length === 3) {
      context.setState({message: '3 pins max', valid: false});
      return false;
    }

    //check if PIN is already there
    const samePin = context.props.locations.filter(item => item.zip === context.state.zip);
    if(samePin.length > 0) {
      context.setState({message: 'city already pinned' , valid: false});
      return false;
    }

    context.setState({valid: true});
    return true;
  }
