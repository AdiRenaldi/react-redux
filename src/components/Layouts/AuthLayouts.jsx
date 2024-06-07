import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { title, children, type } = props;

  return (
    <div className={`flex justify-center min-h-screen items-center`}>
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-5 text-center">
          Selamat datang dihalaman {title}
        </p>
        {children}
        <p className="text-center text-sm mt-2">
          {type === "login" ? "Belum Punya akun? " : "Sudah punya akun? "}
          {type === "login" && (
            <Link to="/registrasi" className="font-bold text-blue-700">
              Registrasi
            </Link>
          )}
          {type === "registrasi" && (
            <Link to="/login" className="font-bold text-blue-700">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
