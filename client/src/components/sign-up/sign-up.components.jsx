import React,{useState} from 'react';

import FormInput from '../form-input/form-input.components';

import CustomButton from '../custom-button/custom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp =() => {
    const [userCredentials,setCredentials] = useState({
        email:'',
        displayName:'',
        password:'',
        confirmPassword:''
    })

const handleSubmit= async event => {
    event.preventDefault();

    const {displayName,email,password,confirmPassword} = userCredentials;
if(password !== confirmPassword ){
alert("passwords do not match");
return;}

try{
const {user} = await auth.createUserWithEmailAndPassword(email,password);
await createUserProfileDocument(user,{displayName});

setCredentials({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
});

} catch(error){
console.error(error);
}


};

const handleChange = event=>{
const {name,value}= event.target;
setCredentials({...userCredentials, [name]:value});
};

const {displayName,email,password,confirmPassword} = userCredentials;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Dispaly Name'
                    required/>

<FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email '
                    required/>

<FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required/>

<FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required/>

<CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
   
            </div>
        );
}


export default SignUp;