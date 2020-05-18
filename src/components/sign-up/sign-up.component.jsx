import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    
    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUpStart({displayName, email, password});
    }
    handleChange = async (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not already have an account</h1>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' />
        <CustomButton type='submit'  >{' '}SIGN UP{' '}</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);