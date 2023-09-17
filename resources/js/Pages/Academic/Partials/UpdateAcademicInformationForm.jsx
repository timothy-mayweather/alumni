import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import React from "react";

export default function UpdateAcademicInformation({academicInfo, chosenUser, className = '' }) {
    const currentUser = usePage().props.auth.user;
    const user = chosenUser??currentUser;
    const isCurrentUser = user.id===currentUser.id;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        institutions: academicInfo.institutions,
        faculty: academicInfo.faculty,
        course: academicInfo.course,
        gradYear: academicInfo.gradYear,
        hall: academicInfo.hall,
        responsibilities: academicInfo.responsibilities,
        firstName: academicInfo.firstName??'',//prominent
        middleName: academicInfo.middleName??'',//prominent
        lastName: academicInfo.lastName??'',//prominent
        role: academicInfo.role??'',
        organisation: academicInfo.organisation??'',
        email: academicInfo.email??'',
        phone: academicInfo.phone??''
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('academic.update'), {onSuccess:()=>{$.notify("updated successfully", "success")}});
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Academic Information<span>{!isCurrentUser&& <> for {user.firstName+' '+(user.middleName??'')+' '+user.lastName}</>}</span></h2>

                {isCurrentUser&&<p className="mt-1 text-sm text-gray-600">
                    Update your account's academic information.
                </p>}
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="UBTEB Institution(s) attended" />

                    <TextInput
                        disabled={!isCurrentUser}
                        name="institutions"
                        value={data.institutions}
                        className="mt-1 w-full"
                        onChange={(e) => setData(e.target.name, e.target.value)}
                        required
                    />

                    <InputError message={errors.institutions} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-4 gap-x-4">
                        <InputLabel htmlFor="faculty" value="Faculty/School" />
                        <InputLabel htmlFor="course" value="Course of Study" />
                        <InputLabel htmlFor="gradYear" value="Year of Graduation" />
                        <InputLabel htmlFor="hall" value="Hall of Residence/Attachment" />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="faculty"
                            type="text"
                            name="faculty"
                            value={data.faculty}
                            className="mt-1"
                            autoComplete="faculty"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="course"
                            type="text"
                            name="course"
                            value={data.course}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="gradYear"
                            type="text"
                            name="gradYear"
                            value={data.gradYear}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="hall"
                            type="text"
                            name="hall"
                            value={data.hall}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />
                    </div>

                    <InputError message={errors.faculty} className="mt-2" />
                    <InputError message={errors.course} className="mt-2" />
                    <InputError message={errors.gradYear} className="mt-2" />
                    <InputError message={errors.hall} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div>
                        <InputLabel htmlFor="responsibilities" value="Responsibilities held while a student" />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="responsibilities"
                            type="text"
                            name="responsibilities"
                            value={data.responsibilities}
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm mt-1 block w-full"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                            required
                        />
                    </div>

                    <InputError message={errors.responsibilities} className="mt-2" />
                </div>

                <div className="mt-4">
                    <p className="font-bold">Most prominent Alumni you know</p>
                    <InputLabel htmlFor="name" value="Name" required={false}/>
                    <div className="grid grid-cols-3 gap-4">
                        <TextInput
                            disabled={!isCurrentUser}
                            name="firstName"
                            value={data.firstName}
                            placeholder="First"
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            name="middleName"
                            value={data.middleName}
                            placeholder="Middle"
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            name="lastName"
                            value={data.lastName}
                            placeholder="Last"
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />
                    </div>
                    <InputError message={errors.firstName} className="mt-2" />
                    <InputError message={errors.middleName} className="mt-2" />
                    <InputError message={errors.lastName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-2 gap-x-4">
                        <InputLabel htmlFor="role" value="Role/Position" required={false}/>
                        <InputLabel htmlFor="organisation" value="Organisation/Company/Industry" required={false}/>
                        <TextInput
                            disabled={!isCurrentUser}
                            name="role"
                            value={data.role}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            name="organisation"
                            value={data.organisation}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />
                    </div>
                    <InputError message={errors.role} className="mt-2" />
                    <InputError message={errors.organisation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-2 gap-x-4">
                        <InputLabel htmlFor="email" value="Email" required={false}/>
                        <InputLabel htmlFor="phone" value="Phone" required={false}/>

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
                        />

                        <TextInput
                            disabled={!isCurrentUser}
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="e.g 256700000000"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            value={data.phone}
                            className="mt-1"
                            onChange={(e) => setData(e.target.name, e.target.value)}
                        />
                    </div>
                </div>
                {isCurrentUser&&<div className="flex items-center gap-4">
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
                </div>}
            </form>
        </section>
    );
}
