import React, { useState, ChangeEvent, SyntheticEvent, FormEvent } from 'react'

interface Props {
  onClick :(e : SyntheticEvent) => void;
  handleChange : (e:ChangeEvent<HTMLInputElement>) => void;
  search : string| undefined;
}

const Search : React.FC<Props>= ({search,onClick,handleChange} : Props) : JSX.Element => 
{
  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)}></button>
    </div>
  )
}

export default Search