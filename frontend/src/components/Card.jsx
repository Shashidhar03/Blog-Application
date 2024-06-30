import React from 'react'

function Card(props) {

  return (
    <div className=" w-72 h-72 p-4 bg-gray-100 rounded shadow-md cursor-pointer" onClick={props.onClick}>
    
      <h2 className="text-xl font-bold">{props.blog.title}</h2>
      <p>{props.blog.content}</p>
      <img src={props.blog.imageUrl} alt={props.blog.title} className="w-full h-auto mt-2 rounded" />
    </div>
  )
}

export default Card;
