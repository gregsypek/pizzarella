import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import Button from "./Button";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../utils/navigation";
import Username from "../features/user/UserName";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName } from "../features/user/userSlice";

function Header() {
  const username = useSelector((state) => state.user.firstName);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <header className="container absolute inset-x-0 top-0 z-50 mx-auto overflow-x-hidden ">
      <nav
        className="flex items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex overflow-hidden lg:flex-1">
          <Link to="/" className="-m-1.5 flex items-center  p-1.5">
            <span className="sr-only">Pizzarella</span>
            <img className="h-12 w-auto" src={logo} alt="logo" />
            <span className="mx-3 text-lg ">Pizzarella</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 hover:text-accent200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end">
          <div className="px-3">
          <Username />

          </div>
       
          <Button type="empty" to="/cart">
            Cart
          </Button>
          {username ? (
            <Link
              onClick={() => dispatch(updateFirstName(''))}
              className="mx-4 text-sm font-semibold leading-6 hover:text-accent200"
            >            
              Log out <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link
              to="/register"
              className="mx-4 text-sm font-semibold leading-6 hover:text-accent200"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          {/* <Username /> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        {/* background blur */}
        <div className="z-51 fixed inset-0 h-full  w-full bg-bg200 opacity-80 blur-sm lg:block "></div>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bg100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text100">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pizzarella</span>
              <img className="h-8 w-auto" src={logo} alt="logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-text-200  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-bg200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/register"
                  className="text-text-200 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-bg200"
                >
                  Log in
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="order/new"
                  className="text-text-200 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-bg200"
                >
                  Order
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
