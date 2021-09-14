import { useRef, useState } from 'react';
import classes from './CheckOut.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChar = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name : enteredName,
      street : enteredStreet,
      postalCode : enteredPostalCode,
      city : enteredPostalCode
    })
  };

  const nameInputClasses = `${classes.control} ${
    formValidity.name ? '' : classes.invalid
  }`;
  const streetInputClasses = `${classes.control} ${
    formValidity.street ? '' : classes.invalid
  }`;
  const postalCodeInputClasses = `${classes.control} ${
    formValidity.postalCode ? '' : classes.invalid
  }`;
  const cityInputClasses = `${classes.control} ${
    formValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p>Please Enter a Valid Name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidity.street && <p>Please Enter a Valid Street</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Please Enter a Valid Postal Code (atleast 5 digit)</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p>Please Enter a Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
