import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-base-content bg-base-300 p-16 mt-10">
  <aside>
  <img
            className="rounded-full w-12 h-12  "
            src="https://img.freepik.com/premium-vector/letter-f-wing-logo-design-freight-transportation-symbol-wing-logotype-template_754537-6408.jpg"
            alt=""
          />
          <a className=" text-2xl pl-3 font-semibold">FurniFusion </a>
  </aside>
  <nav >
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  <footer className="footer footer-center text-neutral-content bg-neutral p-5">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;