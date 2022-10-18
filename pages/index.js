import BusinessPartner from '../components/Rows/BusinessPartner';
import CommonBusinessEntities from '../components/Rows/CommonBusinessEntities';
import Customer from '../components/Rows/Customer';
import MarketAndSales from '../components/Rows/MarketAndSales';
import Product from '../components/Rows/Product';
import Resource from '../components/Rows/Resource';
import Service from '../components/Rows/Service';
import { API_TABLE } from '../API_TABLE';
import { transformToValues } from '../helpers/transformToValues';

const Home = () => {
  const data = transformToValues(API_TABLE);

  return (
    <div className="home">
      <MarketAndSales data={data.MarketingSales} />
      <Customer data={data.Customer} />
      <Product data={data.Product} />
      <Service data={data.Service} />
      <Resource data={data.Resource} />
      <BusinessPartner data={data['Business Partner']} />
      <CommonBusinessEntities data={data.Common} />
    </div>
  );
};

export default Home;
