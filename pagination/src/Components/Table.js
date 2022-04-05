import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "@material-table/core";

const columns = [
    { title: "Name", field: "name" },
    { title: "username", field: "username" },
    { title: "Email ", field: "email", type: "numeric" },
    // {
    //     title: "Email",
    //     field: "email",
    //     lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    // },
]
// const data =[
//     {
//         name: "Mehmet",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },
//     {
//         name: "wedewdw",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },
//     {
//         name: "Mejddsfdahmet",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },
//     {
//         name: "wedwsd",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },
//     {
//         name: "Mehsdwedsfdwsmet",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },{
//         name: "lshjm",
//         surname: "Baran",
//         birthYear: 1987,
//         birthCity: 63,
//     },

// ]
class Table extends Component {
    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    columns={columns}
                    data={query =>
                        new Promise((resolve, reject) => {
                            console.log(query)
                            let url = 'https://jsonplaceholder.typicode.com/users?'
                            if (query.search) {
                                url += `q=${query.search}`
                            }
                            if (query.orderBy) {
                                url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                            }
                            url += `&_page=${query.page + 1}&_limit=${query.pageSize}`
                            // url+=`&_limit=${query.pageSize}`
                            fetch(url)
                                .then(resp => resp.json())
                                .then(resp => {
                                    // const datas = 'https://jsonplaceholder.typicode.com/users'
                                    // const jsons = datas.json()
                                    // console.log(jsons)
                                    // const count = jsons.length
                                    // console.log(count)
                                    resolve({
                                        data: resp,
                                        page: query.page,
                                        totalCount: 10
                                    })
                                })
                        })}
                    title="Server Side Pagination"
                />
            </div>
        );
    }
}

export default Table