import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdateAcademicInformationForm from './Partials/UpdateAcademicInformationForm.jsx';
import { Head } from '@inertiajs/react';

export default function Edit({auth, academicInfo, user}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Academic Information</h2>}
        >
            <Head title="Academic Information" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateAcademicInformationForm
                            academicInfo={academicInfo}
                            chosenUser={user}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
