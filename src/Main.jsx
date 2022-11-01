import React, { useState } from 'react'
import './main.css'

const Main = () => {


  let [update, setupdate] = useState()
  let [jk, setjk] = useState([])

  let calling = () => {
    if (!update) {

    }
    else {
      setjk([...jk, update])
      setupdate(" ")
    }
  }

  let reject = (ind) => {
    let newarray = jk.filter((nal,id) => {
      return (
        ind !=id
    )
    })
    setjk(newarray)
  }


  return (
    <div className='container'>
      <h3 className='heading'>TODO APP !!</h3>
      <span> <input type="text" className='field' onChange={(e) => setupdate(e.target.value)} /><button className='newbtn' onClick={calling}>ADD</button></span>
      <button className='btn' onClick={()=>setjk([])} >Clear list</button>

      {

        jk.map((val, ind) => {
          return (

            <div className="main-container">
              <h2>{val}</h2><button className='btn2' onClick={() => reject(ind)} >REMOVE</button>
            </div>

          )
        })
      }


    </div>
  )
}

export default Main