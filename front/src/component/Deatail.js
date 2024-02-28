import React from 'react'
import imges from '../assets/iamge.jpg';

function Deatail() {
  return (
    <>
      <div class="col bg-white" style={{backgroundImage : `url(${imges})`}}>
        <img src="https://cdn0.weddingwire.ca/article-vendor-o/3385/3_2/960/png/top-toronto-wedding-planner-copy_50_3385.jpeg" />
        <div className="container">
        <h3 className='text-center  border col-md-4 buttom-50 '>WADDING PARTY</h3>
        <h3 className='text-center border  buttom-50 w-100'>10/05/2023</h3>
        <h3 className='text-center  border col-md-4 buttom-50 '>Tickets from $52 </h3>
        <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p>
        <br/>
        <br/>
        <p>🕓 Start 20:00-22:00pm</p>
        <p>💒Good morning all of you</p>
        <div className='justify-content-center d-flex'>
        <button className='btn btn-primary text-center border  buttom-50'>Book Event</button></div>
        </div>
      </div>
    </>
  )
}

export default Deatail