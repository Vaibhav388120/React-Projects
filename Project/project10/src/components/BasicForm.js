import useInput from "../hooks/use-input";

const isNotEmpty=(value)=>value.trim()!='';
const isEmail=(value)=>value.includes('@');

const BasicForm=(props)=>{
    const{
        value:firstNameValue,
        isValid:firstNameIsValid,
        hasError:firstNameHasError,
        valueChangeHandler:firstNameChangeHandler,
        inputBlurHandler:firstNameBlurHandler,
        reset:resetFirstName,
    }=useInput(isNotEmpty);
    const{
        value:lastNameValue,
        isValid:lastNameIsValid,
        hasError:lastNameHasError,
        valueChangeHandler:lastNameChangeHandler,
        inputBlurHandler:lastNameBlurHandler,
        reset:resetlastName,
    }=useInput(isNotEmpty);

    const{
        value:emailValue,
        isValid:emailIsValid,
        hasError:emailHasError,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler:emailBlurHandler,
        reset:resetEmail,
    }=useInput(isEmail);

    let formIsValid=false;

    if(firstNameIsValid && lastNameIsValid && emailIsValid){
        formIsValid=true;
    }

    const submitHandler=event=>{
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        resetFirstName();
        resetlastName();
        resetEmail();
    };

    const firstNameClasses=firstNameHasError?'form-control invalid': 'form-control';
    const lastNameClasses=lastNameHasError?'form-control invalid': 'form-control';
    const emailClasses=emailHasError?'form-control invalid': 'form-control';

    return(
        <form onSumit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input type="text"
                      id='name'
                      onChange={firstNameChangeHandler}
                      onBlur={firstNameBlurHandler}
                      value={firstNameValue}
                />
                {firstNameHasError && (
                    <p className="error-text">Please enter a first name.</p>
                )} 
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input type="text"
                      id='name'
                      onChange={lastNameChangeHandler}
                      onBlur={lastNameBlurHandler}
                      value={lastNameValue}
                />
                {lastNameHasError && (
                    <p className="error-text">Please enter a last name.</p>
                )} 
                </div>
            </div>
            <div className={emailClasses}>
                    <label htmlFor="name">E-mail Address</label>
                    <input type="text"
                      id='name'
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      value={emailValue}
                />
                {emailHasError && (
                    <p className="error-text">Please enter a valid email address.</p>
                )} 
                </div>
                <div className='form-actions'>
                    <button disabled={!formIsValid}>Submit</button>
                </div>
        </form>
    );
};

export default BasicForm;