import { XIcon } from '@heroicons/react/outline';

const BannerCentered = ({ status, className, setBannerView }) => {
    function handleCloseBanner() {
        setBannerView(false);
    }

    return (
        <div className={`relative ${className}`}>
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium">
                        <span className="md:hidden">{status}</span>
                        <span className="hidden md:inline">{status}</span>
                    </p>
                </div>
                <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                    <button
                        onClick={handleCloseBanner}
                        type="button"
                        className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="sr-only">Dismiss</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerCentered;
