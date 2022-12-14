import './CreateTestPage.css';

import DropFileInput from '../components/drop-file-input/DropFileInput';
import {authHeader} from "../_helpers/auth-header";
import ResultPage from "./ResultPage";

function ScanPhotoPage() {

    let filesList;

    let user = localStorage.getItem("user");


    const onFileChange = (files) => {
        filesList = files;
        console.log(files);
        console.log(user);
    }

    const handleSubmit = (e) => {
        let data = new FormData();
        data.append('questionFile', filesList[0]);
        console.log(user);
        fetch("http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/GenerateTest", {
            headers: authHeader(),
            method: "POST",
            body: data
        }).then((e) => e.blob().then(blob => {
           ResultPage(blob);
        }));
    }

    return (
            <div className="input">
                <div className="box">
                    <form className="create-form">

                        <h2 className="header">
                            Files input. Add 1 photo <br/>
                        </h2>
                        <DropFileInput
                            onFileChange={(files) => onFileChange(files)}
                        />
                        <span className="navbar-text">
                            <button onClick={()=>handleSubmit()} type = "button" className="vvd"> Обработать <span/></button>
                        </span>
                    </form>
                </div>
            </div>
    );
}

export default ScanPhotoPage;
