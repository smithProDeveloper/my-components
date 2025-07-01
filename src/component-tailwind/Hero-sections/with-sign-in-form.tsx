import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function WithSignInForm() {
    return (
        <div className="relative overflow-hidden bg-gray-800">
            <div aria-hidden="true" className="hidden sm:absolute sm:inset-0 sm:block">
                <svg
                    fill="none"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    className="absolute right-0 bottom-0 mb-48 translate-x-1/2 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0"
                >
                    <defs>
                        <pattern
                            x={0}
                            y={0}
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} fill="currentColor" width={4} height={4} />
                        </pattern>
                    </defs>
                    <rect fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" width={364} height={384} />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <nav aria-label="Global" className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-auto sm:h-10"
                                    />
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-hidden">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="size-6" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="hidden space-x-10 md:ml-10 md:flex">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                            >
                                Log in
                            </a>
                        </div>
                    </nav>

                    <PopoverPanel
                        focus
                        transition
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <a
                                href="#"
                                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                            >
                                Log in
                            </a>
                        </div>
                    </PopoverPanel>
                </Popover>

                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <div className="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                                        <a
                                            href="#"
                                            className="flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                                        >
                      <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold text-white">
                        We're hiring
                      </span>
                                            <span className="ml-4 text-sm">Visit our careers page</span>
                                            <ChevronRightIcon aria-hidden="true" className="ml-2 size-5 text-gray-500" />
                                        </a>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                        Data to enrich your online business
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                        amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                                    </p>
                                    <p className="mt-8 text-base font-semibold text-white sm:mt-10">Used by</p>
                                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                        <div className="flex flex-wrap items-start justify-between">
                                            <div className="flex justify-center px-1">
                                                <img
                                                    alt="Tuple"
                                                    src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-400.svg"
                                                    className="h-9 sm:h-10"
                                                />
                                            </div>
                                            <div className="flex justify-center px-1">
                                                <img
                                                    alt="Workcation"
                                                    src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-gray-400.svg"
                                                    className="h-9 sm:h-10"
                                                />
                                            </div>
                                            <div className="flex justify-center px-1">
                                                <img
                                                    alt="StaticKit"
                                                    src="https://tailwindcss.com/plus-assets/img/logos/statickit-logo-gray-400.svg"
                                                    className="h-9 sm:h-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                                    <div className="px-6 py-8 sm:px-10">
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Sign in with</p>

                                            <div className="mt-1 grid grid-cols-3 gap-3">
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-xs hover:bg-gray-50"
                                                    >
                                                        <span className="sr-only">Sign in with Facebook</span>
                                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                            <path
                                                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                                clipRule="evenodd"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div>
                                                    <a
                                                        href="#"
                                                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-xs hover:bg-gray-50"
                                                    >
                                                        <span className="sr-only">Sign in with X</span>
                                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div>
                                                    <a
                                                        href="#"
                                                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-xs hover:bg-gray-50"
                                                    >
                                                        <span className="sr-only">Sign in with GitHub</span>
                                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                                                            <path
                                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                                clipRule="evenodd"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative mt-6">
                                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="bg-white px-2 text-gray-500">Or</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <form action="#" method="POST" className="space-y-6">
                                                <div>
                                                    <label htmlFor="name" className="sr-only">
                                                        Full name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        placeholder="Full name"
                                                        autoComplete="name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="mobile-or-email" className="sr-only">
                                                        Mobile number or email
                                                    </label>
                                                    <input
                                                        id="mobile-or-email"
                                                        name="mobile-or-email"
                                                        type="text"
                                                        required
                                                        placeholder="Mobile number or email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="password" className="sr-only">
                                                        Password
                                                    </label>
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        required
                                                        placeholder="Password"
                                                        autoComplete="new-password"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    />
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                                    >
                                                        Create your account
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-gray-200 bg-gray-50 px-6 py-6 sm:px-10">
                                        <p className="text-xs/5 text-gray-500">
                                            By signing up, you agree to our{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Terms
                                            </a>
                                            ,{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Data Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Cookies Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
