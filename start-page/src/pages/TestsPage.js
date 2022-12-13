import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TestsBar} from "../components/TestsBar";
import {Tests} from "../components/Tests";
import {useEffect, useState} from "react";


function TestsPage() {


    const [tests, setTests] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllNodes();
    }, []);

    const getAllNodes = () => {
        let url = "http://localhost:8080/fastest/profile/" + JSON.parse(localStorage.getItem('user')).id + "/GetTests";
        fetch(url, {
            method: "GET",
        }).then((e) => e.json())
            .then((data) =>
            {
                setTests(data);
                setLoading(false);
            });
    };


    if (isLoading) {
        return <div className="RandomName">Loading...</div>;
    }


    return (
        <div className="TestsPage">
            <TestsBar />
            <Tests testItems={tests}/>
        </div>
    );

    

}

export default TestsPage;
