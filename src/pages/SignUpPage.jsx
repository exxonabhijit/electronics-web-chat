import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/Auth/authActions";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required("This filed is required"),
  password: yup.string().min(8).max(32).required("This filed is required"),
  name: yup.string().required("This filed is required"),
});

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success === true) {
      navigate("/login");
    }
  }, [success, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (formValue) => {
    const { email, password, phone, name } = formValue;

    dispatch(registerUser({ email, password, phone, name }));

    reset();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-lg-4 col-12 col-sm-12 col-md-8">
              <div className="card p-5 border-0 shadow-sm">
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        aria-describedby="nameHelp"
                        className="form-control border-0 bg-light"
                        {...register("name")}
                        required
                      />
                      {/* <div id="nameHelp" className="form-text text-danger">
                        Invalid username
                      </div> */}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        className="form-control border-0 bg-light"
                        {...register("email")}
                        required
                      />
                      {/* <div id="emailHelp" className="form-text text-danger">
                        Invalid username
                      </div> */}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-muted fw-normal"
                      >
                        WhatsApp's Number
                      </label>
                      <input
                        type="text"
                        aria-describedby="numberHelp"
                        className="form-control border-0 bg-light"
                        {...register("phone")}
                        required
                      />
                      {/* <div id="emailHelp" className="form-text text-danger">
                        Invalid username
                      </div> */}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label text-muted fw-normal"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control border-0 bg-light"
                        id="exampleInputPassword1"
                        aria-describedby="passwordHelp"
                        {...register("password")}
                        required
                      />
                      {/* <div id="passwordHelp" className="form-text text-danger">
                        Invalid Password
                      </div> */}
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Show Password
                      </label>
                    </div>
                    <button type="submit" className="btn-standard text-uppercase">
                      register
                    </button>
                  </form>
                  <Link to={"/login"} className="text-center mt-4 text-muted">
                    Already Have Account ? Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
