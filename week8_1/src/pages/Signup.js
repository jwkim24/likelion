import React,{useState} from 'react';
import styled from "styled-components"
import './Signup.css'

const Form_a = styled.form`
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
`;
const Signup_Button = styled.button`
    width: 400px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background-color:rgb(85, 0, 253);
    color : white;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Input_a = styled.input`
    width: 400px;
    height: 50px;
    font-size: 15px;
    border: 0;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(246, 246, 246);
    placeholderTextColor: rgb(183, 183, 183);
    margin-top: 10px;
    margin-bottom: 10px;
`;
function Signup(){
    const [id,SetId] = useState("")
    const [password, setPassword] = useState("")
    const [password_c, setPassword_c] = useState("")

    const signupFnc = (e) => {
        e.preventDefault();
        //판단
        if(!id){
            return alert("ID를 입력하세요.");
        }
        else if(!(id.includes('@') && id.includes('.'))){
            return alert("이메일 형식이 잘못됐습니다.");
        }
        else if(!password){
            return alert("PW를 입력하세요.");
        }
        else if(password.length < 8){
            return alert("비밀번호는 8자리 이상");
        }
        else if(password !== password_c){
            return alert("비밀번호를 다시 확인해주세요");
        }

    }


    return(

        <Form_a onSubmit={signupFnc}>
                <h1>Sign up</h1>
                <Input_a type='email' placeholder='Email' value={id} onChange={(e)=>{SetId(e.target.value)}}></Input_a>
                <Input_a type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></Input_a>
                <Input_a type='password' placeholder='Confirm Password' value={password_c} onChange={(e)=>{setPassword_c(e.target.value)}}></Input_a>
                <Signup_Button type='submit'>Sign up</Signup_Button>
            </Form_a>

    )
}

export default Signup;