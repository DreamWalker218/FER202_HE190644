import React from "react";

function App() {
  return (
    <div className="container">

      {/*EXERCISE 1*/}

      <div className="my-5">

        <h2 className="mb-4">1.</h2>

        <div className="bg-body-secondary p-4 mb-3">
          <h1 className="mb-0">
            Let's test the grid!
          </h1>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-6 border bg-light p-2">
              First col
            </div>
            <div className="col-6 border bg-light p-2">
              Second col
            </div>
          </div>

          <div className="row">
            <div className="col-4 border bg-light p-2">
              col
            </div>
            <div className="col-4 border bg-light p-2">
              col
            </div>
            <div className="col-4 border bg-light p-2">
              col
            </div>
          </div>

          <div className="row">
            <div className="col-3 border bg-light p-2">
              col
            </div>
            <div className="col-3 border bg-light p-2">
              col
            </div>
            <div className="col-3 border bg-light p-2">
              col
            </div>
            <div className="col-3 border bg-light p-2">
              col
            </div>
          </div>

        </div>

        <div className="bg-light-subtle text-center fs-3 mt-3">
          Created by ABC!
        </div>
      </div>

      {/*EXERCISE 2*/}

      <div className="my-5">
        <h2 className="mb-4">2.</h2>


        <div className="bg-body-secondary text-center p-4 mb-4">
          <h1 className="mb-0">My First Bootstrap Page</h1>
        </div>

        <div className="row text-center align-items-center">
          <div className="col-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="img-fluid w-50"/>
          </div>

          <div className="col-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="img-fluid w-50"/>
          </div>

          <div className="col-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="img-fluid w-50"/>
          </div>
        </div>

      </div>

      {/*EXERCISE 3*/}
      <div className="my-5">

        <h2 className="mb-4">
          3.
        </h2>

        <div className="bg-body-secondary p-4 mb-3">
          <h1 className="mb-0">Let's test the grid!</h1>

        </div>

        <ul className="nav mb-4">

          <li className="nav-item">
            <a
              className="nav-link active"
              href="#active">Active</a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#link">Link</a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#link2"
            >
              Link
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#disabled"
            >
              Disabled
            </a>
          </li>

        </ul>

        <div className="container">
          <div className="row">
            <div className="col-6 border bg-light p-2">
              First col
            </div>
            <div className="col-6 border bg-light p-2">
              Second col
            </div>
          </div>

          <div className="row">

            <div className="col-4 border bg-light p-2">
              col
            </div>

            <div className="col-4 border bg-light p-2">
              col
            </div>

            <div className="col-4 border bg-light p-2">
              col
            </div>

          </div>


          <div className="row">

            <div className="col-3 border bg-light p-2">
              col
            </div>

            <div className="col-3 border bg-light p-2">
              col
            </div>

            <div className="col-3 border bg-light p-2">
              col
            </div>

            <div className="col-3 border bg-light p-2">
              col
            </div>

          </div>

        </div>

        <div className="bg-light-subtle text-center fs-3 mt-3">
          Created by ABC!
        </div>

      </div>


      {/*EXERCISE 4*/}

      <div className="my-5">

        <h2 className="mb-4">
          4. 
        </h2>


        {/* Orange header */}

        <div className="bg-warning text-center">

          {/* Logo area */}

          <div className="bg-white d-inline-block px-5 py-3 mt-1">

            <div className="fs-1 fw-bold">

              <span className="text-primary">
                FPT
              </span>

              <span className="text-success">
                .
              </span>

              <span className="text-secondary fs-5">
                Education
              </span>

            </div>

            <div className="text-warning fw-bold fs-3">
              FPT UNIVERSITY
            </div>

          </div>

          {/* Menu */}

          <div className="pb-2">

            <a
              href="#home"
              className="text-white text-decoration-none mx-1"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-white text-decoration-none mx-1"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-white text-decoration-none mx-1"
            >
              Contact
            </a>

          </div>

        </div>

        {/* About */}
        <div className="text-center py-4">

          <h3 className="fw-bold">
            About
          </h3>

          <p>
            This is the about section of the website.
          </p>

        </div>

        {/* Contact */}
        <div className="text-center pb-4">

          <h3 className="fw-bold">
            Contact
          </h3>

          <p>
            For any inquiries, please contact us at
            example@example.com.
          </p>

        </div>

        {/* Footer */}
        <div className="bg-warning-subtle text-white text-center p-3">

          © 2023 Website. All rights reserved.

        </div>

      </div>


      {/*=====================================================
           EXERCISE 5*/}

      <div className="my-5">

        <h2 className="mb-4">
          5.
        </h2>
        {/* Top navigation */}

        <div className="bg-warning-subtle p-2">

          <div className="row align-items-center">

            {/* Logo */}

            <div className="col-4">

              <div className="text-primary fw-bold">
                FPT
                <span className="text-secondary ms-1">
                  Education
                </span>
              </div>

              <small className="text-warning fw-bold">
                FPT UNIVERSITY
              </small>

            </div>


            {/* Links */}

            <div className="col-6 text-center">

              <a
                href="#home"
                className="text-warning text-decoration-none small mx-1"
              >
                Trang chủ
              </a>

              <a
                href="#register"
                className="text-warning text-decoration-none small mx-1"
              >
                Đăng ký học
              </a>

              <a
                href="#student"
                className="text-warning text-decoration-none small mx-1"
              >
                Sinh viên
              </a>

            </div>


            {/* Search */}

            <div className="col-2">

              <div className="input-group input-group-sm">

                <span className="input-group-text">
                  Search
                </span>

                <input
                  type="text"
                  className="form-control"
                />

              </div>

            </div>

          </div>

        </div>


        {/* Orange banner */}

        <div className="bg-warning p-4">

          <div className="bg-dark-subtle text-center p-5">

            <h1 className="text-white fw-bold">
              FPT UNIVERSITY
            </h1>

          </div>

        </div>


        {/* Breadcrumb */}

        <nav
          aria-label="breadcrumb"
          className="mt-2"
        >

          <ol className="breadcrumb">

            <li className="breadcrumb-item">
              <a href="#home">
                Home
              </a>
            </li>

            <li className="breadcrumb-item active">
              Students
            </li>

          </ol>

        </nav>


        {/* Students */}

        <h4 className="text-center mt-4 mb-3">
          Students Detail
        </h4>


        <div className="row justify-content-center">


          {/* Student 1 */}

          <div className="col-6 col-md-3">

            <div className="card">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="card-img-top"
                alt="Nguyễn Hữu Quốc"
              />

              <div className="card-body text-center p-2">

                <small>
                  DE160182
                </small>

                <p className="mb-1">
                  Nguyễn Hữu Quốc
                </p>

                <div className="d-flex justify-content-between small">

                  <label>
                    <input
                      type="radio"
                      name="student1"
                    />{" "}
                    Absent
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student1"
                    />{" "}
                    DaNang
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student1"
                    />{" "}
                    Present
                  </label>

                </div>

                <button className="btn btn-warning btn-sm mt-2">
                  Submit
                </button>

              </div>

            </div>

          </div>


          {/* Student 2 */}

          <div className="col-6 col-md-3">

            <div className="card">

              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                className="card-img-top"
                alt="Chovy Vĩnh Thiện"
              />

              <div className="card-body text-center p-2">

                <small>
                  DE160377
                </small>

                <p className="mb-1">
                  Chovy Vĩnh Thiện
                </p>

                <div className="d-flex justify-content-between small">

                  <label>
                    <input
                      type="radio"
                      name="student2"
                    />{" "}
                    Absent
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student2"
                    />{" "}
                    QuangNam
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student2"
                    />{" "}
                    Present
                  </label>

                </div>

                <button className="btn btn-warning btn-sm mt-2">
                  Submit
                </button>

              </div>

            </div>

          </div>


          {/* Student 3 */}

          <div className="col-6 col-md-3">

            <div className="card">

              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="card-img-top"
                alt="Đỗ Nguyễn Phúc"
              />

              <div className="card-body text-center p-2">

                <small>
                  DE160547
                </small>

                <p className="mb-1">
                  Đỗ Nguyễn Phúc
                </p>

                <div className="d-flex justify-content-between small">

                  <label>
                    <input
                      type="radio"
                      name="student3"
                    />{" "}
                    Absent
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student3"
                    />{" "}
                    QuangNam
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student3"
                    />{" "}
                    Present
                  </label>

                </div>

                <button className="btn btn-warning btn-sm mt-2">
                  Submit
                </button>

              </div>

            </div>

          </div>


          {/* Student 4 */}

          <div className="col-6 col-md-3">

            <div className="card">

              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                className="card-img-top"
                alt="Lê Hoàng Minh"
              />

              <div className="card-body text-center p-2">

                <small>
                  DE170049
                </small>

                <p className="mb-1">
                  Lê Hoàng Minh
                </p>

                <div className="d-flex justify-content-between small">

                  <label>
                    <input
                      type="radio"
                      name="student4"
                    />{" "}
                    Absent
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student4"
                    />{" "}
                    DaNang
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="student4"
                    />{" "}
                    Present
                  </label>

                </div>

                <button className="btn btn-warning btn-sm mt-2">
                  Submit
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* Footer */}

        <div className="bg-warning text-dark mt-4 p-4">

          <div className="row">

            <div className="col-6">

              <h6>
                Our Address
              </h6>

              <p className="small mb-1">
                Địa chỉ: FPT Đà Nẵng
              </p>

              <p className="small mb-1">
                ☎ 0123 456 789
              </p>

              <p className="small">
                ✉ example@example.com
              </p>

            </div>


            <div className="col-6 text-end">

              <p>
                G+ &nbsp; f &nbsp; in &nbsp; ▶ &nbsp; ✉
              </p>

            </div>

          </div>


          <div className="text-center small">
            © Copyright 2023
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;