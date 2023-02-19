import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/Auth/authActions";

const schema = yup.object().shape({
  email: yup.string().email().required("This filed is required"),
  password: yup.string().min(8).max(32).required("This filed is required"),
});

export default function LoginPage() {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (formValue) => {
    console.log(formValue);
    const { email, password } = formValue;
    console.log("Email: ", email);
    console.log("Password: ", password);

    dispatch(userLogin({ email, password }));

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
                  {/* ##### FORM START ##### */}
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                      />
                      <div id="emailHelp" className="form-text text-danger">
                        {errors.email?.message}
                      </div>
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
                      <div id="passwordHelp" className="form-text text-danger">
                        {errors.password?.message}
                      </div>
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

                    <div className="mb-3">
                      <Link
                        to="/sign_up"
                        className="text-end text-muted fw-normal"
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                    <button type="submit" className="btn-standard ">
                      Login
                    </button>
                  </form>
                  <Link to={"/sign_up"} className="text-center mt-4 text-muted">
                    Don't Have Account ? Create One
                  </Link>
                  {/* ##### FORM END #####  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
