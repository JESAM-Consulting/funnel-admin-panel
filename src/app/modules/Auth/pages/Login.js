import React, { useState } from "react"; //
import { useHistory } from "react-router-dom";
import { ApiPost } from "../../../../helpers/API/ApiData";
import * as authUtil from "../../../../utils/auth.util";
import * as userUtil from "../../../../utils/user.util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../_metronic/_assets/sass/layout/_basic.scss";


export default function Login() {
    // const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const regexEmail =
        /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        setLoader(true);
        e.preventDefault();

        if (!loginData.email && !loginData.password) {
            setErrors({
                email: "Email is required*",
                password: "Password is required*",
            });
        } else if (loginData.email === "" && loginData.password === "") {
            setErrors({ ...errors, email: "Email is required*" });
        } else if (!loginData.email || loginData.email === "") {
            setErrors({ ...errors, email: "Email is required*" });
        } else if (!loginData.email || regexEmail.test(loginData.email) === false) {
            setErrors({ ...errors, email: "Email is not valid*" });
        } else if (!loginData.password || loginData.password === "") {
            setErrors({ ...errors, password: "Password is required*" });
        } else {
            loginData.email = loginData.email.toLowerCase();

            const data={
                adminEmail:loginData.email,
                password:loginData.password
            }
            await ApiPost("admin-login", data)
                .then((res) => {
                  
                    console.log("login res", res.data);
                    authUtil.setToken(res.data.token);
                    userUtil.setUserInfo(res.data.data);    
                    localStorage.setItem("role", res.data.data.role)
                    history.push("/");
                    setTimeout(function () {
                       
                        setTimeout(function () {
                            window.location.reload();

                        }, [500])
                        toast.success("Login Successful.")
                    }, [100])
                    // window.location.reload();


                    //   }
                })
                .catch((err) => {
                    console.log("err--------->", err.response.data.message);
                    toast.error(err.response.data.message)
                    // err.response
                });
        }
        setLoader(false);
    };

    return (
        <div className="login-form login-signin" id="kt_login_signin_form">
            <div className="text-center mb-10 mb-lg-20">
                <h3 className="font-size-h1">Admin Dashboard</h3>
                <p className="text-muted font-weight-bold">
                    Enter your login credentials.
                </p>
                <span className="text-danger h6">{errors.user}</span>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />

            <div className="form-group fv-plugins-icon-container">
                <input
                    placeholder="Email"
                    type="email"
                    className={`form-control form-control-solid h-auto py-5 px-6  `}
                    name="email"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <span className="text-danger">{errors.email}</span>
            </div>
            <div className="form-group fv-plugins-icon-container">
                <input
                    placeholder="Password"
                    type="password"
                    className={`form-control form-control-solid h-auto py-5 px-6 `}
                    name="password"
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
                <span className="text-danger">{errors.password}</span>
            </div>
            <div className="form-group d-flex flex-wrap justify-content-center align-items-center">
                <button
                    style={{ backgroundColor: "#061E46" }}
                    id="kt_login_signin_submit"
                    type="submit"
                    className={`align-items-center d-flex btn btn-primary font-weight-bold px-9 py-4 my-3`}
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <span className="pr-2">Log In</span>
                    {loader && (
                        <div class="spinner-grow text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    )}
                </button>
            </div>
            {/* <div className="d-flex justify-content-center">
          <span className="font-weight-bold text-dark-50">
            Don't have an account yet?
          </span>
          <Link
            to="/auth/registration"
            className="font-weight-bold ml-2"
            id="kt_login_signup"
          >
            Sign Up!
          </Link>
        </div> */}
            {/* <div className="d-flex justify-content-center">
          <span className="font-weight-bold text-dark-50">
            Read our <Link>Onboarding Policy</Link> here.
          </span>
        </div> */}
            {/* </form> */}

            {/*end::Form*/}
        </div>
    );
}
