import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
        <section className="relative z-10 h-screen bg-primary py-[120px]">
          <div className="container">
            <div className="flex -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[400px] text-center">
                  <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                    404
                  </h2>
                  <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                    Oops! That page can&apos;t be found
                  </h4>
                  <p className="mb-8 text-lg text-white">
                    The page you are looking for it maybe deleted
                  </p>
                  <p className="text-lg text-white mb-4">
                    Here are some helpful links:
                  </p>
                  <div className="space-y-4">
                    <Link
                      to="/"
                      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                      Home
                    </Link>
                    <Link
                      to="/signUp"
                      className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mx-4"
                    >
                      SignUp
                    </Link>
                    <Link
                      to="/login"
                      className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-300"
                    >
                      LogIn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
            <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="flex w-1/3 h-full">
              <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
              <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
            </div>
            <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
        </section>
    
    </>
  );
}

export default ErrorPage;
