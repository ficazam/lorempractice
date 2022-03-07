import data from './data';
import React, { useState, useRef } from 'react';

function App() {
  const [cnt, setCnt] = useState(0);
  const [txt, setTxt] = useState([]);
  const amntRef = useRef();


  const submitHandler = e => {
    e.preventDefault();

    let amnt = +amntRef.current.value;

    if(amnt > 8) {    
      amnt = 8;
    }

    setTxt(data.slice(0,amnt));
  }

  const dataMap = txt.map((p, index) => {
    return(
        <p key={index}>{p}</p>
    )
  })


  return (
    <section className='section-center'>
      <h3>Generate cool LOREM IPSUM</h3>
      <form className='lorem-ipsum' onSubmit={submitHandler}>
        <label htmlFor='amount'>
          Paragraphs:
        </label>
        <input type='number' name='amount' id='amount' ref={amntRef}/>
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {dataMap}
      </article>
    </section>
  );
}

export default App;
