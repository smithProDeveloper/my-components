import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function WithLinkOnRight() {
    return (
        <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
                <div className="shrink-0">
                    <InformationCircleIcon aria-hidden="true" className="size-5 text-blue-400" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                        <a href="#" className="font-medium whitespace-nowrap text-blue-700 hover:text-blue-600">
                            Details
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
