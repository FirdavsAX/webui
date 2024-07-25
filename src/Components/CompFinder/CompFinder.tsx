import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../Company';
import { getCompData } from '../../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker : string;

}

const CompFinder = ({ticker}: Props) => {
    const [companyData,setCompanyData] = useState<CompanyCompData>();
    useEffect(() => {
        const getResult = async() => {
            const result  = await getCompData(ticker);
            setCompanyData(result?.data[0]);
        };
        getResult();
    }, [ticker])
  return (
    <div className='inline-flex round-md shadow-sm m -4'>
        {
            companyData?.peersList.map((ticker) => {
                return <CompFinderItem ticker={ticker}/>
            })
        }
    </div>
 
)
}

export default CompFinder