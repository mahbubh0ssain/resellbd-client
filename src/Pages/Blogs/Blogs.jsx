import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Blogs = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-[1440px] rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl">
                  What are the different ways to manage a state in a React
                  application?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                There are four main types of state in React. They are:
                <ul>
                  <li>1. Local state</li>
                  <li>2. Global state</li>
                  <li>3. Server state</li>
                  <li>4. URL state</li>
                </ul>
                There are several ways to manage state in React application.
                Some of them are using
                <strong> Hooks, Context API, Redux,Apollo Link State</strong>.
                In a big application managing state is necessary, because
                without managing state application will be very messy and
                disgusting. Redux is now one of the most useful state management
                process in React.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl">
                  How does prototypical inheritance work?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                The prototypical inheritance is a core concept of
                JavaScript.That is used to add methods and properties in an
                object. Using this an object can inherit properties and methods
                of another object.
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png"
                  alt=""
                />
                In JavaScript every object has a private property which holds a
                link to another object called prototype. This is going on until
                got an object got null, because null has no prototype and that
                will be the last stage of a prototypical chain.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl">
                  What is a unit test? Why should we write unit tests?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                Unit test is a precaution to check whether the written codes are
                working properly.The main objective is to detect any flaws in
                the code before testing. Because it will be difficult to find a
                flaw in the testing stage. For Test Driven Development (TDD)
                write unit test before any implementation. This makes
                implementation easier and shorter. Though most developers write
                unit test after code has been written.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl">React vs. Angular vs. Vue?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                <img
                  className="h-60"
                  src="https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:1450/h:740/q:mauto/f:avif/https://www.codeinwp.com/wp-content/uploads/2019/01/angular-vs-vue-vs-react.jpg"
                  alt=""
                />
                React ,Angular, Vue all are JavaScript library. But there are
                some basic difference between them. The main focus of React is
                on building user experience. React is backed by Meta build in
                2013. Meta uses React extensively in their products (Facebook,
                Instagram, and WhatsApp). Angular is developed by Google in
                2010. It is a typescript based JavaScript framework. Angular
                React libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps. Vue is
                suitable for smaller, less complex apps and is easier to learn
                from scratch compared to React. note that Vue was created by a
                former google employee who worked in google for Angular.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Blogs;
