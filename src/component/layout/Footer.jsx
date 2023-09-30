import React from "react";

function Footer() {
  let footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-slate-700 text-white footer-center">
      <div>
        <p>Copyright Ⓒ {footerYear}. All right reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
 