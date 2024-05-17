import { useGetAllProductsQuery } from "../app/services/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>OOOhNoooooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {data?.products.map(p => {
        return <h1 key={p.id}>{p.title}</h1>;
      })}
    </div>
  )
}

export default AllProducts;