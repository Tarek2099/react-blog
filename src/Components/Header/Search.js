import React, { useContext } from 'react'
import { ContextProvider } from '../Context/MyContext';

const Search = () => {
  const { show, setShow } = useContext({
  show: true
  })
  
  const hide = e => {
    setShow(
      !show
    )
  }
  return (
    <div>
      {/* <ContextProvider> */}
      <div className="">
        {!show?<div><input className="searchbox"></input>
        <span className="searchHide" onClick={hide}>X</span> </div> : null

        }
        
        </div>
      {/* </ContextProvider> */}
    </div>
  );
}

export default Search