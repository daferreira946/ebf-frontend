import Head from 'next/head';
import AppLayout2 from '@/components/Layouts/AppLayout2';

const Dashboard2 = () => {
    return (
        <AppLayout2
            header={
                <h2 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout2>
    );
};

export default Dashboard2;
