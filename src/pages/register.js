import Head from 'next/head';
import AppLayout from '@/components/Layouts/AppLayout';
import AuthValidationErrors from '@/components/AuthValidationErrors';
import Label from '@/components/Label';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';

const Register = () => {
    const { register } = useAuth({
        middleware: 'auth',
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    const submitForm = event => {
        event.preventDefault();

        register({
            username,
            email,
            password,
            password_confirmation,
            setErrors,
        });
    };

    return (
        <AppLayout
            header={
                <h2 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Personal Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <AuthValidationErrors
                                className="mb-4"
                                errors={errors}
                            />
                            <form onSubmit={submitForm}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <Label
                                            htmlFor="username"
                                            className="block text-sm font-medium text-gray-700">
                                            Username
                                        </Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={username}
                                            onChange={event =>
                                                setUsername(event.target.value)
                                            }
                                            required
                                            autoFocus
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700">
                                            Email
                                        </Label>
                                        <Input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={email}
                                            onChange={event =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700">
                                            Password
                                        </Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="new-password"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={password}
                                            onChange={event =>
                                                setPassword(event.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Label
                                            htmlFor="password_confirmation"
                                            className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            type="password"
                                            name="password_confirmation"
                                            id="password_confirmation"
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={password_confirmation}
                                            onChange={event =>
                                                setPasswordConfirmation(
                                                    event.target.value,
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4">Register</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Register;
