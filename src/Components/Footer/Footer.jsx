

const Footer = () => {
    return (
        <div className=" bg-black">
            <img className='mx-auto ' src={""} alt="" />

            <footer className="footer lg:flex justify-evenly text-white p-12  mt-10">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className="text-justify">
                        We provide warm clothing to those in need <br /> during the winter, ensuring comfort and protection <br /> against the cold. Join us in spreading warmth and <br /> care to our community.
                    </p>

                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <ul>
                        <li>Facebook</li>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>You Tube</li>
                    </ul>
                </nav>

                <form>
                    <h6 className="footer-title">Address</h6>
                    <p>Ka 84/3 kazibari, Dhaka 1229</p>
                    <p>Phone: 01927383893</p>
                    <p>Email: WinterClothing@gmail.com</p>

                </form>
            </footer>
            <div className="border-2 border-gray-800"></div>

            <div>
                <p className="text-center text-white p-10">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;