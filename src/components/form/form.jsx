import React from 'react'
import { useForm } from "react-hook-form";
import Style from './form.module.scss'

export default function Form(props){
    // use react-hook-form
    const { register, handleSubmit, errors } = useForm();

    // insert POST function here after arrow function
    const onSubmit = data => console.log(data);

    // formfields to generate. Comes from props in array with objects
    const formfields = props.formfields
  
    return (
     <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
        {formfields && formfields.map((item, index) => {
            return (
                <div key={index}>
                {item.type != "radio" && item.label ? <label>{item.label}</label> : null}
                {item.type == "radio" && item.label ? <label className={Style.radiolabel}>{item.label}</label> : null}
                {item.type == "input" && <input name={item.name} ref={register(item.name == "email" ? {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/} : {pattern: /^[A-Za-z]+$/i, required: true})} />}
                {item.type == "radio" && <input className={Style.radio} type="radio" name={item.name} ref={register({required: true})}></input>}
                {item.type == "select" && <select name={item.name} ref={register({required: true})}>
                        {item.selectOptions && item.selectOptions.map((item, index) => {
                            return <option key={index} value={item.value} name={item.name}>{item.name}</option>
                        })}
                    </select>}
                {errors[item.name] && <span className={Style.error}>* </span>}
                {errors[item.name] && item.name == "name" ? <span> Name is not filled out</span>: null}
                {errors[item.name] && item.name == "email" ? <span> Email is not filled out or contains illegal characters</span>: null}
                {errors[item.name] && item.name == "password" ? <span> Password is not filled out</span>: null}
                {errors[item.name] && item.name == "accept" ? <span> You need to accept</span> : null}
                {errors[item.name] && item.name != "name" && item.name != "email" && item.name != "password" && item.name != "accept" ? <span> Required field</span> : null}
                </div>
        )})
        }
        <input className={Style.formbtn} type="submit"/>
      </form>
        )
    }