import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                404 - Page Not Found
            </h1>
            <p className="text-gray-600">
                The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
