import React from 'react'

function Blogdetails(props) {

  console.log(props);
  return (
    <div className="p-6 bg-slate-300 m-20 rounded-md" >
        <h2 className="text-2xl font-bold mb-4 text-center">{props.blog.title}</h2>
        <p>{props.blog.content}</p>
        <img src={props.blog.imageUrl} alt={props.blog.title} className="w-full h-auto mt-2 rounded" />
    </div>
  )
}

export default Blogdetails;
