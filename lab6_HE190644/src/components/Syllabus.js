import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Syllabus() {
    const [subjects, setSubjects] = useState([]);
    const [code, setCode] = useState("");
    const [searchSubjects, setSearchSubjects] = useState("");
    const [searchCode, setSearchCode] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await fetch(
                    "http://localhost:9000/subjects"
                );

                const data = await response.json();

                setSubjects(data);
            } catch (error) {
                console.log("Error loading database:", error);
            }
        };

        fetchSubjects();
    }, []);

    //LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    //SEARCH
    const handleSearch = () => {
        setSearchCode(code);
        setSearchKeyword(searchSubjects);
    };

    //FILTER
    const filteredSubjects = subjects.filter((subject) => {

        const matchCode =
            searchCode === "" ||
            subject.code === searchCode;

        const keyword = searchKeyword.toLowerCase();
        const matchKeyword =
            keyword === "" ||
            subject.code.toLowerCase().includes(keyword) ||
            subject.name.toLowerCase().includes(keyword);

        return matchCode && matchKeyword;
    });

    return (
        <div>

            {/* ================= NAVBAR ================= */}
            <nav className="navbar navbar-dark bg-dark px-4 mb-4">

                <div className="navbar-brand">
                    FPT Education Learning Materials Portal
                </div>

                <div className="d-flex align-items-center text-white">

                    <span className="me-3">
                        Hello, {user?.fullName} ({user?.role})
                    </span>

                    <button
                        className="btn btn-outline-light"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </nav>


            <div className="container">

                <h3 className="mb-4">
                    Syllabus Management
                </h3>


                {/* ================= FILTER ================= */}
                <div className="row mb-4 align-items-end">

                    {/* Search by Code */}
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={code}
                            onChange={(e) =>
                                setCode(e.target.value)
                            }>

                            <option value="">
                                Code
                            </option>

                            {[
                                ...new Set(
                                    subjects.map(
                                        (subject) => subject.code
                                    )
                                )
                            ].map((item) => (

                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Keyword */}
                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter keyword..."
                            value={searchSubjects}
                            onChange={(e) =>
                                setSearchSubjects(e.target.value)
                            }
                        />
                    </div>

                    {/* Search button */}
                    <div className="col-md-1">
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>

                {/*TABLE*/}
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Curriculum</th>
                                <th>Semester</th>
                                <th>Credits</th>
                                <th>Pre-requisites</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredSubjects.map((subject) => (
                                <tr key={subject.id}>
                                    <td>
                                        <button
                                            className="btn p-0"
                                            onClick={() =>
                                                navigate(
                                                    `/subject/${subject.id}`
                                                )
                                            }
                                        >
                                            {subject.code}
                                        </button>
                                    </td>
                                    <td>
                                        {subject.name}
                                    </td>
                                    <td>
                                        {subject.curriculum}
                                    </td>
                                    <td>
                                        {subject.semester}
                                    </td>
                                    <td>
                                        {subject.credits}
                                    </td>
                                    <td>
                                        {subject.preRequisites.length > 0
                                            ? subject.preRequisites.join(", ")
                                            : "None"}
                                    </td>
                                    <td>
                                        {subject.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {filteredSubjects.length === 0 && (
                    <div className="alert alert-warning">
                        No subjects found.
                    </div>

                )}

            </div>

        </div>
    );
}

export default Syllabus;