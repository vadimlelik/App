import React,{Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component{

    render() {
        const {label,onDelete,onTogleeLike, onToglleimportant,important,like} = this.props
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important){
            classNames += ' important'
        }

        if (like){
            classNames += ' like'
        }


        return(

            <div className={classNames}>
            <span
                onClick={onTogleeLike}
                className='app-list-item-label'>
                {label}
            </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-star btn-sm'
                        onClick={onToglleimportant}
                        >
                        <i className='fa fa-star'></i>

                    </button>
                    <button
                        onClick={onDelete}
                        type='button'
                        className='btn-trash btn-sm'>
                        <i className="far fa-trash-alt"></i>

                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}
