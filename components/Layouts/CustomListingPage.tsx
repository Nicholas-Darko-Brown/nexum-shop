import Link from "next/link";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import FoodFilter from "../Forms/FoodFilterSelect";
import { useFetchProducts } from "services/products";

interface Props {
  category: string;
}

const CustomListingPage = ({ category }: Props) => {
  const { data, isLoading } = useFetchProducts();

  return (
    <div className="w-[88%] mx-auto md:w-11/12 md:mx-auto">
      <Breadcrumb />
      <hr />
      <div className="my-5 p-2 grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="hidden md:block">
          <div className="w-full">
            <FoodFilter />
          </div>
        </div>

        <div className="block md:hidden">menu</div>

        {isLoading ? (
          <div className="">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="pb-12 col-span-2 md:col-span-3">
            <p className="text-center py-1">{data?.total} Results</p>

            <div className="grid grid-cols-1 gap-8 h-full sm:grid-cols-2 lg:grid-cols-3">
              {data?.elements.map((product) => (
                <div key={product.id} className="h-full">
                  <Link
                    href={`${category}/[id]`}
                    as={`${category}/${product.id}`}
                  >
                    <div className="bg-color-main-200 h-5/6">
                      <img
                        src={product.cover.media.url}
                        className="object-cover h-full"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <span className="text-color-main-100">
                        {product.stock} in stock
                      </span>
                      <p>{product.name}</p>
                      <span>${product.calculatedPrice.totalPrice}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomListingPage;
