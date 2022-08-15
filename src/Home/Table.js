import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Table = ({ isAdd }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:5000/tableDataShow')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setIsLoading(false)
            })
    }, [isAdd])

    if (isLoading) {
        return <h1>Loading Now ......</h1>
    }
    return (
        <div className='my-5 table-responsive'>

            <table className ="table text-center">
                <thead>
                    <tr>
                    <th scope="col">Check Box</th>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Hobbies</th>
                        <th scope="col">Update</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data, index) =>
                        <tr key={data._id}>
                            <td>  <input type="checkbox" ></input></td>
                            <th scope="row">{index + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.hobbies}</td>
                            <td><button className='btn btn-primary'>Update</button></td>
                           
                        </tr>
                        )
                    }

                   

                </tbody>
            </table>
        </div>
    );
};

export default Table;