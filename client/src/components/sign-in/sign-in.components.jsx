import React,{useState} from 'react';
import FormInput from '../form-input/form-input.components'; 
import './sign-in.styles.scss';
import CustomButton from  '../../components/custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn =() =>{

const[userCredentials,setCredentials] =useState({email:'',password:''})


const handleSubmit= async event=>{
        event.preventDefault();

const {email,password}= userCredentials;
try{
    await auth.signInWithEmailAndPassword(email,password);
setCredentials({email:'',password:''});
} catch(error){

}


    };

  const  handleChange =event=>{
        const{value,name} =event.target;
        setCredentials({...userCredentials ,[name]:value});
    
};

const {email,password} = userCredentials;
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
<span>Sign in with your email and password</span>
<form onSubmit={handleSubmit}>
    <FormInput 
     name='email'
     type="email" 
     handleChange={handleChange}
     value={email}
     label='email'
     required/>
 

    <FormInput
    name='password'
    type="password" 
    handleChange={handleChange}
    value={password}
    label='password'
     required/>
  
  <div className='buttons'>
  <CustomButton type ='submit'> Sign In</CustomButton>
    <CustomButton onClick ={signInWithGoogle} isGoogle> Sign In With Google</CustomButton>
  </div>

    
</form> 
        </div>
    );
}


export default SignIn;