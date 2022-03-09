import React, { useState } from "react";

const columns = [
    { name: "No" },
    { name: "Judul Buku" },
    { name: "Pengarang" },
    { name: "Aksi" },
];
function TabelBuku({ showEdit, books }) {
    

    function editData(book) {
        showEdit(book);
    }
    return (
        <div className ="flex flex-col container mt-12">
            <div className ="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className ="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className ="overflow-hidden">
                        <table className ="min-w-full ">
                            <thead className =" border-b bg-gray-900 text-white rounded-lg ">
                                <tr className="border-t border-gray-200">
                                    {(columns || []).map((col, index) => (
                                        <th
                                            key={index}
                                            className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <span className="lg:pl-2">
                                                {col.name}
                                            </span>
                                        </th>
                                    ))}
                                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index} className ="border-b px-12 py-3  ">
                                        <td className ="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {index + 1}
                                        </td>
                                        <td className ="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {book.judul}
                                        </td>
                                        <td className ="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {book.pengarang}
                                        </td>
                                        <td className ="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => editData(book)}
                                                type="submit"
                                                className ="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="submit"
                                                className ="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ml-4"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabelBuku;
