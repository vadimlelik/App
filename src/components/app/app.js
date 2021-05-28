import React from 'react'

import AppHeader from '../app-header'
import PostAddForm from '../post-add-form'
import PostList from '../post-list'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import SearchPanel from '../search-panel'

import './app.css'
import PostListItem from "../post-list-item";


const App = () => {
    const data = [
        {label:'Going to learn React', important : true , id:'qwe' },
        {label:'GThat is so good', important : false , id:'asd' },
        {label:'I need a break...', important : false , id:'zxc' }
    ];
    return (
        <div className='app'>
            <AppHeader />
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App