const Footer = () => {
  return (
    <>
      <footer className="footer p-10 justify-around bg-neutral text-neutral-content mt-10">
        <aside className="flex items-center">
          <img className="h-32" src="/logo.png" alt="logo" />
          <p>
            <span className="text-2xl text-amber-400">FOODIE-EMPIRE</span>
            <br />© 2023 FOODIE All Rights Reserved.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">

            <div className="grid gap-3">
              <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="#">
                  Home
                </a>
                <a className="hover:text-gray-900" href="#">
                  Screening
                </a>
                <a className="hover:text-gray-900" href="#">
                  Services
                </a>
                <a className="hover:text-gray-900" href="#">
                  Media
                </a>
              </nav>

              <div className="flex justify-center space-x-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a
                  href="https://messenger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
              </div>
              <p className="text-center text-gray-700 font-medium">
                &copy; 2023 FOODIE EMPIRE All rights reservered.
              </p>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
