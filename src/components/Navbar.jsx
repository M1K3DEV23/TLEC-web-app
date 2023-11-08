'use client';
import Logo from './Icons';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <Logo />
      <div className="grow">
        <nav className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <h3>FASE BETA</h3>
          {/* <a href="">Home</a>
          <a href="">About</a>
          <a href="">Home</a>
          <a href="">About</a> */}
        </nav>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Abrir Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="z-[30] absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Cerrar Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="">
                    Home
                  </a>
                  <a className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="">
                    Home
                  </a>
                  <a className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="">
                    Home
                  </a>
                  <a className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="">
                    Home
                  </a>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <h1 className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  Tu biblioteca en la palma de tu mano.
                </h1>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      <div className="hidden sm:block">
        <h1 className=" mr-2 font-bold">TLEC</h1>
      </div>
    </Popover>
  );
};

export default Navbar;
