import { useMemo, useState } from "react";
import { initialAttendances } from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [searchName, setSearchName] = useState("");
  const [status, setStatus] = useState("");

  const filteredAttendances = useMemo(() => {
    return initialAttendances.filter((item) => {
      const matchName = item.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
        
      const matchStatus =
        status === "" || item.status === status;

      return matchName && matchStatus;
    });
  }, [searchName, status]);

  return (
    <div
      className={
        darkMode
          ? "container-fluid bg-dark text-light min-vh-100 p-4"
          : "container-fluid bg-light text-dark min-vh-100 p-4"
      }
    >
      {/*Header*/}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Hệ thống quản lý điểm danh lớp học</h3>

        <button
          className={
            darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"}
            onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/*Form*/}
      <div
        className={
          darkMode ? "card p-3 mb-4 bg-secondary": "card p-3 mb-4"}>
        <div className="row g-2">
          {/*name*/}
          <div className="col-md-3">
            <input
              type="text" className="form-control"
              placeholder="Tìm kiếm theo tên sinh viên..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}/>
          </div>

          {/*status*/}
          <div className="col-md-3">
            <select
              className="form-select" value={status}
              onChange={(e) => setStatus(e.target.value)}>

              <option value="">Tất cả trạng thái</option>
              <option value="ABSENT">ABSENT</option>
              <option value="PRESENT">PRESENT</option>
            </select>
          </div>
        </div>
      </div>

      {/*table*/}
      <div className="table-responsive">
        <table
          className={
            darkMode ? "table table-dark table-bordered table-hover align-middle"
                     : "table table-bordered table-hover align-middle"}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã lớp</th>
              <th>Tên sinh viên</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendances.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.classId}</td>
                <td>{item.name}</td>
                <td>
                  {new Date(item.date).toLocaleDateString("vi-VN")}
                </td>
                <td>
                  {item.status === "PRESENT" ? (
                    <span className="badge bg-success">PRESENT</span>
                  ) : (
                    <span className="badge bg-danger">ABSENT</span>
                  )}
                </td>

                <td>
                  <button className="btn btn-sm btn-danger">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;