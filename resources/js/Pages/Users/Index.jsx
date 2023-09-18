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
    const emailArray = [];

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

    function email(){
        window.location.href = "mailto:"+emailArray.toString()
    }

    function copyEmail(){
        navigator.clipboard.writeText(emailArray.toString())
        $.notify("All emails copied to the clipboard", "info")
    }

    return (
        <div>
            <UserEditModal showModal={showModal} setShowModal={setShowModal} currentUser={currentUser} setRespUser={setRespUser}/>
            <table id={tableId} className="cell-border hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email<i className="fa fa-envelope text-blue-700 ml-2" onClick={email}></i><i className="fa fa-copy text-blue-700 ml-2" onClick={copyEmail}></i></th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Email Verified</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {Object.values(users).map((us)=>{
                    emailArray.push(us.email)
                    return (<tr key={us.id}>
                    <td>{us.firstName+' '+(us.middleName??'')+' '+us.lastName}</td>
                    <td>{us.email}</td>
                    <td>{us.role}</td>
                    <td>{us.deleted_at!==null?"Deactivated":"Active"}</td>
                    <td>{us.email_verified_at===null?"No":"Yes"}</td>
                    <td><Link href={authUser.id===us.id?"/profile":"/profile/"+us.id}><u>profile</u></Link></td>
                    <td><Link href={authUser.id===us.id?"/academic":"/academic/"+us.id} onFinish={()=>{if(window.location.pathname==="/users") $.notify("Academic info not found!")}}><u>academic</u></Link></td>
                    <th>
                        <PrimaryButton onClick={()=>{show(us)}}>
                            EDIT
                        </PrimaryButton>
                    </th>
                </tr>)})}
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
