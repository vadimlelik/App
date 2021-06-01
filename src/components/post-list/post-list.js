import React from 'react'
import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({posts ,onDeleted, onToglleimportant,onTogleeLike}) => {
    const elements = posts.map((item) =>{
        const {id, ...itemProps} = item
        return(
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}
                              onDelete={ ()=> onDeleted(id)}
                              onTogleeLike = { ()=> onTogleeLike(id)}
                              onToglleimportant = {()=> onToglleimportant(id)}
                />
            </li>
        )
    });
    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}
export default PostList