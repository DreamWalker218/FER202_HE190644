import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "react-bootstrap";

function App() {
    const [courses, setCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState("");
    const [semester, setSemester] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://localhost:9000/courses");
                const data = await response.json();

                setCourses(data);
            } catch (error) {
                console.log("Error loading database:", error);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = courses.filter((course) => {
        const matchSearch =
            course.nameEn.toLowerCase().includes(searchCourse.toLowerCase()) ||
            course.nameVi.toLowerCase().includes(searchCourse.toLowerCase()) ||
            course.code.toLowerCase().includes(searchCourse.toLowerCase());

        const matchSemester =
            semester === "" || course.semester === semester;

        return matchSearch && matchSemester;
    });
    return (
        <div>
            <div>Courses Projects Review Title Confirmation Reference</div>

            {/* Filter */}
            <div className="row mb-4 align-items-end">

                <div className="col-md-3">
                    <h5>Welcome back, Lecturer</h5>
                    <h3>My Courses</h3>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search courses..."
                        value={searchCourse}
                        onChange={(e) => setSearchCourse(e.target.value)} />
                </div>

                <div className="col-md-3">
                    <div className="d-flex gap-2">

                        <select
                            className="form-select"
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}>
                            <option value="">All Semesters</option>

                            {[...new Set(
                                filteredCourses.map((course) => course.semester)
                            )].map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>

                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                setSearchCourse("");
                                setSemester("");
                            }}>
                            Refresh
                        </button>
                    </div>
                </div>
            </div>

            {/* Courses */}
            <div className="row">
                {filteredCourses.map((course) => (
                    <div className="col-md-3 mb-3" key={course.id}>
                        <Card className="h-100 d-flex flex-column">

                            <CardHeader>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>{course.badge}</span>
                                    <span>{course.category}</span>
                                </div>
                            </CardHeader>

                            <CardBody>
                                <CardText>
                                    {course.code}
                                </CardText>

                                <CardTitle className="fw-bold">
                                    {course.nameEn}
                                </CardTitle>

                                <CardText>
                                    {course.nameVi}
                                </CardText>
                            </CardBody>

                            <CardFooter className="mt-auto">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>&rarr; Get started</span>
                                    <span>&rarr;</span>
                                </div>
                            </CardFooter>

                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;