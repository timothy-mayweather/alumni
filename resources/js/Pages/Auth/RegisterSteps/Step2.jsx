import React from 'react';
import InputError from '@/Components/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { useForm } from '@inertiajs/react';

export default function Step2() {
    const { data, setData, post, processing, errors} = useForm({
        institutions: '',
        faculty: '',
        course: '',
        gradYear: '',
        hall: '',
        responsibilities:'',
        firstName: '',//prominent
        middleName: '',//prominent
        lastName: '',//prominent
        role: '',
        organisation: '',
        email: '',
        phone: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('academic.store'));
    };

    return (
        <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden text-lg sm:rounded-lg">
                <p className="text-2xl font-bold">UBTEB Information</p>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="UBTEB Institution(s) attended" />

                        <TextInput
                            name="institutions"
                            value={data.institutions}
                            className="mt-1 w-full"
                            isFocused={true}
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
                                id="course"
                                type="text"
                                name="course"
                                value={data.course}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
                                id="gradYear"
                                type="text"
                                name="gradYear"
                                value={data.gradYear}
                                className="mt-1"
                                onChange={(e) => setData(e.target.name, e.target.value)}
                                required
                            />

                            <TextInput
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
                                name="firstName"
                                value={data.firstName}
                                placeholder="First"
                                className="mt-1"
                                isFocused={true}
                                onChange={(e) => setData(e.target.name, e.target.value)}
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
                                name="role"
                                value={data.role}
                                className="mt-1"
                                isFocused={true}
                                onChange={(e) => setData(e.target.name, e.target.value)}
                            />

                            <TextInput
                                name="organisation"
                                value={data.organisation}
                                className="mt-1"
                                isFocused={true}
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

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
    );
}
