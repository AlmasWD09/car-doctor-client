

const UpdateFrom = () => {
    return (
        <div className="max-w-4xl mx-auto bg-gray-300 p-8 mt-10">
        <div className="">
            <form>
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name"  id="" placeholder="Your First name" />
                    </div>
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" id="" placeholder="Your Last name" />
                    </div>
                </div>
        
                <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
                    <div className="w-full">
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="number" name="phone" id="" placeholder="Your phone" />
                    </div>
                    <div className="w-full">
        
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="email" name="email" id="" placeholder="Your Email" />
                    </div>
                </div>
        
                <div className="">
                    <div className="w-full">
                        <textarea name="description" id="description" cols="10" rows="10" placeholder="Your Message"  className="w-full p-4 border border-gray-300 rounded-lg outline-0">
                        </textarea>
                    </div>
            
                </div>
                {/* button add  */}
                <div>
                    <button className="w-full bg-primary text-white py-3 my-4 rounded-lg hover:bg-secondery" type="submit">Order confirm</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateFrom;
