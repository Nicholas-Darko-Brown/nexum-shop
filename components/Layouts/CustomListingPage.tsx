import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import FoodFilter from "../Forms/FoodFilterSelect";
import { useFetchProducts } from "services/products";
import {
  MdFavoriteBorder,
  MdOutlineZoomOutMap,
  MdFavorite,
  MdClose,
} from "react-icons/md";
import { useState } from "react";
import { IProduct } from "@/types/interfaces/interfaces";
import CustomButton from "../Buttons/CustomButton";
import { RiShoppingBagFill } from "react-icons/ri";
import CustomInputField from "../Forms/CustomInputField";
import { atom, useAtom } from "jotai";
import toast, { Toaster } from "react-hot-toast";

interface Wishlist {
  [key: string]: boolean;
}

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Create an atom to hold the cart items
export const cartAtom = atom<CartItem[]>([]);

const CustomListingPage = () => {
  const { data, isLoading } = useFetchProducts();
  const [wishlist, setWishlist] = useState<Wishlist>({});
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const notify = () => toast.success("Item added to cart");

  const handleWishlistClick = (productId: string) => {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [productId]: !prevWishlist[productId],
    }));
  };

  const handleModalOpen = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setQuantity(newValue >= 1 ? newValue : 1);
  };

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: selectedProduct?.id as string,
      name: selectedProduct?.name as string,
      price: selectedProduct?.calculatedPrice.totalPrice as number,
      image: selectedProduct?.cover.media.url as string,
      quantity: quantity,
    };
    const itemIndex = cartItems.findIndex((item) => item.id === newItem.id);
    if (itemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += newItem.quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleAddItem = () => {
    handleAddToCart();
    notify();
  };

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

            <div className="grid grid-cols-1 w-full gap-8 h-full sm:grid-cols-2 lg:grid-cols-3">
              {data?.elements.map((product) => (
                <div key={product.id} className="h-full relative w-full">
                  {/* <Link
                    href={`${category}/[id]`}
                    as={`${category}/${product.id}`}
                  > */}
                  <div className="bg-color-main-200 w-full h-5/6">
                    <div
                      onClick={() => handleWishlistClick(product.id)}
                      className="flex justify-end pr-5 pt-2"
                    >
                      {wishlist[product.id] ? (
                        <MdFavorite
                          size={25}
                          color="pink"
                          className="cursor-pointer"
                        />
                      ) : (
                        <MdFavoriteBorder
                          size={25}
                          color="gray"
                          className="cursor-pointer"
                        />
                      )}
                    </div>
                    <img
                      src={product.cover.media.url}
                      className="object-cover h-full pb-6"
                      alt=""
                    />
                    {product.stock === 0 ? (
                      <div className="absolute bottom-[55%] flex justify-center items-center py-4 w-full text-lg font-bold bg-[#fefefecc]">
                        <span>OUT OF STOCK</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-2">
                    <span className="text-color-main-100">
                      {product.stock} in stock
                    </span>
                    <p>{product.name}</p>
                    <span>${product.calculatedPrice.totalPrice}</span>
                    <button
                      type="button"
                      className="absolute bottom-24 right-0 p-1 mr-5 mb-2 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-white text-white hover:bg-gray-100 focus:outline-none focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      data-hs-overlay="#hs-vertically-centered-modal"
                      onClick={() => handleModalOpen(product)}
                    >
                      <MdOutlineZoomOutMap size={25} color="black" />
                    </button>

                    <div
                      id="hs-vertically-centered-modal"
                      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                    >
                      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-3xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                        <div className="flex flex-col bg-white shadow-sm rounded-xl">
                          <div className=" border-b">
                            <div className="flex justify-end items-center gap-x-2 px-4">
                              <button
                                type="button"
                                className="hs-dropdown-toggle inline-flex justify-center items-center py-2 gap-2 rounded-md font-medium bg-white align-middle "
                                data-hs-overlay="#hs-vertically-centered-modal"
                                onClick={() => setQuantity(1)}
                              >
                                <MdClose size={25} />
                              </button>
                            </div>
                          </div>
                          <div className="p-4 overflow-y-auto grid space-x-4 grid-cols-1 h-full md:grid-cols-2">
                            <div className="bg-color-main-200">
                              <img
                                src={selectedProduct?.cover.media.url as string}
                                className="w-full h-full object-cover"
                                alt="thumbnail_images"
                              />
                            </div>
                            <div className="flex flex-col h-full w-full relative">
                              <div className="space-y-6">
                                <h1 className="text-lg font-bold">
                                  {selectedProduct?.name}
                                </h1>
                                <p>
                                  {" "}
                                  <span>
                                    Availability:{" "}
                                    {selectedProduct?.stock === 0
                                      ? "Out of stock"
                                      : "In stock"}
                                  </span>{" "}
                                </p>
                                <p className="font-bold">
                                  ${selectedProduct?.calculatedPrice.totalPrice}
                                </p>
                                <p>{selectedProduct?.stock} items left</p>
                                <div className="w-full">
                                  <CustomInputField
                                    type="number"
                                    label="Quantity:"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="border w-1/3 border-black"
                                    min={1}
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-0">
                                <CustomButton
                                  text={
                                    <span className="flex items-center gap-2">
                                      {" "}
                                      <RiShoppingBagFill /> Add to cart{" "}
                                    </span>
                                  }
                                  type="submit"
                                  onClick={handleAddItem}
                                  className="bg-black text-white px-4 rounded py-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default CustomListingPage;
