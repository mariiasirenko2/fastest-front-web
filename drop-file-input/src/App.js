import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            
           <div className='test-Name'> 
           <h2 >Название теста <br></br> </h2>
                <input  placeholder="Тест 1"   />
            </div>
               
            <h2 className="header">
                Files input. Add 2 .docx files <br></br>
            (tests.docx and students.docx)
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
             <span className="navbar-text">
              
                <button className="vvd"> Обработать <span></span></button>
            </span>
        </div>


    );
}

export default App;
