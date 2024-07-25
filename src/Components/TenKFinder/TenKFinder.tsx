import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../Company';
import { getTenkFinder } from '../../api';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker : string;
}

const TenKFinder = ({ticker}: Props) => {
    const [tenKFinder,setTenKFinder] = useState<CompanyTenK[]>();
    useEffect(() => {
        const getData = async() =>{
            const result = await getTenkFinder(ticker);
            setTenKFinder(result?.data);
        };
        getData();
    },[])
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {tenKFinder ? (
        tenKFinder?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default TenKFinder