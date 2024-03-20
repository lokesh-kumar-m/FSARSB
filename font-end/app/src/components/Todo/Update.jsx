import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { getUserDetails, updateUserData ,addUser } from "./api/todoapiservice";
import {Formik, Form, Field, ErrorMessage} from 'formik'

const Update=()=>{
    const {id}=useParams()
    const authContext=useAuth()
    const navigate=useNavigate()
    const [description,setdescription]=useState('')
    const [date,setDate]=useState('')

    useEffect(
        
        ()=>{ if(id!=-1){
            populatedata()      
        }},[id]
    )

    function populatedata(){
       
            console.log("this came to run")
            getUserDetails(authContext.username,id)
            .then(
                (response)=>{
                    setdescription(response.data.description)
                    setDate(response.data.targetDate)
                }
            )
            .catch(
                (error)=>console.log(error.message)
            )
    }

    function handleback(){
        navigate('/list')
    }

    function onsubmit(values){
        
            const todo={
                id:id,
                username:authContext.username,
                description:values.description,
                targetDate:values.date,
                done:false
            }
        if(id!=-1){
            updateUserData(authContext.username,id,todo)
            .then(
                (response)=>navigate('/list')
            )
            .catch(
                (error)=>console.log(error.message)
            )
            
        }else{
            addUser(authContext.username,todo).then(
                (response)=>navigate('/list')
            ).catch(
                (error)=>console.log(error.message)
            )
        }
    }
    function validation(values){
        let errors={

        }
        if(values.description.length<4){
            errors.description="Enter atleast 4 characters"
        }
        if(values.date===""){
            errors.date="Enter a valid date"
        }
        return errors
    }

    return(
        <div>
            <h2>enter updated details</h2>
            
            <div>
            <div>
                <Formik initialValues={{description,date}} 
                enableReinitialize={true}
                onSubmit={onsubmit}
                validate={validation}
                validateOnBlur={false}
                validateOnChange={false}
                >
                    {
                        (props)=>(
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="p"
                                />
                                <ErrorMessage
                                    name="date"
                                    component="p"
                                />
                                <fieldset>
                                    <label>description</label>
                                    <Field type="text" name="description"></Field>
                                </fieldset>
                                <fieldset>
                                    <label>date</label>
                                    <Field type="date" name="date"></Field>
                                </fieldset>
                                <div>
                                    <button type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>

            </div>
                <button onClick={handleback}>back</button>
        </div>
    );
}

export default Update