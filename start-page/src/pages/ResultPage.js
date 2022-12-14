
import {Link} from "react-router-dom";

function ResultPage(Checked, Result) {
    return (
        <div>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="box bg-primary bg-gradient b m-3 pb-2 w-25 justify-content-center text-center ">
                    <img src={Checked} alt="Checked" className="rounded"/>
                    <div className="mt-3 mb-0 ">
                        <h3>Оцінка: {Result}</h3>
                    </div>
                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row w-75 align-items-center justify-content-center">
                    <div className="col text-center">
                        <Link to='/scan'>
                            <button className="btn btn-outline-primary bg-gradient w-25">Назад</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ResultPage;

