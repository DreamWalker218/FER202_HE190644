import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import SubjectDetail from "./components/SubjectDetail";
import Syllabus from "./components/Syllabus"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/subject/:id" element={<SubjectDetail />} />
        </Routes>
    </BrowserRouter>
);