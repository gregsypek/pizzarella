import Button from "../../ui/Button";
import HeaderTitle from "../../ui/HeaderTitle";
import Card from "../../ui/Card";
import card5 from "../../images/card5_bg.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName } from "./userSlice";
import CardLogo from "../../ui/CardLogo";
// import { useNavigate } from "react-router-dom";

function CreateUser({ bgColor }) {
  const username = useSelector((state) => state.user.firstName);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();


  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName) return;
    dispatch(updateFirstName(firstName));

  }
  return (
    <>
      <div
        className={` ${
          bgColor ? bgColor : ""
        } absolute left-0 right-0 top-0 h-[80px] w-screen `}
      />
      <main className="container mx-auto  mt-40 lg:mb-14 max-h-screen flex-col bg-bg100   p-6  px-6">
        <div className="lg:items-left relative mb-16 flex flex-col items-start   justify-start gap-10  lg:flex-row lg:items-end ">
          <div className=" w-full px-6 self-start lg:w-2/3 ">
            <HeaderTitle
              h1={`Welcome ${username ?? ""}`}
              p={` ${username ? 'We are happy to see you': 'Start by telling us your name' }`}
              padding="24"
            />
            {!username ?
              <form onSubmit={handleSubmit} className="mt-6  ">
                <div className="container gap-x-8 gap-y-6 md:grid-cols-2">
                  <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                    <label
                      htmlFor="firstName"
                      className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                    >
                      First name
                    </label>
                    <div className="mt-6 h-full  w-full md:mt-12 ">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="input"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                    </div>
                  </div>

                  <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                    <label
                      htmlFor="lastName"
                      className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                    >
                      Last name
                    </label>
                    <div className="mt-3  h-full w-full md:mt-12">
                      <input
                        type="text"
                        name="lastName"
                        autoComplete="given-name"
                        id="lastName"
                        className="input"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className="grid h-full grid-cols-1 md:grid-cols-[125px_1fr] md:place-items-center md:gap-5">
                    <label
                      htmlFor="email"
                      className="mt-3 block  justify-self-start  text-lg font-normal leading-6 tracking-normal text-text100 md:my-0"
                    >
                      Email
                    </label>
                    <div className="mt-3  h-full w-full md:mt-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <Button type="orange">Join now</Button>
                </div>
              </form>: <h1 className="text-xl py-12 text-text200"> Check out our latest additions to the menu New flavors waiting just for you! <span className="block py-5">Enjoy a special <strong>discount</strong> on your next pizza order.</span></h1>
            }
          </div>

          <div className="mx-6 hidden h-full w-1/3 justify-center lg:flex">
            <Card
              img={card5}
              title="Become our memeber"
              subtitle="Grab an extra discount on our pizza"
            />
          </div>
          {/* <div className="absolute -bottom-28 -right-14   lg:hidden ">
            <img src={bg} alt="pizzarella logo" />
          </div> */}
          <CardLogo/>
        </div>
      </main>
    </>
  );
}

export default CreateUser;
