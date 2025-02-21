import React, { JSX } from 'react'
import Post from '../../components/Post/Post'
function News(): JSX.Element {
    return (
        <div className='my-12'>
            <h1 className='mx-10 text-6xl font-semibold'>Новости</h1>
            <Post content='Благодаря новому интерфейсу пользователю станет удобней взаимодействовать с сайтом. ' imageUrl='https://askusers.ru/upload/iblock/753/gwzeu26zry1v0juxd5sc0f6gl0f4t9hf/3534060.jpg' title='Обновление интерфейса' date='21.02.25' />
        </div>
    )
}

export default News