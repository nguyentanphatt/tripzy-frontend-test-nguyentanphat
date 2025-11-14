"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SearchContent = () => {
    const searchParams = useSearchParams();

    const mode = searchParams.get('mode') || '';
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const dep = searchParams.get('dep') || '';
    const ret = searchParams.get('ret') || '';
    const pax = searchParams.get('pax') || '';

    return (
        <div className='w-[80%] h-auto pb-4 bg-white shadow-[0_8px_32px_hsla(207,57%,29%,0.12)] absolute top-[30%] left-[50%] translate-x-[-50%] rounded-2xl flex flex-col gap-6'>
            <div className="p-8">
                <div className="space-y-3">
                    <div className="flex items-start gap-4">
                        <span className="font-medium text-gray-600 min-w-[120px]">Type:</span>
                        <span className="text-gray-900 capitalize">{mode || 'Not specified'}</span>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-medium text-gray-600 min-w-[120px]">From:</span>
                        <span className="text-gray-900">{decodeURIComponent(from) || 'Not specified'}</span>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-medium text-gray-600 min-w-[120px]">To:</span>
                        <span className="text-gray-900">{decodeURIComponent(to) || 'Not specified'}</span>
                    </div>

                    <div className="flex items-start gap-4">
                        <span className="font-medium text-gray-600 min-w-[120px]">Departure Date:</span>
                        <span className="text-gray-900">{dep || 'Not specified'}</span>
                    </div>

                    {ret && (
                        <div className="flex items-start gap-4">
                            <span className="font-medium text-gray-600 min-w-[120px]">Return Date:</span>
                            <span className="text-gray-900">{ret}</span>
                        </div>
                    )}

                    <div className="flex items-start gap-4">
                        <span className="font-medium text-gray-600 min-w-[120px]">Passengers:</span>
                        <span className="text-gray-900">{pax || 'Not specified'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <Suspense fallback={
            <div className="w-[80%] h-auto pb-4 bg-white shadow-[0_8px_32px_hsla(207,57%,29%,0.12)] absolute top-[30%] left-[50%] translate-x-[-50%] rounded-2xl flex flex-col gap-6'">
                <h1 className="text-3xl font-bold mb-6">Search Results</h1>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        }>
            <SearchContent />
        </Suspense>
    );
};

export default Page;