import React, {useState, useContext} from 'react'
import { useForm } from "react-hook-form";
import Style from './form.module.scss'
import {postData} from '../../functions/post/post'
import { AppContext } from "../../context/ContextProvider"

export default function Form(props){
    // use react-hook-form
    const { register, handleSubmit, errors } = useForm();
    const {loginData, setSubmitted} = useContext(AppContext);

    // insert POST function here after arrow function
    const onSubmit = data => handlePost(data)

    const handlePost = (data) => {
        postData(data, loginData)
        setSubmitted(true)
    }

    // formfields to generate. Comes from props in array with objects
    const formfields = props.formfields
  
    return (
     <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
        {formfields && formfields.map((item, index) => {
            return (
                <div key={index}>
                {item.type != "radio" && item.label ? <label>{item.label} {errors[item.name] && <span className={Style.error}>* </span>}</label> : null}
                {item.type == "radio" && item.label ? <label className={Style.radiolabel}>{item.label} {errors[item.name] && <span className={Style.error}>* </span>}</label> : null}
                {item.type == "input" && <input name={item.name} className={item.name == "comment" ? Style.comment : null} ref={register(
                    item.name == "email" ? {required:true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/} :
                    item.req ? {required:true, pattern: /^[A-Za-z]+$/i} : 
                    item.name == "address" ? {required:true} : 
                    item.name == "area" ? {required: true, pattern: /^[0-9]*$/} : 
                    item.name == "date" ? {required:true} : 
                    item.name == "phone" ? {required: true, pattern: /^[0-9]*$/} : null) 
                    } />}
                {item.type == "radio" && <input className={Style.radio} type="radio" name={item.name} ref={register({required: true})}></input>}
                {item.type == "select" && <select name={item.name} ref={register({required: true})}>
                        <option value="">Vælg</option>
                        {item.selectOptions && item.selectOptions.map((item, index) => {
                            return <option key={index} value={item.value} name={item.name}>{item.name}</option>
                        })}
                    </select>}
                {item.type == "date" && <input name={"date"} type="date" ref={register({required: true})}></input>}
                </div>
        )})
        }
        <div>
        <input className={Style.formbtn} type="submit" value="Tilmeld"/>
        </div>
      </form>
        )
    }