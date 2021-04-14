import React, { Component } from 'react';
import swal from 'sweetalert';
import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    componentDidMount = () => {
        
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    submitHandler = () => {
        if (!this.validateEmail(this.state.email)) {
            swal("Invalid", "Invalid email, check again", "info");
            return;
        }
        if (this.state.password.length <= 4) {
            swal("Not Secure", "type a strong password", "warning");
            return;
        }
        console.log('clicked');
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((done) => {
            this.props.logHandler(this.state);
        }).catch((e) => {
            swal("", "Check your password", "error");
            console.error(e);
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '120px', width: '500px' ,height:'500px' }}>
            <div style={{marginLeft: '40%',marginTop:'30px', marginBottom:'50px' }}><h1 style={{fontWeight:'bolder'}}>Login</h1></div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1"
                            onChange={this.emailChangeHandler} 
                            aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            onChange={this.passwordChangeHandler}
                            className="form-control" 
                            id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button style={{alignItems:'center' ,
                    marginLeft:'40%'}} type="button" 
                    className="btn btn-primary" 
                    onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;




