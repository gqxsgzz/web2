import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Todoed from './Todoed';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            toDo: localStorage.getItem("todolist")? JSON.parse(localStorage.getItem("todolist")):[],
            finish: 0,
            Count: 0
            
        }
    }

    componentWillMount(){
        this.counting();
    }

    addTodo = (msg)=>{
        var msgjson = {
            title: msg,
            state: false
        }
        var toDo = [...this.state.toDo, msgjson];
        this.setState({ 
            toDo: toDo,
            Count: this.state.Count+1
        },()=>{
            localStorage.setItem("todolist", JSON.stringify(toDo));
        })
    }

    delItem = (a)=>{
        var toDo = [...this.state.toDo];
        
        toDo.splice(a,1);
        this.setState({
            toDo:toDo
        },()=>{
            this.counting();
            localStorage.setItem("todolist", JSON.stringify(toDo));
        });
    }

    changeItem = (a) =>{
        var toDo = [...this.state.toDo];
        toDo[a].state = !toDo[a].state;
        this.setState({
            toDo:toDo
        },()=>{
            this.counting();
            localStorage.setItem("todolist", JSON.stringify(toDo));
        })
    }

    counting = () =>{
        var Count = 0;
        var finish = 0;
        var toDo = this.state.toDo;
        for(var i = 0; i < toDo.length; i++){
            if(!toDo[i].state){
                Count++;
            }else{
                finish++;
            }
        };
        this.setState({
            Count: Count,
            finish: finish
        })
    }

    render() {
        return (
            <div>
                <Todoinput addTodo={this.addTodo}/>
                <Todoing toDo={this.state.toDo} Count={this.state.Count} finish={this.state.finish} delTodo={this.delItem} changeTodo={this.changeItem}/>
                <Todoed toDo={this.state.toDo} delTodo={this.delItem} changeTodo={this.changeItem} />
            </div>
        )
    }
}