import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import './Home.css'
import Table from './Table';
const Home = () => {
    const [isAdd, setIsAdd]= useState(false)
  
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    
    const onSubmit = data => {
        const name = data.name
        const phone = data.number
        const email = data.email
        const hobbies = data.hobbies
        const totalData ={
            name,
            phone,
            email, 
            hobbies, 
        }
       
       axios.post("http://localhost:5000/tableData",totalData)
       .then(res =>{
         if(res){
            toast("Your are data add successfully finishe ") 
            setIsAdd(!isAdd)

         }else{
            toast.error("Sorry , Your data not success")
         }
         
         
       })
       reset()
    };
    
    return (
        <div className='add-main'>
            <div className="container">
                <div className='add-data'>
                    <div className='d-flex justify-content-end'>
                        <button type="button" className="modal-submit-btn btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add
                        </button>
                    </div>
                    <div className ="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className ="modal-dialog">
                            <div className ="modal-content">
                                <div className ="modal-header">
                                    <h5 className ="modal-title" id="exampleModalLabel">Add Data</h5>
                                    <button type="button" className ="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className ="modal-body">

                                        <div className ="mb-3">
                                            <label for="exampleFormControlInput1" className ="form-label">Full Name</label>
                                            <input className='form-control' type="name" {...register("name", { required: true })} />
                                            <p className='text-danger'>{errors.name?.type === 'required' && "Name is required"}</p>  
                                         </div>                                        
                                        <div className ="mb-3">
                                            <label for="exampleFormControlInput1" className ="form-label">Phone Number</label>
                                            <input className='form-control' type="text" {...register("number", { required: true })} />
                                            <p className='text-danger'>{errors.number?.type === 'required' && "Phone Number is required"}</p>  
                                         </div>
                                         <div className ="mb-3">
                                            <label for="exampleFormControlInput1" className ="form-label">Email Address</label>
                                            <input className='form-control' type="email" {...register("email", { required: true })} />
                                            <p className='text-danger'>{errors.email?.type === 'required' && "Email is required"}</p>  
                                         </div>
                                        <div className ="mb-3">
                                            <label for="exampleFormControlInput1" className ="form-label">Your Hobbies</label>
                                             <textarea className='form-control' type="text" {...register("hobbies", { required: true })} cols="30" rows="4">
                                             </textarea>
                                           
                                            <p className='text-danger'>{errors.hobbies?.type === 'required' && "Hobbies is required"}</p>  
                                         </div>                                        
                                    </div>
                                    <div className ="modal-footer">
                                        <button type="button" className ="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <input type="submit" className ="btn btn-warning px-3 text-white fw-bold"  value="Save Now" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Table
                isAdd={isAdd}
                />
            </div>
            <ToastContainer  />
        </div>
    );
};

export default Home;