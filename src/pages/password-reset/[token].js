import ApplicationLogo from '@/components/ApplicationLogo';
import AuthCard from '@/components/AuthCard';
import AuthSessionStatus from '@/components/AuthSessionStatus';
import AuthValidationErrors from '@/components/AuthValidationErrors';
import Button from '@/components/Button';
import GuestLayout from '@/components/Layouts/GuestLayout';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PasswordReset = () => {
    const router = useRouter();

    const { resetPassword } = useAuth({ middleware: 'guest' });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);

    const submitForm = event => {
        event.preventDefault();

        resetPassword({
            username,
            password,
            password_confirmation,
            setErrors,
            setStatus,
        });
    };

    useEffect(() => {
        setUsername(router.query.email || '');
    }, [router.query.email]);

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="username">Username</Label>

                        <Input
                            id="username"
                            type="text"
                            value={username}
                            className="block mt-1 w-full"
                            onChange={event => setUsername(event.target.value)}
                            required
                            autoFocus
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
                            onChange={event => setPassword(event.target.value)}
                            required
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
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button>Reset Password</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    );
};

export default PasswordReset;
