import React, { Component } from 'react'
import "./TodoApp.css";
export class TodoApp extends Component {
    state={
        input:"",
        items:[]
    }
    handleChange=event=>{
        this.setState({
            input:event.target.value

        });
        
    };
    storeItems=event=>{
        event.preventDefault();
        const{ input } =this.state;

        this.setState({
            items:[...this.state.items,input],//spreadoperator ..to store coppy of the array
             input:""

            
        });
    };

    deleteItem=key=>{
        const allItems=this.state.items;

        allItems.splice(key,1);//delete
        this.setState({
            items:allItems
        });

    };
    render() {
        const {input,items}=this.state; //destructuring
        console.log(items);
        return (
            <div className="todo-container">
                
                <form className="input-section" onSubmit={this.storeItems}>
                <h1>TodoApp</h1>
                <input type="text" value={input} onChange={this.handleChange} placeholder="Enter Items" />
                </form>
                <ul>
                    {items.map((data,index)=>{
                         return<li key={index}>
                         {data}<i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
                         </li>
                    })}
                    
                    
                </ul>

            </div>
        );
    }
}

export default TodoApp;
