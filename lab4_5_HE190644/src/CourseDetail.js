import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(
                    `http://localhost:9000/courses/${id}`
                );

                const data = await response.json();

                setCourse(data);

                if (data.classes && data.classes.length > 0) {
                    const activeClass =
                        data.classes.find(
                            (item) => item.status === "active"
                        ) || data.classes[0];

                    setSelectedClass(activeClass);

                    if (activeClass.slots && activeClass.slots.length > 0) {
                        setSelectedSlot(activeClass.slots[0]);
                    }
                }

            } catch (error) {
                console.log("Error loading course:", error);
            }
        };

        fetchCourse();
    }, [id]);

    if (!course) {
        return <div className="container mt-4">Loading...</div>;
    }

    const handleClassClick = (item) => {
        setSelectedClass(item);

        if (item.slots && item.slots.length > 0) {
            setSelectedSlot(item.slots[0]);
        } else {
            setSelectedSlot(null);
        }
    };

    return (
        <div className="container-fluid">

            {/* Breadcrumb */}
            <div className="mt-3 mb-2">
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}>
                    My Courses
                </span>

                <span className="mx-2">&gt;</span>

                <span>
                    {course.nameEn}_{course.nameVi}
                </span>
            </div>

            {/* Course title */}
            <div className="d-flex justify-content-between align-items-center mb-2">

                <div>
                    <h2 className="fw-bold mb-1">
                        {course.nameEn}_{course.nameVi}
                    </h2>

                    <div>
                        <span className="fw-bold">
                            {course.code}
                        </span>

                        <span className="text-muted">
                            {" "}·{" "}
                            {selectedClass?.name}
                        </span>
                    </div>
                </div>

            </div>

            {/* Navigation buttons */}
            <div className="bg-light border-top border-bottom p-2 mb-3">  
                <button>Back

                </button>
                <button>Delete question

                </button>
                <button>Close

                </button>
            </div>

            {/* Main content */}
            <div className="row">

                {/* Classes */}
                <div className="col-md-3">
                <div className="border-end">

                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="mb-0">Classes</h5>

                        <span className="text-muted">
                            {course.classes?.length || 0} class
                            {course.classes?.length !== 1 ? "es" : ""}
                        </span>
                    </div>

                    {course.classes?.map((item) => (
                        <div
                            key={item.classId}
                            className={`border rounded p-3 mb-2 ${selectedClass?.classId === item.classId
                                    ? "bg-light border-primary"
                                    : ""
                                }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClassClick(item)}
                        >
                            <div>
                                <span
                                    className={`me-2 ${item.status === "active"
                                            ? "text-success"
                                            : "text-secondary"}`}>
                                    &rarr;
                                </span>

                                {item.name}
                            </div>
                        </div>
                    ))}

                </div>

                {/* Slots */}
                <div className="border-end">

                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="mb-0">Slots</h5>

                        <span className="text-muted">
                            {selectedClass?.slots?.length || 0} sessions
                        </span>
                    </div>

                    <div
                        style={{
                            maxHeight: "550px",
                            overflowY: "auto"
                        }}
                    >
                        {selectedClass?.slots?.map((slot) => (
                            <div
                                key={slot.slotNumber}
                                className={`d-flex align-items-center gap-2 border rounded p-2 mb-2 ${selectedSlot?.slotNumber === slot.slotNumber
                                        ? "bg-light"
                                        : ""
                                    }`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedSlot(slot)}
                            >

                                <div
                                    className={`rounded p-2 ${selectedSlot?.slotNumber === slot.slotNumber
                                            ? "bg-primary text-white"
                                            : "bg-light"
                                        }`}
                                >
                                    {slot.slotNumber}
                                </div>

                                <div>
                                    <div className="fw-bold">
                                        {slot.date}
                                    </div>

                                    <div className="text-muted">
                                        {slot.time}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
                </div>

                {/* Class sessions */}
                <div className="col-md-8">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h3 className="fw-bold mb-1">
                                Class sessions
                            </h3>

                            <div className="text-muted">
                                {selectedClass?.slots?.length || 0} sessions
                            </div>
                        </div>

                    </div>

                    <hr />

                    {selectedSlot ? (
                        <div className="border rounded-4">

                            <div className="p-4">

                                <div className="d-flex gap-3">

                                    <div className="bg-primary-subtle text-primary rounded p-3">
                                        <strong>
                                            {selectedSlot.slotNumber}
                                        </strong>
                                    </div>

                                    <div>

                                        <h5 className="fw-bold">
                                            {selectedSlot.title}
                                        </h5>

                                        <div className="text-muted">
                                            {selectedSlot.time} {selectedSlot.date}
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="border-top p-4">

                                {selectedSlot.content ? (
                                    <p className="mb-0">
                                        {selectedSlot.content}
                                    </p>
                                ) : (
                                    <>
                                        {selectedSlot.questions &&
                                            selectedSlot.questions.length > 0 && (
                                                <div>
                                                    <strong>Questions</strong>

                                                    <ul>
                                                        {selectedSlot.questions.map(
                                                            (question, index) => (
                                                                <li key={index}>
                                                                    {question}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                        {selectedSlot.assignments &&
                                            selectedSlot.assignments.length > 0 && (
                                                <div>
                                                    <strong>Assignments</strong>

                                                    <ul>
                                                        {selectedSlot.assignments.map(
                                                            (assignment, index) => (
                                                                <li key={index}>
                                                                    {assignment}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                        {(!selectedSlot.questions ||
                                            selectedSlot.questions.length === 0) &&
                                            (!selectedSlot.assignments ||
                                                selectedSlot.assignments.length === 0) && (
                                                <p className="mb-0">
                                                    This slot has no content
                                                </p>
                                            )}
                                    </>
                                )}

                            </div>

                        </div>
                    ) : (
                        <div className="border rounded p-4">
                            This class has no sessions
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

export default CourseDetail;