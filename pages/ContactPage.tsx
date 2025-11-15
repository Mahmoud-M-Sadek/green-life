import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('شكراً لتواصلك! سنقوم بالرد عليك قريباً.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <SEO
        title="تواصل معنا | اطلب عرض سعر لخدمات اللاندسكيب"
        description="تواصل مع شركة جرين لايف في الرياض. اطلب عرض سعر لمشروعك، أو احجز استشارة مجانية لتصميم حديقتك أو ملعبك. بيانات الاتصال وخريطة الموقع."
        keywords="تواصل مع شركة لاندسكيب, عرض سعر تنسيق حدائق, رقم شركة حدائق, موقع شركة جرين لايف"
      />
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">تواصل معنا</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">نحن هنا للإجابة على استفساراتك. تواصل معنا اليوم للحصول على عرض سعر أو استشارة مجانية.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">اطلب عرض سعر</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الجوال</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">رسالتك (تفاصيل المشروع)</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
                  إرسال الطلب
                </button>
                {status && <p className="mt-4 text-center text-green-600">{status}</p>}
              </form>
            </div>
            
            <div className="space-y-8">
               <h2 className="text-3xl font-bold text-gray-800">معلومات التواصل</h2>
               <div className="flex items-start">
                 <div className="bg-primary text-white p-3 rounded-full mr-4 ml-4">
                   <MapPin className="h-6 w-6"/>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-800">موقعنا</h3>
                   <p className="text-accent">طريق الملك فهد، الرياض 12345، المملكة العربية السعودية</p>
                 </div>
               </div>
                <div className="flex items-start">
                 <div className="bg-primary text-white p-3 rounded-full mr-4 ml-4">
                   <Phone className="h-6 w-6"/>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-800">الجوال / واتساب</h3>
                   <a href="tel:+966567994618" className="text-accent hover:text-primary">+966 56 799 4618</a>
                 </div>
               </div>
                <div className="flex items-start">
                 <div className="bg-primary text-white p-3 rounded-full mr-4 ml-4">
                   <Mail className="h-6 w-6"/>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-gray-800">البريد الإلكتروني</h3>
                   <a href="mailto:info@greenlife.sa" className="text-accent hover:text-primary">info@greenlife.sa</a>
                 </div>
               </div>
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232064.9780521818!2d46.56925501980313!3d24.72497473797685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1689622830815!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;