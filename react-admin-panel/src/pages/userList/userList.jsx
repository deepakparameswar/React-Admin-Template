import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import './userList.css'

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.userName}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    // we cant use multiple components like the bellow so we need to add the elemets inside a div or <>(ract fragment)
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
