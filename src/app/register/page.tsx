import Image from 'next/image';

const Register = () => {
  return (
    <div className="flex items-center justify-center mr-2 ml-2 max-w-full">
      <div className="w-1/3">
        <Image src={'/images/register.png'} alt="register" width={400} height={400} />
      </div>
      <form>
        <div className="border-none border-gray-400 p-10 w-96 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold leading-7 text-gray-900 text-center"> Register </h2>
          <div className="mt-2">
            <label htmlFor="name" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                placeholder="enter password"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="confirm-password" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="confirm-password"
                placeholder="please confirm password"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="address" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address"
                placeholder="enter your address (optional)"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="phone" className="block w-full text-sm font-medium leading-6 text-gray-900">
              Phone
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone"
                placeholder="enter your phone number (optional)"
                className="w-full h-10 p-2 rounded-lg ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 shadow-md placeholder-left"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row items-center justify-between">
            <input type="checkbox" name="policy" className="form-checkbox h-4 w-4" />
            <label htmlFor="policy" className="text-gray-900">
              I agree to the terms and conditions.
            </label>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="border rounded-lg border-gray-400 p-2 shadow-sm text-green-700 hover:bg-green-700 hover:text-white">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
