import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        let that = this;
        let wwc = this.props.toDo.map((item,idx)=>{
            if(!item.state){
                return(
                    <p key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{that.props.changeTodo(idx)}}/>
                        {item.title} ---------------------<button onClick={()=>{that.props.delTodo(idx)}}>删除</button>
                    </p>);
            }
            return null;
        });
    
        return(
            <div>
                <div>
                    <h2>正在进行</h2>
                    <ul className="list">{wwc}</ul>
                </div>
            </div>
        )
    }
}