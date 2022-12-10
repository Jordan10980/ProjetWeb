import { useState } from "react";
import axios from 'axios';
import{useNavigate} from "react-router-dom";

const Register=(props)=>{

    let history = useNavigate(); // Use for Navigate on Previous

    const[data, setData]= useState({
        first_name:"",
        name:"",
        email:"",
        password:"",
        password_confirm:""

    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });

        // pour voir les infos (nom, prenom, email, mdp --> console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            first_name:data.first_name,
            name:data.name,
            email:data.email,
            password:data.password,
            password_confirm:data.password_confirm
        }
        console.log(sendData);

        // axios.post('http://localhost:80/api/process-signup.php',sendData)
        // .then((result)=>{
        //     if(result.data.Status === 'Invalid') {
        //    alert('Invalid User');
        //      }
        // else   { 
        //     //props.history.push('/Dashboard')
        //     //props.history.push('/Dashboard') Redirect
        //     history('/dashboard');
        // }
                
        // })

        fetch( "http://localhost:80/api/process-signup.php", {
            method : "POST",
            body : JSON.stringify(sendData),
          }).then( function(response){
            if(response.status === 200){
                history('/dashboard');
            }else{
                alert('Invalid User');
            }
               
        }).catch(function(error){
            console.error(error);
        }) 
    

    }
    
    return( 
        <div className="main-box">
        <form onSubmit={submitForm} noValidate>
        <div className="row">
            <div className="col-md-12 text-center"><h1>Register</h1></div>
        </div>
            <div className="row">
                <div className="col-de-6">First Name</div>
                <div className="col-de-6">
                    <input type="text" name="first_name" className="form-control" 
                    onChange={handleChange} value={data.first_name}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-de-6">Last Name</div>
                <div className="col-de-6">
                    <input type="text" name="name" className="form-control"
                    onChange={handleChange} value={data.name}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-de-6">Email</div>
                <div className="col-de-6">
                    <input type="email" name="email" className="form-control"
                    onChange={handleChange} value={data.email}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-de-6">Password</div>
                <div className="col-de-6">
                    <input type="password" name="password" className="form-control"
                    onChange={handleChange} value={data.password}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-de-6">Confirm Password</div>
                <div className="col-de-6">
                    <input type="password" name="password_confirm" className="form-control"
                    onChange={handleChange} value={data.password_confirm}
                    />
                </div>
            </div>


            <div className="row">
                
                <div className="col-de-12 text-center">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
            </div>
            </form>

        </div>
    )
}

export default Register;