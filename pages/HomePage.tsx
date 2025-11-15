import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Footprints, Droplets, GalleryVerticalEnd } from 'lucide-react';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {

  const services = [
    { name: "تنسيق اللاندسكيب", icon: <Trees className="h-12 w-12 text-primary mx-auto" />, description: "نحول المساحات الخارجية إلى تحف فنية عبر زراعة الأشجار والزهور وتنسيق المسطحات الخضراء." },
    { name: "إنشاء وتنسيق الملاعب", icon: <Footprints className="h-12 w-12 text-primary mx-auto" />, description: "نجهز الملاعب الرياضية بالنجيل الصناعي المعتمد وأنظمة التصريف لتقديم أفضل أداء." },
    { name: "شبكات الري الحديثة", icon: <Droplets className="h-12 w-12 text-primary mx-auto" />, description: "نوفر حلول ري ذكية وموفرة للمياه لضمان بقاء مساحاتكم الخضراء نضرة وصحية." },
    { name: "إنشاء الجلسات والبرجولات", icon: <GalleryVerticalEnd className="h-12 w-12 text-primary mx-auto" />, description: "نصمم جلسات خارجية عصرية وبرجولات خشبية للاسترخاء والاستمتاع بحديقتك." },
  ];

  const projects = [
    { title: "حديقة فيلا بحي حطين", image: "https://picsum.photos/seed/villa1/600/400" },
    { title: "ملعب كرة قدم لمجمع سكني", image: "https://picsum.photos/seed/stadium1/600/400" },
    { title: "لاندسكيب فندق بالرياض", image: "https://picsum.photos/seed/hotel/600/400" },
    { title: "حديقة سطح (روف)", image: "https://picsum.photos/seed/roof/600/400" },
  ];

  return (
    <div>
       <SEO
        title="جرين لايف | أفضل شركة لاندسكيب وتنسيق حدائق في الرياض"
        description="شركة جرين لايف رائدة في خدمات اللاندسكيب، تصميم وإنشاء الحدائق، تركيب النجيل الصناعي، وإنشاء الملاعب بالرياض والسعودية. اطلب استشارة مجانية."
        keywords="خدمات اللاندسكيب في الرياض, تصميم حدائق, إنشاء ملاعب, نجيل صناعي, تنسيق حدائق, شركات اللاندسكيب في السعودية, شركة تنسيق حدائق بالرياض"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/landscape-hero/1600/900')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">جرين لايف: نحول رؤيتك إلى واقع أخضر</h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8">خبراء اللاندسكيب وتنسيق الحدائق في الرياض، ملتزمون بالجودة والإبداع في كل مشروع.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
              احجز استشارة مجانية
            </Link>
            <Link to="/projects" className="bg-white hover:bg-gray-200 text-primary font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
              شاهد مشاريعنا
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">خدماتنا المتكاملة</h2>
          <p className="text-lg text-accent mb-12 max-w-2xl mx-auto">نقدم حلولاً شاملة لتنسيق الحدائق والمساحات الخضراء، من الفكرة الأولية حتى الصيانة الدورية.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">{service.name}</h3>
                <p className="text-accent">{service.description}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="mt-12 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300">
            اكتشف جميع خدماتنا
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">مشاريع نفخر بها</h2>
          <p className="text-lg text-accent mb-12">شاهد كيف حولنا أفكار عملائنا إلى مساحات خضراء ساحرة.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ماذا يقول عملاؤنا؟</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-20 p-8 rounded-lg">
              <p className="text-xl italic mb-4">"فريق عمل محترف وخدمة عملاء ممتازة. لقد حولوا حديقتي الخلفية إلى جنة حقيقية. أنصح بهم بشدة لكل من يبحث عن خدمات تنسيق حدائق في الرياض."</p>
              <h4 className="font-bold text-lg">- أحمد العتيبي، الرياض</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">هل أنت مستعد لتحويل مساحتك الخارجية؟</h2>
          <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">تواصل معنا اليوم للحصول على استشارة مجانية ودعنا نساعدك في تصميم وتنفيذ حديقة أحلامك.</p>
          <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg transition duration-300 text-xl">
            تواصل الآن
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;