import Head from 'next/head';
import AppLayout from '@/components/Layouts/AppLayout';
import Link from 'next/link';
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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <AuthValidationErrors
                                className="mb-4"
                                errors={errors}
                            />
                            <form onSubmit={submitForm}>
                                {/* Username */}
                                <div>
                                    <Label htmlFor="username">Username</Label>

                                    <Input
                                        id="username"
                                        type="text"
                                        value={username}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setUsername(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="mt-4">
                                    <Label htmlFor="email">Email</Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="mt-4">
                                    <Label htmlFor="password">Password</Label>

                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                        autoComplete="new-password"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="mt-4">
                                    <Label htmlFor="password_confirmation">
                                        Confirm Password
                                    </Label>

                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={password_confirmation}
                                        className="block mt-1 w-full"
                                        onChange={event =>
                                            setPasswordConfirmation(
                                                event.target.value,
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Link href="/login">
                                        <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                            Already registered?
                                        </a>
                                    </Link>

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
