import './CreateTestPage.css';

import DropFileInput from '../components/drop-file-input/DropFileInput';
import {authHeader} from "../_helpers/auth-header";

function CreateTestPage() {

    let files;

    let user = localStorage.getItem("user");


    const onFileChange = (files) => {
        console.log(files);
        console.log(user);
    }

    const handleSubmit = (e) => {
        console.log(files[0]);
        let data = new FormData();
        data.append("testName", "Hakuna Matata");
        data.append("questionFile", files[0]);
        data.append("studentFile", files[1]);
        console.log(user);
        fetch("http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/GenerateTest", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: data
        }).then(() => console.log("FUCK2"));
    }

    return (
        <div className="box">
            <form className="create-form" onSubmit={handleSubmit}>
                <div className='test-Name'>
                    <h2 >Название теста <br/> </h2>
                    <input  placeholder="Тест 1"   />
                </div>
                <h2 className="header">
                    Files input. Add 2 .docx files <br/>
                    (tests.docx and students.docx)
                </h2>
                <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                />
                <span className="navbar-text">
                    <button onClick={()=>handleSubmit()} type = "submit" className="vvd"> Обработать <span/></button>
                </span>
            </form>
        </div>


    );
}

export default CreateTestPage;
