import React, {Component} from 'react'

import AppHeader from '../app-header'
import PostAddForm from '../post-add-form'
import PostList from '../post-list'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import SearchPanel from '../search-panel'

import './app.css'
import PostListItem from "../post-list-item";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[
                {label:'Going to learn React', important : true , id:1 },
                {label:'GThat is so good', important : false , id:2},
                {label:'I need a break...', important : false , id:3 }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)

        this.maxId = 4

        }
    deleteItem(id){
       this.setState( ({data}) =>{
           const index = data.findIndex( (elem)=> {
               return elem.id === id
           });
           const before = data.slice(0,index);
           const after = data.slice(index + 1);
           const newArr = [...before, ...after];

           return{
               data:newArr
           }
       });
    }
    addItem(body){
        const newItem = {
            label:body,
            important:false,
            id:this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data,newItem]
            return{
                data:newArr
            }
        })
    }
    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <PostStatusFilter/>
                </div>
                <PostList
                    onDeleted={this.deleteItem}
                    posts={this.state.data}

                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
    }

