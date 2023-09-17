import React, { useEffect } from 'react';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { Link, useForm } from '@inertiajs/react';

export default function Step1() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        ubtebNo: '',
        phone: '',
        occupation: 'employed',//if unemployed then no option
        position: '',//if employed
        organisation: '',//if employed
        businessName: '',//if self
        businessType: '',//if self
        country: '',
        district: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden text-lg sm:rounded-lg">
                <p className="text-2xl font-bold">UBTEB Alumni Registration Form</p>
                <p className="text-gray-500">The Alumni Relations Office is one of the newly established Offices in the new University structure of UBTEB whose primary focus is to create a database for all Alumni of UBTEB to bring them on a single platform as one big family.
                    This, therefore, calls for need to register with us. Kindly Provide your details below.</p>
                <p className="text-2xl mt-4 font-bold">Profile:</p>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <div className="grid grid-cols-3 gap-4">
                        <TextInput
                            name="firstName"
                            value={data.firstName}
                            placeholder="First"
                            className="mt-1"
                            isFocused={true}
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            name="middleName"
                            value={data.middleName}
                            placeholder="Middle"
                            className="mt-1"
                            isFocused={true}
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />

                        <TextInput
                            name="lastName"
                            value={data.lastName}
                            placeholder="Last"
                            className="mt-1"
                            isFocused={true}
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />
                        </div>
                        <InputError message={errors.firstName} className="mt-2" />
                        <InputError message={errors.middleName} className="mt-2" />
                        <InputError message={errors.lastName} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <div className="grid grid-cols-3 gap-x-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <InputLabel htmlFor="phone" value="Phone" />
                            <InputLabel htmlFor="ubtebNo" value="UBTEB No." />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                placeholder="e.g gw@gmail.com"
                                value={data.email}
                                className="mt-1"
                                autoComplete="email"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="e.g 256700000000"
                                value={data.phone}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="ubtebNo"
                                type="text"
                                name="ubtebNo"
                                value={data.ubtebNo}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />
                        </div>

                        <InputError message={errors.email} className="mt-2" />
                        <InputError message={errors.phone} className="mt-2" />
                        <InputError message={errors.ubtebNo} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <div>
                            <InputLabel htmlFor="occupation" value="Occupation" />

                            <select
                                id="occupation"
                                name="occupation"
                                value={data.occupation}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            >
                                <option value="employed">Employed</option>
                                <option value="selfEmployed">Self-Employed</option>
                                <option value="unEmployed">Unemployed</option>
                            </select>
                        </div>

                        <InputError message={errors.occupation} className="mt-2" />
                    </div>

                    {data.occupation==="employed"&&<div className="mt-4">
                        <div className="grid grid-cols-2 gap-x-4">
                            <InputLabel htmlFor="position" value="Position/Job Title" />
                            <InputLabel htmlFor="organisation" value="Organisation/Company/Inst." />

                            <TextInput
                                id="position"
                                type="text"
                                name="position"
                                value={data.position}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="organisation"
                                type="text"
                                name="organisation"
                                value={data.organisation}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />
                        </div>

                        <InputError message={errors.position} className="mt-2" />
                        <InputError message={errors.organisation} className="mt-2" />
                    </div>}

                    {data.occupation==="selfEmployed"&&<div className="mt-4">
                        <div className="grid grid-cols-2 gap-x-4">
                            <InputLabel htmlFor="businessName" value="Name of Business" />
                            <InputLabel htmlFor="businessType" value="Type of Business" />

                            <TextInput
                                id="businessName"
                                type="text"
                                name="businessName"
                                value={data.businessName}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="businessType"
                                type="text"
                                name="businessType"
                                value={data.businessType}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />
                        </div>

                        <InputError message={errors.businessName} className="mt-2" />
                        <InputError message={errors.businessType} className="mt-2" />
                    </div>}

                    <div className="mt-4">
                        <p className="font-bold">Location/Address</p>
                        <div className="grid grid-cols-2 gap-x-4">
                            <InputLabel htmlFor="country" value="Country" />
                            <InputLabel htmlFor="district" value="District" />

                            <TextInput
                                id="country"
                                type="text"
                                name="country"
                                value={data.country}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="district"
                                type="text"
                                name="district"
                                value={data.district}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />
                        </div>

                        <InputError message={errors.country} className="mt-2" />
                        <InputError message={errors.district} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Next
                        </PrimaryButton>
                    </div>
                </form>
            </div>
    );
}
