import React from 'react';
import './Header.css'; 

export default function InputItem({ value, onChange }){
    return(
        <input type="text" placeholder="Enter task to complete..." className="input-task"  value={value|| ''}  onChange={onChange}
       />
    )

}
 