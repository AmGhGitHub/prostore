import ProductsList from "@/components/shared/header/products/products-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <div>
      <ProductsList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
