import {useState,useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser=(props)=>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    // const [enteredUsername,setEnteredUsername]=useState('');
    // const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        const enteredUsername=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        if(enteredUsername.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age(non-empty values).',
            });
            return;
        }
        if(+enteredUserAge<1 || enteredUserAge>100){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age.',
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };

    // const usernameChangeHandler=(event)=>{
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler=(event)=>{
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler=()=>{
        setError(null);
    };

    return(
        <Wrapper>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)};
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}
                    // value={enteredUsername}
                    //  onChange={usernameChangeHandler} 
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" ref={ageInputRef}
                    // value={enteredAge}
                    //  onChange={ageChangeHandler} 
                     />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;