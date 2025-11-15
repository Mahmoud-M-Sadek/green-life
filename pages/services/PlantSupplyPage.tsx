import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, ArrowRight, Phone, Mail, Flower, TreePine, Leaf } from 'lucide-react';
import SEO from '../../components/SEO';

const PlantSupplyPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="توريد النباتات والزهور | نباتات وأشجار عالية الجودة في الرياض"
        description="خدمات توريد أجود أنواع النباتات الداخلية والخارجية، الزهور الموسمية، والأشجار التي تتناسب مع مناخ الرياض."
        keywords="توريد نباتات, زهور, أشجار, نباتات داخلية, نباتات خارجية, زهور موسمية, نباتات الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Package className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">توريد النباتات والزهور</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              نباتات وأشجار عالية الجودة تناسب مناخ الرياض
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">نباتات مختارة بعناية</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  نحن نقدم مجموعة واسعة من النباتات والزهور عالية الجودة التي تتميز بجمالها ومتانتها في ظروف الطقس السعودي.
                  جميع نباتاتنا تأتي من مصادر موثوقة وتخضع لفحوصات جودة صارمة لضمان سلامتها وصحتها.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من النباتات الداخلية الأنيقة إلى الأشجار الخارجية الظليلة، نقدم حلول خضراء تناسب جميع الاحتياجات
                  في الرياض، مع التركيز على النباتات التي تتحمل الحرارة والجفاف.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/plant-supply-hero/600/400"
                  alt="توريد النباتات والزهور"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع النباتات المتوفرة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Flower className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الزهور الموسمية</h3>
              <p className="text-accent">زهور جميلة تزين الحدائق في جميع الفصول</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TreePine className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الأشجار الظليلة</h3>
              <p className="text-accent">أشجار توفر الظل والحماية من أشعة الشمس</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">النباتات الداخلية</h3>
              <p className="text-accent">نباتات منزلية تزين المنازل والمكاتب</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نختار نباتاتك؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">فهم احتياجاتك</h3>
              <p className="text-accent">نحدد نوع النباتات المناسبة لمكانك</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اختيار الجودة</h3>
              <p className="text-accent">نختار أفضل النباتات من مصادر موثوقة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التحضير والتعبئة</h3>
              <p className="text-accent">نحضر النباتات بعناية للحفاظ عليها</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التوصيل والتركيب</h3>
              <p className="text-accent">نسلم ونركب النباتات في مكانها</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">لماذا تختار نباتاتنا؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">جودة عالية</h3>
              <p className="text-accent">نباتات صحية ومختارة بعناية من أفضل المزارع</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">مناسبة للمناخ</h3>
              <p className="text-accent">نباتات تتحمل حرارة وجفاف المنطقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ضمان الجودة</h3>
              <p className="text-accent">نقدم ضمان على جميع النباتات المباعة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">خدمة متكاملة</h3>
              <p className="text-accent">تشمل الاستشارة والتوصيل والتركيب</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">استخدامات النباتات</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/home-plants/300/200" alt="نباتات المنازل" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المنازل والفلل</h3>
              <p className="text-accent">نباتات داخلية وخارجية للمنازل</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/office-plants/300/200" alt="نباتات المكاتب" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المكاتب والشركات</h3>
              <p className="text-accent">نباتات تزين المكاتب وتحسن الجو</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/garden-plants/300/200" alt="نباتات الحدائق" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحدائق والمنتزهات</h3>
              <p className="text-accent">نباتات وأشجار للحدائق العامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اطلب نباتاتك الآن</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            اختر من مجموعتنا الواسعة من النباتات عالية الجودة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-dark font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg"
            >
              <Phone className="inline h-5 w-5 ml-2" />
              اطلب استشارة مجانية
            </Link>
            <a
              href="mailto:info@greenlife.com"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-dark transition duration-300 text-lg"
            >
              <Mail className="inline h-5 w-5 ml-2" />
              info@greenlife.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlantSupplyPage;
