import React, {useEffect, useState} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {Head, Link, usePage} from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import UserEditModal from "@/Components/UserEditModal.jsx";

function UserView({fetchedUsers}){
    const [users, setUsers] = useState(Object.fromEntries(new Map(fetchedUsers.map((us)=>[us.id, us]))))
    const [showModal, setShowModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(fetchedUsers[0])
    const [respUser, setRespUser] = useState(null)
    const authUser = usePage().props.auth.user;

    useEffect(() => {
        if(respUser!==null){
            setUsers({...users, [respUser.id]:respUser})
        }
    }, [respUser]);

    const tableId = "viewUsersTable"
    $(document).ready(function () {
        $("#" + tableId).DataTable(
            {
                'columnDefs': [
                    {
                        'searchable': false,
                        'targets': [5,6]
                    },
                ],
                "bDestroy": true
            }
        );
    });


    function show(us){
        setCurrentUser(us)
        setShowModal(true)
    }

    return (
        <div>
            <UserEditModal showModal={showModal} setShowModal={setShowModal} currentUser={currentUser} setRespUser={setRespUser}/>
            <table id={tableId} className="cell-border hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Email Verified</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {Object.values(users).map((us)=><tr key={us.id}>
                    <td>{us.firstName+' '+(us.middleName??'')+' '+us.lastName}</td>
                    <td>{us.email}</td>
                    <td>{us.role}</td>
                    <td>{us.deleted_at!==null?"Deactivated":us.role==="provisional"?"Not Approved":"Active"}</td>
                    <td>{us.email_verified_at===null?"No":"Yes"}</td>
                    <td><Link href={authUser.id===us.id?"/profile":"/profile/"+us.id}><u>profile</u></Link></td>
                    <td><Link href={authUser.id===us.id?"/academic":"/academic/"+us.id}><u>academic</u></Link></td>
                    <th>
                        <PrimaryButton onClick={()=>{show(us)}}>
                            EDIT
                        </PrimaryButton>
                    </th>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default function Index({auth, users}) {

    return (
        <Authenticated user={auth.user}>
            <Head title="Users"/>
            <div className="mx-auto p-4 sm:p-6 lg:p-8 bg-white">
                <UserView fetchedUsers={users} />
            </div>
        </Authenticated>
    );
}
