import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-100 p-4 relative">
      <div className="w-full h-1/3 absolute left-1/2 transform -translate-x-1/2 rounded-md overflow-hidden z-10 px-4">
        <div className="w-full h-full relative">
          <img
            src="assets/loginbg.webp"
            alt="background"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60  rounded-xl"></div>
        </div>
      </div>
      <div className="relative z-20 mt-16 max-w-4xl mx-auto">
        <div className="w-full flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">Welcome Back !!</h1>
          <p className="text-center max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione, laborum deleniti repellat ducimus quam!?</p>
          <div className="w-full max-w-sm bg-white text-default flex flex-col mt-8 rounded-lg p-12 shadow-md">
            <span className="block text-3xl font-bold mb-3">Register Page</span>
            <span className="block text-sm text-secondary mb-5">Enter your information to sign up</span>
            <form action="" className="w-full">
              <div className="mb-3">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" name="name"
                  className="border border-gray-200 w-full p-3 focus:outline-none rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" name="email"
                  className="border border-gray-200 w-full p-3 focus:outline-none rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input type="password" name="password"
                  className="border border-gray-200 w-full p-3 focus:outline-none rounded-md"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="w-full bg-primary p-2 text-white rounded-md shadow-md text-shadow-lg mb-5">Submit</button>
              <span className="text-center block text-secondary">
                Already have an account?
                <Link to="/login" className="text-primary font-semibold hover:underline"> Sign In</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage