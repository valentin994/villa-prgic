function Contact() {
    return(
    <div>
        <form>
            <div className="space-y-4 p-4">
                <p className="w-full text-center text-2xl mt-4">Send a message to us</p>
                <div className="grid sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input type="text" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="John Doe" />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input type="text" name="email" id="email"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="john.doe@email.com" />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <textarea id="about" name="about" rows={5} className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"></textarea>
                        </div>
                      </div>
                    </div>
                </div>
            </div> 
        </form>
    </div>
          )
}

export default Contact
