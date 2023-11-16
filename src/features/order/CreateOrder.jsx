import SearchOrder from "./SearchOrder";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import card1 from "../../images/card1_bg.png";
import bg from "../../images/order_bg.png";
import Card from "../../ui/Card";
import HeaderTitle from "../../ui/HeaderTitle";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const isValidPhone = (phoneNumber) => {
  const phoneRegex = /^\d{9}$/;
  return phoneRegex.test(phoneNumber);
};

function CreateOrder({ bgColor }) {
  const navigation = useNavigation();
  const isSumbitting = navigation.state === "submitting";
  const username = useSelector(state=>state.user.firstName);

  const formErrors = useActionData();
  console.log("🚀 ~ file: CreateOrder.jsx:50 ~ CreateOrder ~ formErrors:", formErrors)

  const cart = fakeCart;
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-0 top-0 h-[80px] w-screen `}
      />
      <main className="container mx-auto  mt-24 max-h-screen flex-col bg-bg100   p-6  px-6">
        <div className="flex justify-end">
          <SearchOrder />
        </div>
        <div className="lg:items-left relative mb-16 flex flex-col items-start   justify-start gap-10  lg:flex-row lg:items-end ">
          <div className=" w-full px-6  lg:w-2/3">
            <HeaderTitle
              h1={"Get in touch"}
              p={"To order pizza"}
              padding="24"
            />

            <Form method="POST" className="mt-6 ">
              <div className="container gap-x-8 gap-y-6 md:grid-cols-2 ">
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="customer"
                    className="mt-3 block  justify-self-start  text-lg text-text100 font-normal leading-6 tracking-normal  md:my-0"
                  >
                    First name
                  </label>
                  <div className="mt-6 h-full  w-full md:mt-12 ">
                    <input
                      required
                      type="text"
                      name="customer"
                      id="customer"
                      autoComplete="given-name"
                      className="input capitalize"
                  defaultValue={username ? username : ''}
                      
                    />
                  </div>
                </div>
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="phone"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    Phone number
                  </label>
                  <div className="mt-3  h-full w-full md:mt-12">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="input"
                    />
                     
                  </div>
                  
                </div>
                {formErrors?.phone && (
              <p className="md:ml-[150px] p-2 md:p-0 rounded-md  text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
                <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                  <label
                    htmlFor="address"
                    className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                  >
                    Address
                  </label>
                  <div className="mt-3  h-full w-full md:mt-12">
                    <input
                      required
                      type="address"
                      name="address"
                      id="address"
                      autoComplete="email"
                      className="input"
                    />
                  </div>
                </div>

                <div className="mt-6 flex h-6 items-center md:mt-6">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="priority"
                    id="priority"
                    // value={withPriority}
                    // onChange={(e) => {}}
                  />
                  <label
                    htmlFor="priority"
                    className="text-sm   font-normal leading-6 tracking-normal text-text100 md:mt-0"
                  >
                    Want to yo give your order priority?
                  </label>
                </div>
                <div className="mt-3 flex h-6 items-center md:mt-6">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="policy"
                    id="policy"
                    // value={withPriority}
                    // onChange={(e) => {}}
                  />
                  <label
                    htmlFor="policy"
                    className="text-sm   font-normal leading-6 tracking-normal text-text100 md:mt-0"
                  >
                    By selecting this, you agree to our{" "}
                    <Link to="#" className="font-semibold text-primary200 ">
                      privacy&nbsp;policy
                    </Link>
                  </label>
                </div>
              </div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />

              <div className="mt-12">
                <Button disabled={isSumbitting} type="orange">
                  {isSumbitting ? "Placing order..." : "Order now"}
                </Button>
              </div>
            </Form>
          </div>

          <div className="mx-6 hidden h-full w-1/3 justify-center lg:flex">
            <Card
              img={card1}
              title="Crafted Recipe"
              subtitle="20 years of craftmenship"
            />
          </div>
          <div className="absolute -bottom-28 -right-14   lg:hidden ">
            <img src={bg} alt="pizzarella logo" />
          </div>
        </div>
      </main>
    </>
  );
}
//react router when form is submitted pass this function
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number.';

  if (Object.keys(errors).length > 0) return errors;

  
  const newOrder = await createOrder(order);
  //can't use navigation here - only for components
  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateOrder;
