import React from "react";
import { Bg1, text1 } from "../style/Color";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:m-10 justify-between ">
          <div className="mb-8 md:mb-0 md:mr-4">
            <p className="text-6xl font-bold">YOURS™</p>
          </div>

          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-bold mb-4 md:mb-8">YOURS™</p>
            <p>Email: reachus@yours.house</p>
            <p>Phone: +91 9880775551</p>
          </div>

          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-bold mb-4 md:mb-8">Quick Links</p>
            <p>News & Media</p>
            <p>Partner with us</p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-4 md:mb-8">Others</p>
            <p>Privacy Policy</p>
            <p>Enquire Now</p>
          </div>
        </div>

        <div className="border-t border-white my-8"></div>

        <div className="mt-8">
          <p className="text-sm">
            Copyrights 2023, RERA no-PRM/KA/RERA/1251/310/AG/221029/003182
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-8">
          <p className="text-sm mb-4 md:mr-8">
            Insta | Facebook | Twitter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
