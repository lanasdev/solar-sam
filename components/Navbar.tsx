import Link from "next/link";
import Image from "next/future/image";
// import Logo from "../components/Logo";
import { CallToActionNav } from "./CallToAction";
import cn from "classnames";
//import Logo from "public/img/Logo.png";
import { List, X } from "phosphor-react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { withRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Fachgebiete", href: "/fachgebiete", current: false },
  { name: "Projekte", href: "/projekte", current: false },
  { name: "Über uns", href: "/ueber", current: false },
];

const Logo = () => {
  return (
      <h1 className="text-xl font-bold">SolarSam</h1>
  );
};


const Navbar = ({ router }) => {
  let path = router.pathname;

  return (
    <Disclosure as="nav" className="text-black">
      {({ open }) => (
        <>
          <div className="mx-auto py-2 px-2 sm:px-6 lg:px-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <List className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex flex-shrink-0 items-center">
                    {/* <Image
                      className="block h-10 w-auto lg:hidden"
                      src={Logo}
                      alt="Solar Sam"
                    />
                    <Image
                      className="hidden h-10 w-auto lg:block"
                      src={Logo}
                      alt="Solar Sam"
                    /> */}
                    <div className="block h-10 w-auto lg:hidden">
                    <h1 className="text-xl font-bold">SolarSam</h1>
                    </div>
                    <div className="hidden h-10 w-auto lg:block">
                    <h1 className="text-xl font-bold">SolarSam</h1>
                    </div>
                  </a>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.href == path
                            ? "decoration-yellow underline decoration-2 underline-offset-2 hover:bg-black/10"
                            : "hover:decoration-yellow decoration-2 underline-offset-2 hover:bg-black/10 hover:underline",
                          "rounded-lg px-[20px] py-[10px] font-medium text-black"
                        )}
                        aria-current={item.href == path ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CallToActionNav />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.href == path
                      ? "bg-black text-white "
                      : "hover:text-white",
                    "hover:bg-yellow block rounded-md px-3 py-2 text-base font-medium transition-all duration-75"
                  )}
                  aria-current={item.href == path ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default withRouter(Navbar);
