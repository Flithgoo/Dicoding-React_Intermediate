import { IoWarning } from "react-icons/io5";
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="wrapper pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template text-white">
              <h1 className="text-danger">
                <IoWarning /></h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Maaf, terjadi kesalahan. Halaman yang anda cari tidak tersedia
              </div>
              <div className="error-actions">
                <Link to='/'>Kembali ke halaman Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;