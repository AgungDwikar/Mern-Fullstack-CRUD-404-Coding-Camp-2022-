import React, { useState, useEffect } from "react";
import TabelBuku from "./TabelBuku";
import axios from "axios";
import { Link } from "react-router-dom";

function ManajemenBook() {
    // part data
    const [formMode, setFormMode] = useState("");
    const [books, setBooks] = useState([]);
    const [inputForm, setInputForm] = useState();

    // part event handling
    function showCreateForm() {
        setFormMode("show");
    }
    function showEditForm(book) {
        setInputForm(book);
        setFormMode("edit");
    }

    useEffect(() => {
        retrieveData();
    }, []);

    function retrieveData() {
        axios
            .get("http://localhost:4000/book")
            .then((response) => {
                setBooks(response.data);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    function handleJudul(e) {
        setInputForm({ ...inputForm, judul: e.target.value });
    }
    function handlePengarang(e) {
        setInputForm({ ...inputForm, pengarang: e.target.value });
    }
    function submitForm(event) {
        event.preventDefault();
        axios
            .post("http://localhost:4000/book/add", inputForm)
            .then(() => {
                alert("data berhasil ditambah");
                retrieveData();
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
    return (
        <>
            <div className="ml-[124px] mt-8 ">
                <button
                    onClick={showCreateForm}
                    type="submit"
                    className="ml-0 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                    Tambah Buku
                </button>
            </div>
            {formMode === "show" && (
                <section className="container p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-8">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                        Form Tambah Data Buku
                    </h2>

                    <form onSubmit={submitForm}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    for="judul"
                                >
                                    Judul buku :
                                </label>
                                <input
                                    placeholder="masukan judul buku...."
                                    id="judul"
                                    type="text"
                                    onChange={handleJudul}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    for="pengarang"
                                >
                                    Nama Pengarang :
                                </label>
                                <input
                                    placeholder="masukan nama pengarang...."
                                    id="pengarang"
                                    type="text"
                                    onChange={handlePengarang}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                add book
                            </button>

                        
                        </div>
                    </form>
                </section>
            )}

            {formMode === "edit" && (
                <section className="container p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-8">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                        Form Ubah Data Buku
                    </h2>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    for="judul"
                                >
                                    Judul buku :
                                </label>
                                <input
                                    placeholder="masukan judul buku...."
                                    id="judul"
                                    type="text"
                                    value={inputForm.judul || ""}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    for="pengarang"
                                >
                                    Nama Pengarang :
                                </label>
                                <input
                                    placeholder="masukan nama pengarang...."
                                    id="pengarang"
                                    type="text"
                                    value={inputForm.pengarang || ""}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Update book
                            </button>

                            <button
                                type="submit"
                                className="ml-4 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            )}

            <TabelBuku showEdit={showEditForm} books={books} />
        </>
    );
}

export default ManajemenBook;
