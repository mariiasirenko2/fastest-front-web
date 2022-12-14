import React, { useState } from "react"
import { Container } from "react-bootstrap";
import {authHeader} from "../_helpers/auth-header";
export  const ProjectCard = ({ testItems }) => {

    const saveAs = (blob, name) => {
        const downloadUrl = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = downloadUrl
        a.download = name
        a.click()
    }

    function fetchVariants(id) {
        let url = "http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/Tests/" + id + "/Documents";
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: authHeader(),
        }).then((e) => e.blob().then(blob => {
            saveAs(blob, "Variants.docx")
        }));
    }

    function fetchBlanks(id) {
        let url = "http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/Tests/" + id + "/Blanks";
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: authHeader(),
        }).then((e) => e.blob().then(blob => {
            saveAs(blob, "Blanks.docx")
        }));
    }

    function fetchResults(id) {
        let url = "http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/Tests/" + id + "/Results";
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: authHeader(),
        }).then((e) => e.blob().then(blob => {
            saveAs(blob, "Results.docx")
        }));
    }

    return (
        <>
            {testItems && testItems.map((testItems) => {
                return (
                    <div className='box'>
                        <div className='text-muted padding-top text-center'>
                            <h3>{testItems.name}</h3>
                        </div>
                        <div className='product' >
                            <div className="d-flex justify-content-between">
                                <button onClick={()=>fetchVariants(testItems.id)} type="button" className="btn btn-outline-primary m-xl-2">
                                    <h3>Download variants</h3>
                                </button>
                                <button onClick={()=>fetchBlanks(testItems.id)} type="button" className="btn btn-outline-primary m-xl-2">
                                    <h3>Download blanks</h3>
                                </button>
                                <button onClick={()=>fetchResults(testItems.id)} type="button" className="btn btn-outline-primary m-xl-2">
                                    <h3>Download results</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

