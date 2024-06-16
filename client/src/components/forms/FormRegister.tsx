// import{Formik, Field, ErrorMessage} from "formik";
// import yupRegisterSchemas from "../../schemas/yupRegisterSchemas";
// import {useState} from "react";
// function FormRegister(){
//     const [isFormValid, setFormValid] = useState(false)
//     return(
//     <Formik initialValues={{
//         name:"",
//         login:"",
//         email:"",
//         password:"",
//         confirmPassword:""
//     }}
//     validationSchema={yupRegisterSchemas}
//     validationOnInput 
//     onSubmit = {
//         (values) => {
//             //отправка данных на сервер
//             console.log("Data:", values);
//         }
//     }
//     >
//         {({values, errors, touched, isValid, handleSubmit}) => {
//             setFormValid(isValid);
//             return(
//                 <form onSubmit={handleSubmit} className="container">
//                 <h2 className="text-center mb-4">Регистрация</h2>
    
//                 <div className="form-group">
//                   <label htmlFor="name">Имя</label>
//                   <Field
//                     name="name"
//                     type="text"
//                     className={`form-control ${
//                       touched.name && errors.name ? "is-invalid" : ""
//                     }`}
//                     id="name"
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="invalid-feedback"
//                   />
//                 </div>
    
//                 <div className="form-group">
//                   <label htmlFor="login">Логин</label>
//                   <Field
//                     name="login"
//                     type="text"
//                     className={`form-control ${
//                       touched.login && errors.login ? "is-invalid" : ""
//                     }`}
//                     id="login"
//                   />
//                   <ErrorMessage
//                     name="login"
//                     component="div"
//                     className="invalid-feedback"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <Field
//                     name="email"
//                     type="email"
//                     className={`form-control ${
//                       touched.email && errors.email ? "is-invalid" : ""
//                     }`}
//                     id="email"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="invalid-feedback"
//                   />
//                 </div>
    
//                 <div className="form-group">
//                   <label htmlFor="password">Пароль</label>
//                   <Field
//                     name="password"
//                     type="password"
//                     className={`form-control ${
//                       touched.password && errors.password ? "is-invalid" : ""
//                     }`}
//                     id="password"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="invalid-feedback"
//                   />
//                 </div>
    
//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">Подтвердите пароль</label>
//                   <Field
//                     name="confirmPassword"
//                     type="password"
//                     className={`form-control ${
//                       touched.confirmPassword && errors.confirmPassword
//                         ? "is-invalid"
//                         : ""
//                     }`}
//                     id="confirmPassword"
//                   />
//                   <ErrorMessage
//                     name="confirmPassword"
//                     component="div"
//                     className="invalid-feedback"
//                   />
//                 </div>
    
//                 <button
//                   type="submit"
//                   className={`btn btn-primary mt-4 ${!isFormValid && "disabled"}`}
//                   disabled={!isFormValid}
//                 >
//                   Зарегистрироваться
//                 </button>
//               </form>
    
//             )
//         }
//     }
//     </Formik>
//     );
// }
// export default FormRegister;