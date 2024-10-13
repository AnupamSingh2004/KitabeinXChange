
import './login.js'
import * as Components from './login.js';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const [signing, toggle] = useState(true);
    const [values, setValues] = useState({
        username: '',
        email:'',
        password:'',
    });
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/auth/register', values)
            if(response.status === 200){
            navigate('/bookdetails');
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="justify-center items-center pt-28 pl-[480px]">
            <Components.Container>
                <Components.SignUpContainer signinIn={signing}>
                    <Components.Form onSubmit={handleSubmit}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' name={"username"} onChange={handleChange} />
                        <Components.Input type='email' placeholder='Email' name={"email"} onChange={handleChange} />
                        <Components.Input type='password' placeholder='Password' name={"password"} onChange={handleChange} />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signing}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button>Sigin In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signing}>
                    <Components.Overlay signinIn={signing}>

                        <Components.LeftOverlayPanel signinIn={signing}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signing}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>

    )
}

export default Login;