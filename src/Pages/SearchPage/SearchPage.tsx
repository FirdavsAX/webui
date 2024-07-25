import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../Company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import Search from '../../Components/Search/Search'
interface Props {
    
}

const SearchPage = (props: Props) => {
  const [search,setSearch] = useState<string>("");
  const [portfolioValues,setPortfolioValues] = useState<string[]>([]);
  const [searchResult,setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError,setServerError] = useState<string |null>(null);


  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onSearchSubmit = async (e : SyntheticEvent) =>{
    e.preventDefault();
    const result = await searchCompanies(search);
    if(typeof result === "string"){
      setServerError(result);
    }
    else if(Array.isArray(result.data)){
      setSearchResult(result.data);
    }
    console.log(setServerError);
  }
  const onPortfolioCreate = (e : any) =>{
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues,e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }
  const onPortFolioDelete = (e : any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  }
  return (

    <div className="App">
    <Search onSearchSubmit={onSearchSubmit} search={search} handleChange={handleChange}/>
    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortFolioDelete}/>
    <CardList onPortfolioCreate={onPortfolioCreate} searchResult={searchResult}/>
    {serverError && <h1>{serverError}</h1>}
  </div>
  )
}

export default SearchPage