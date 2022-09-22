import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as xlsx from "xlsx"


function Profile() {
    const [data, setData] = useState([])
    const [commonElements, setCommonElements] = useState([])
    const params = useParams()

    const onChange = (e) => {
        let file_received = e.target.files[0]
        // console.log(file_received)
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file_received)

            fileReader.onload = (event) => {
                const bufferArray = event.target.result
                const wb = xlsx.read(bufferArray, { type: "buffer" })
                const wsname = wb.SheetNames[0]
                const ws = wb.Sheets[wsname]
                const data = xlsx.utils.sheet_to_json(ws)

                resolve(data)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })

        promise.then((d) => {
            setData(d)
            console.log("data = ", d)
            findIntersection(d)
        })
    }

    const findIntersection = (data) => {
        const array1 = []
        const array2 = []
        const common_elements = []
        data.forEach(pair => {
            if (pair.Array1) array1.push(pair.Array1)
            if (pair.Array2) array2.push(pair.Array2)
        });

        console.log("array1 = ", array1)
        console.log("array2 = ", array2)

        if (array1.length === 0 || array2.length === 0) {
            return common_elements
        }
        array1.forEach(element => {
            if (array2.find(iterator => iterator === element) !== undefined) {
                common_elements.push(element)
            }
        })
        console.log("common elements are: ", common_elements)
        setCommonElements(common_elements)
        return common_elements
    }

    return (
        <div>
            <h1>Welcome {params.email}</h1>
            <h2> Upload the file below</h2>
            <input type="file" name="excel-file" onChange={(e) => onChange(e)} />

            <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">Array1</th>
                        <th scope="col">Array2</th>
                        <th scope='col'>Common Elements</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr >
                            <td>{d.Array1}</td>
                            <td>{d.Array2}</td>
                        </tr>
                    ))}
                    {
                        <tc >
                            <td>{commonElements}</td>
                        </tc>
                    }
                </tbody>
            </table>
        </div>

    );
}

export default Profile;