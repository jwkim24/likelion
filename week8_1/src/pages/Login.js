import React, {useState} from 'react'
import styled from "styled-components";
import './Login.css'

const Form_a = styled.form`
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
`;
const Login_Button = styled.button`
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

function Checkbox({ children, disabled, checked, onChange }) {
    return (
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    );
  }

function Login(){
    const [id,SetId] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [service, setService] = React.useState(false);

    const loginFnc = (e) => {
        e.preventDefault();
        //판단
        if(!id){
            setMsg("ID를 입력하세요.")
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

    }


    return(
        <Form_a onSubmit={loginFnc}>
            <h1>Login</h1>
            <Input_a type='email' placeholder='Email' value={id} onChange={(e)=>{SetId(e.target.value)}}></Input_a>
            <Input_a type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></Input_a>
            <Checkbox checked={service} onChange={setService}>아이디 저장하기</Checkbox>
            <Login_Button type='submit'>Login</Login_Button>
        </Form_a>
    )
}
export default Login;