import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestsBar } from "../components/TestsBar";
import { Tests } from "../components/Tests";
import { Footer } from "../components/Footer";
import Sdata from "../components/Sdata"
import {authHeader} from "../_helpers/auth-header";


function TestsPage() {
    console.log(authHeader());
    let { testItems } = Sdata;
    fetch("http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id +"/GetTests", {
        mode: "no-cors",
        method: "GET",
        headers: authHeader(),
    }).then((e) => testItems = e);

    return (
        <div className="TestsPage">
            <TestsBar />
            <Tests testItems={testItems}/>
        </div>
    );
}

export default TestsPage;
