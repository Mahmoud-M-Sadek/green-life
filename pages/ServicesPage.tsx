import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Trees, Tractor, Droplets, Lightbulb, Footprints, Sofa, BrickWall, GalleryVerticalEnd, Wrench, Fence, Package } from 'lucide-react';
import { Service } from '../types';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {

  const services: Service[] = [
     {
      title: "تصميم الحدائق (Garden Design)",
      description: "نضع مخططًا كاملًا لحديقتك يشمل تحديد أماكن النباتات والأشجار والزهور، توزيع الممرات والإضاءة، مع تقديم رسومات ثنائية وثلاثية الأبعاد لتصور الشكل النهائي.",
      icon: LayoutTemplate,
      imageUrl: "https://picsum.photos/seed/gardendesign/600/400",
      slug: "garden-design"
    },
    {
      title: "تنسيق اللاندسكيب (Landscaping)",
      description: "نقوم بتنفيذ كافة أعمال تنسيق المواقع من زراعة الأشجار والزهور، تنفيذ المسطحات الخضراء، وتركيب النجيل الطبيعي أو الصناعي لتحقيق شكل عام متناغم.",
      icon: Trees,
      imageUrl: "https://picsum.photos/seed/landscaping/600/400",
      slug: "landscaping"
    },
    {
      title: "تركيب النجيل الصناعي",
      description: "نوفر ونركب أجود أنواع النجيل الصناعي للمنازل، المدارس، الفلل، الحدائق، والملاعب، مع ضمان المتانة والمظهر الطبيعي.",
      icon: Tractor,
      imageUrl: "https://picsum.photos/seed/turf/600/400",
      slug: "turf"
    },
    {
      title: "شبكات الري الحديثة",
      description: "نصمم ونركب أنظمة الري الحديثة بالتنقيط والرش، وأنظمة التحكم الأوتوماتيكي مع المضخات والتمديدات اللازمة لضمان كفاءة استهلاك المياه.",
      icon: Droplets,
      imageUrl: "https://picsum.photos/seed/irrigation/600/400",
      slug: "irrigation"
    },
    {
      title: "إنشاء وتنسيق الملاعب",
      description: "متخصصون في تصميم وتجهيز الملاعب الرياضية بالنجيل الصناعي المعتمد، وتخطيطها وصيانتها لتكون جاهزة دائمًا للاستخدام.",
      icon: Footprints,
      imageUrl: "https://picsum.photos/seed/stadium/600/400",
      slug: "stadium"
    },
    {
      title: "الإضاءة الخارجية للحدائق",
      description: "نبرز جمال حديقتك ليلاً عبر حلول إضاءة مبتكرة تشمل إضاءة أرضية، إضاءة ممرات، وسبوت لايت ديكوري لإضفاء أجواء ساحرة.",
      icon: Lightbulb,
      imageUrl: "https://picsum.photos/seed/lighting/600/400",
      slug: "lighting"
    },
    {
      title: "أعمال الحجر والبلاط للممرات",
      description: "نقوم بتنفيذ الممرات باستخدام بلاط الحدائق، الحجر الطبيعي، والحجر النهري، مع تركيب الانترلوك لإضافة لمسة جمالية وعملية.",
      icon: BrickWall,
      imageUrl: "https://picsum.photos/seed/paving/600/400",
      slug: "paving"
    },
    {
      title: "إنشاء الجلسات والبرجولات",
      description: "نصمم وننفذ جلسات خارجية عصرية، عرائش خشبية، وبرجولات لتوفير مساحات مريحة للاسترخاء والاستمتاع بالهواء الطلق.",
      icon: GalleryVerticalEnd,
      imageUrl: "https://picsum.photos/seed/pergola/600/400",
      slug: "pergola"
    },
    {
      title: "تجميل المساحات الخارجية",
      description: "نضيف لمسات جمالية لمساحتك الخارجية عبر تركيب نوافير وشلالات، عشب جداري، مظلات وسواتر، وديكورات خارجية متنوعة.",
      icon: Sofa,
      imageUrl: "https://picsum.photos/seed/beautify/600/400",
      slug: "beautify"
    },
    {
      title: "صيانة الحدائق الدورية",
      description: "نقدم عقود صيانة دورية تشمل تنظيف الحديقة، صيانة شبكات الري، علاج وتقليم الأشجار، وقص المسطحات الخضراء للحفاظ على حيويتها.",
      icon: Wrench,
      imageUrl: "https://picsum.photos/seed/maintenance/600/400",
      slug: "maintenance"
    },
    {
      title: "الأسوار الخضراء والعشب الجداري",
      description: "نصمم ونركب الأسوار النباتية الطبيعية والعشب الجداري الصناعي لإضافة خصوصية ولمسة جمالية فريدة على الجدران والأسوار.",
      icon: Fence,
      imageUrl: "https://picsum.photos/seed/greenwall/600/400",
      slug: "greenwall"
    },
    {
      title: "توريد النباتات والزهور",
      description: "نقوم بتوريد أجود أنواع النباتات الداخلية والخارجية، الزهور الموسمية، والأشجار التي تتناسب مع مناخ الرياض.",
      icon: Package,
      imageUrl: "https://picsum.photos/seed/plantsupply/600/400",
      slug: "plantsupply"
    }
  ];

  return (
    <div>
      <SEO
        title="خدماتنا | لاندسكيب، إنشاء ملاعب، شبكات ري، نجيل صناعي"
        description="اكتشف خدماتنا المتكاملة: تصميم وتنفيذ لاندسكيب، إنشاء وصيانة الملاعب، تركيب نجيل صناعي عالي الجودة، وشبكات الري الحديثة في الرياض."
        keywords="خدمات لاندسكيب, إنشاء ملاعب كرة قدم, تركيب نجيل صناعي, شبكات ري أوتوماتيكية, إضاءة حدائق, صيانة حدائق, تصميم حدائق, برجولات, عشب جداري"
      />
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">خدماتنا</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">نقدم مجموعة متكاملة من الخدمات الاحترافية لتلبية كافة احتياجات تنسيق الحدائق والمساحات الخضراء في الرياض.</p>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                     <service.icon className="h-8 w-8 text-primary ml-3" />
                     <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-accent leading-relaxed flex-grow">{service.description}</p>
                  <div className="mt-6 flex gap-3">
                    <Link to={`/services/${service.slug}`} className="text-primary font-bold hover:text-primary-dark transition-colors duration-300">
                      اقرأ المزيد ←
                    </Link>
                    <Link to="/contact" className="text-primary-dark font-bold hover:text-primary transition-colors duration-300">
                      اطلب الخدمة الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">لديك مشروع في بالك؟</h2>
          <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">سواء كان مشروعك كبيراً أو صغيراً، نحن هنا لتحويل أفكارك إلى حقيقة. تواصل معنا اليوم لمناقشة مشروعك.</p>
          <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg transition duration-300 text-xl">
            احجز استشارة مجانية
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;