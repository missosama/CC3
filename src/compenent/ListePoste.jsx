import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './compenent.css'

export default function ListePost() {
    const { id } = useParams()
    const postListe = useSelector(state => state.posts.data)
    const selectedPost=postListe.posts.filter(post=>post.id==id)
    return (
        <div>
            {selectedPost.map(item=>
                <div className='post'>
                    key={item.id}
                    <h1 className='title'>
                        title={item.title}
                    </h1>
                    <h3 className='body'>
                        body={item.body}
                    </h3>
                    <span>Tags</span>
                        tags={item.tags.map(item=><div className='tags'>
                            <span>{item}</span>
                        </div>)}
                </div>
                )}
        </div>
    )}
       