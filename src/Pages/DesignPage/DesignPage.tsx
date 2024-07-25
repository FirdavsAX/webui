import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/TestData'

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle : "Total value all a companys stock",
  },
]
const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Design Page</h1>
        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat rerum ducimus cumque nihil consequatur excepturi alias sit repudiandae dignissimos totam id maxime fugiat maiores molestiae dicta sed adipisci dolor.</h2>
        <Table config={tableConfig} data={testIncomeStatementData}/>
    </>

  )
}

export default DesignPage