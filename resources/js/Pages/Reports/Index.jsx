import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {Head} from '@inertiajs/react'
import Editor from "@/Components/Editor/Editor.jsx";

export default function Index({auth, report}) {
    return (
        <Authenticated user={auth.user}>
            <Head title="Records"/>
            <div className="p-0">
                <Editor user={user} report={report}/>
            </div>
        </Authenticated>
    );
}

