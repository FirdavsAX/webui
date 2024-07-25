import React, { SyntheticEvent } from 'react'

interface Props {
  portfolio : string;
  onPortfolioDelete : (e : SyntheticEvent) => void;
}

const DeletePortfolio = ({portfolio,onPortfolioDelete}: Props) => {
  return (
    <div>
      <form  onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolio} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
  )
}

export default DeletePortfolio