import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import React from "react";

export default function UpdateProfileInformation({chosenUser, mustVerifyEmail, status, className = '' }) {
    const currentUser = usePage().props.auth.user;
    const user = chosenUser??currentUser;
    const isCurrentUser = user.id===currentUser.id;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        email: user.email,
        firstName: user.firstName,
        middleName: user.middleName??'',
        lastName: user.lastName,
        ubtebNo: user.ubtebNo,
        phone: user.phone,
        occupation: user.occupation,//if unemployed then no option
        position: user.position??'',//if employed
        organisation: user.organisation??'',//if employed
        businessName: user.businessName??'',//if self
        businessType: user.businessType??'',//if self
        country: user.country,
        district: user.district,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {onSuccess:()=>{$.notify("updated successfully", "success")}});
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information<span>{!isCurrentUser&& <> for {user.firstName+' '+(user.middleName??'')+' '+user.lastName}</>}</span></h2>


                {isCurrentUser&&<p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>}
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <div className="grid grid-cols-3 gap-4">
                        <TextInput
                            disabled={!isCurrentUser}
                            name="firstName"
                            value={data.firstName}
                            placeholder="First"
                            className="mt-1"
                            isFocused={true}
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            name="middleName"
                            value={data.middleName}
                            placeholder="Middle"
                            className="mt-1"
                            isFocused={true}
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />

                        <TextInput
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
                            id="position"
                            type="text"
                            name="position"
                            value={data.position}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
                            id="businessName"
                            type="text"
                            name="businessName"
                            value={data.businessName}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
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
                            disabled={!isCurrentUser}
                            id="country"
                            type="text"
                            name="country"
                            value={data.country}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
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
                {isCurrentUser&&<>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
                </>}
            </form>
        </section>
    );
}
