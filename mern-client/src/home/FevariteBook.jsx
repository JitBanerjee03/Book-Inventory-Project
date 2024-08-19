import React, { useEffect, useState } from 'react'

const FevariteBook = () => {
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/all-books').then(res=>res.json()).then
  },[])
    return (
    <div>
      Fevarite Book Section
    </div>
  )
}

export default FevariteBook
