import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function SimpleCentered2() {
    return (
        <div className="relative overflow-hidden bg-gray-50">
            <div aria-hidden="true" className="hidden sm:absolute sm:inset-y-0 sm:block sm:size-full">
                <div className="relative mx-auto h-full max-w-7xl">
                    <svg
                        fill="none"
                        width={404}
                        height={784}
                        viewBox="0 0 404 784"
                        className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
                    >
                        <defs>
                            <pattern
                                x={0}
                                y={0}
                                id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa"
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                            </pattern>
                        </defs>
                        <rect fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)" width={404} height={784} />
                    </svg>
                    <svg
                        fill="none"
                        width={404}
                        height={784}
                        viewBox="0 0 404 784"
                        className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
                    >
                        <defs>
                            <pattern
                                x={0}
                                y={0}
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                            </pattern>
                        </defs>
                        <rect fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" width={404} height={784} />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <nav aria-label="Global" className="relative flex items-center justify-between sm:h-10 md:justify-center">
                            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                                <div className="flex w-full items-center justify-between md:w-auto">
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            alt=""
                                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                            className="h-8 w-auto sm:h-10"
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            <Bars3Icon aria-hidden="true" className="size-6" />
                                        </PopoverButton>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-10">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                      href="#"
                      className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </span>
                            </div>
                        </nav>
                    </div>

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
                                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3">
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

                <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Data to enrich your</span>{' '}
                            <span className="block text-indigo-600 xl:inline">online business</span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow-sm">
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
                                >
                                    Live demo
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
