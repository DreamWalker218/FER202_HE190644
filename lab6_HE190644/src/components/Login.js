import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Vui lòng nhập đầy đủ email và password");
            return;
        }

        try {
            const response = await axios.get("http://localhost:9000/accounts"
            );

            const accounts = response.data;

            const user = accounts.find(
                (account) => account.email === email
            );

            if (!user) {
                setError("Email hoặc password không đúng");
                return;
            }

            if (user.password !== password) {
                setError("Email hoặc password không đúng");
                return;
            }

            if (user.status === "Inactive") {
                setError("tài khoản đã bị khóa");
                return;
            }

            if (user.role !== "Student" && user.role !== "Lecturer") {
                setError("Role không hợp lệ");
                return;
            }

            // Lưu session vào localStorage
            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            navigate("/syllabus");

        } catch (error) {
            console.error(error);
            setError("Không thể kết nối đến Mock API");
        }
    };

    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Email of student or lecturer"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-secondary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;