import React, { Component } from 'react';

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val: '' 
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){ 
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e)} placeholder='请输入' onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}