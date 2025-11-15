
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center">
              <span className="self-center text-3xl font-extrabold whitespace-nowrap text-white">جرين لايف</span>
            </Link>
            <p className="mt-4 text-gray-300">
              نحن في "جرين لايف" نحول المساحات الخارجية إلى تحف فنية خضراء. متخصصون في خدمات اللاندسكيب المتكاملة في الرياض وكل أنحاء المملكة.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">روابط سريعة</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4"><Link to="/about" className="hover:underline">من نحن</Link></li>
                <li className="mb-4"><Link to="/projects" className="hover:underline">مشاريعنا</Link></li>
                <li className="mb-4"><Link to="/articles" className="hover:underline">مقالات</Link></li>
                <li className="mb-4"><Link to="/contact" className="hover:underline">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">خدماتنا</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4"><Link to="/services" className="hover:underline">تنسيق اللاندسكيب</Link></li>
                <li className="mb-4"><Link to="/services" className="hover:underline">إنشاء الملاعب</Link></li>
                <li className="mb-4"><Link to="/services" className="hover:underline">تركيب نجيل صناعي</Link></li>
                <li className="mb-4"><Link to="/services" className="hover:underline">صيانة الحدائق</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">تواصل</h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="mailto:info@greenlife.sa" className="hover:underline">info@greenlife.sa</a>
                </li>
                <li>
                  <a href="tel:+966567994618" className="hover:underline">+966 56 799 4618</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">© 2024 <Link to="/" className="hover:underline">جرين لايف™</Link>. كل الحقوق محفوظة.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social Icons Placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;