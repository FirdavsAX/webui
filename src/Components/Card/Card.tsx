import React from 'react'
import { JsxAttribute } from 'typescript';

interface Props {
  companyName : string;
  ticker :string;
  price : number;
}

const Card  : React.FC<Props> = ({companyName,ticker,price}: Props) : JSX.Element  => {
  return (
    <div className='card'>
      <img src='' alt='image'></img>
      <div className='details'>
        <h2> {ticker} </h2>
        <p> {price}$ </p>
      </div>
      <p className='infon'>{companyName}</p>
    </div>
  )
}

export default Card