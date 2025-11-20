import { Card } from "./ui/card";
import { Award, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TalentsGallery() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // English version of talents data
  const talentsEn = [
    {
      id: 1,
      name: "General Administration Department",
      image: "images/card1.jpg",
      officers: [
        "Block Development Officer (BDO)",
        "Assistant Administration Officer",
        "Junior Administration Officer",
        "Extension Officer Health",
        "Extension Officer Statistics",
        "Staff appointment, transfer, and training",
        "Coordination of all departments",
        "Registration and report preparation",
        "Meeting organization and proceedings"
      ],
      description: "Overall administrative management of Panchayat Samiti, staff control, and office operations management. Responsible for coordinating all departments and ensuring smooth functioning of the Panchayat Samiti office in Rajura.",
    },
    {
      id: 2,
      name: "Education Department",
      image: "images/card2.jpg",
      officers: [
        "Education Coordinator",
        "School Supervisor",
        "Extension Officer Education",
        "Primary and secondary education schemes",
        "School infrastructure monitoring",
        "Teacher training programs",
        "Scholarship schemes for students"
      ],
      description: "Implementation of educational programs in rural areas and supervision of school infrastructure. Manages mid-day meal schemes, student enrollment, and educational development in Rajura villages.",
    },
    {
      id: 3,
      name: "Accounts Department",
      image: "images/card3.jpg",
      officers: [
       "Finance Officer",
        "Assistant Accounts Officer",
        "Junior Accounts Officer",
        "Senior Assistant",
        "Annual budget preparation",
        "Fund allocation and accounting",
        "Financial report preparation",
        "Audit and inspection"
      ],
      description: "Financial management of Panchayat Samiti including budgeting, fund allocation and accounting. Handles all financial transactions and maintains records for Rajura Panchayat Samiti activities.",
    },
    {
      id: 4,
      name: "Panchayat Department",
      image: "images/card4.jpg",
      officers: [
        "Extension Officer Panchayat",
        "Senior Assistant",
        "Junior Assistant",
        "Taluka Manager",
         "Monitoring Gram Panchayat operations",
        "Panchayati Raj system implementation",
        "Gram Sabha and committee meetings",
        "Local government institution training"
      ],
      description: "Coordination and guidance with Gram Panchayats for effective local governance. Works with village councils under Rajura jurisdiction to implement rural development programs.",
    },
    {
      id: 5,
      name: "Social Welfare Department",
      image: "images/card5.jpg",
      officers: [
        "Social Welfare Officer",
        "Supervisor",
        "Senior Assistant",
        "Scheduled Caste/Tribe welfare",
        "Women and child welfare",
        "Schemes for disabled persons",
        "Social security pensions"
      ],
      description: "Welfare schemes for marginalized communities including SC/ST, women and children. Implements various social security and empowerment programs in Rajura region.",
    },
    {
      id: 6,
      name: "Health Department",
      image: "images/card6.jpg",
      officers: [
        "Health Supervisor",
        "Extension Officer Health",
        "Medical Officer",
        "Primary Health Centers management",
        "Immunization programs",
        "Health camp organization",
        "Birth-death registration"
      ],
      description: "Management of rural health services including primary healthcare and immunization programs. Organizes health camps and manages PHCs in Rajura area.",
    },
    {
      id: 7,
      name: "Agriculture Department",
      image: "images/card7.jpg",
      officers: [
        "Agriculture Officer",
        "Extension Officer Agriculture",
        "Technical Assistant Agriculture",
        "Agricultural scheme implementation",
        "Technical guidance to farmers",
        "Seeds, fertilizers distribution",
        "Agricultural exhibitions"
      ],
      description: "Agricultural development and farmer welfare through various schemes and technical guidance. Supports farmers in Rajura with modern farming techniques and resources.",
    },
    {
      id: 8,
      name: "Construction Department",
      image: "images/card8.jpg",
      officers: [
        "Junior Engineer",
        "Architectural Engineering Assistant",
        "Senior Assistant",
         "Roads and bridges construction",
        "Public building construction",
        "Water conservation projects",
        "Construction quality inspection"
      ],
      description: "Infrastructure development including roads, buildings and water conservation projects. Oversees construction and maintenance work in Rajura Panchayat Samiti area.",
    },
    {
      id: 9,
      name: "Animal Husbandry Department",
      image: "images/card9.jpg",
      officers: [
        "Veterinary Doctor",
        "Liveestock Supervisor",
        "Technical Assistant",
        "Veterinary services",
        "Livestock development schemes",
        "Artificial insemination centers",
        "Livestock exhibitions"
      ],
      description: "Livestock development and healthcare services for animals in rural areas. Provides veterinary care and promotes animal husbandry in Rajura villages.",
    },
    {
      id: 10,
      name: "Gharkul Department",
      image: "images/card10.jpg",
      officers: [
        "Housing Officer",
        "Technical Assistant",
        "Junior Engineer",
        "Gharkul scheme implementation",
        "House construction grants",
        "House inspection and approval",
        "List preparation and verification"
      ],
      description: "Implementation of housing schemes for eligible beneficiaries in rural areas. Manages Gharkul scheme for SC, ST, VJNT and OBC communities in Rajura.",
    },
    {
      id: 11,
      name: "Water Sanitation Mission",
      image: "images/card11.jpg",
      officers: [
        "Taluka Coordinator",
        "Technical Assistant",
        "Field Supervisor",
        "Swachh Bharat Mission implementation",
        "Toilet construction",
        "Water supply schemes",
        "Sanitation awareness programs"
      ],
      description: "Cleanliness and water supply management under Swachh Bharat Mission. Implements Jal Jeevan Mission for tap water connections in Rajura rural areas.",
    },
    {
      id: 12,
      name: "MGNREGA Cell",
      image: "images/card10.jpg",
      officers: [
        "Assistant Program Officer",
        "Technical Assistant",
        "Computer Operator",
        "MGNREGA scheme implementation",
        "Job card distribution",
        "Guaranteed work days",
        "Project planning and execution"
      ],
      description: "Rural employment generation through Mahatma Gandhi National Rural Employment Guarantee Act. Creates durable assets and provides employment in Rajura region.",
    },
    {
      id: 13,
      name: "PESA Cell",
      image: "images/card10.jpg",
      officers: [
        "Tribal Development Officer",
        "Field Coordinator",
        "Social Worker",
        "PESA Act implementation",
        "Tribal community development",
        "Forest Rights Committee work",
        "Traditional resources protection"
      ],
      description: "Welfare and development of tribal communities under PESA Act provisions. Empowers Gram Sabhas in scheduled areas of Rajura for self-governance.",
    },
  ];

  // Marathi version of talents data
  const talentsMr = [
    {
      id: 1,
      name: "सामान्य प्रशासन विभाग",
      image: "images/card1.jpg",
      officers: [
        "विकास खंड अधिकारी (BDO)",
        "सहाय्यक प्रशासन अधिकारी",
        "कनिष्ठ प्रशासन अधिकारी",
        "विस्तार अधिकारी आरोग्य",
        "विस्तार अधिकारी सांखिकी",
        "कर्मचाऱ्यांची नियुक्ती, बदली, प्रशिक्षण",
        "सर्व विभागांचे समन्वयन",
        "नोंदणी आणि अहवाल तयार करणे",
        "बैठकांचे आयोजन आणि कार्यवाही"
      ],
      description: "संपूर्ण पंचायत समितीचे प्रशासकीय व्यवस्थापन, कर्मचाऱ्यांचे नियंत्रण, कार्यालयीन कामकाजाचे संचालन. राजुरा मधील पंचायत समिती कार्यालयाच्या सुरळीत कार्यासाठी सर्व विभागांचे समन्वयन करण्यासाठी जबाबदार.",
    },
    {
      id: 2,
      name: "शिक्षण विभाग",
      image: "images/card2.jpg",
      officers: [
        "शिक्षण समन्वयक",
        "शाळा पर्यवेक्षक",
        "विस्तार अधिकारी शिक्षण",
        "प्राथमिक आणि माध्यमिक शिक्षण योजना",
        "शाळा पायाभूत सुविधांची देखरेख",
        "शिक्षक प्रशिक्षण कार्यक्रम",
        "विद्यार्थ्यांसाठी शिष्यवृत्ती योजना"
      ],
      description: "ग्रामीण भागातील शैक्षणिक कार्यक्रमांची अंमलबजावणी आणि शाळा पायाभूत सुविधांची देखरेख. मिड-डे मील योजना, विद्यार्थ्यांची नोंदणी आणि राजुरा गावांमधील शैक्षणिक विकास व्यवस्थापित करते.",
    },
    {
      id: 3,
      name: "लेखा विभाग",
      image: "images/card3.jpg",
      officers: [
        "वित्त अधिकारी",
        "सहाय्यक लेखा अधिकारी",
        "कनिष्ठ लेखा अधिकारी",
        "वरिष्ठ सहाय्यक",
        "वार्षिक अर्थसंकल्प तयार करणे",
        "निधीचे वाटप आणि हिशोब",
        "आर्थिक अहवाल तयार करणे",
        "लेखापरीक्षण आणि तपासणी"
      ],
      description: "पंचायत समितीचे आर्थिक व्यवस्थापन यासह अर्थसंकल्प, निधी वाटप आणि लेखा. राजुरा पंचायत समिती क्रियाकलापांसाठी सर्व आर्थिक व्यवहार हाताळते आणि नोंदी राखते.",
    },
    {
      id: 4,
      name: "पंचायत विभाग",
      image: "images/card4.jpg",
      officers: [
        "विस्तार अधिकारी पंचायत",
        "वरिष्ठ सहाय्यक",
        "कनिष्ठ सहाय्यक",
        "तालुका व्यवस्थापक",
        "ग्रामपंचायतींचे कामकाज तपासणे",
        "पंचायती राज व्यवस्थेची अंमलबजावणी",
        "ग्रामसभा आणि समिती बैठका",
        "स्थानिक स्वराज्य संस्था प्रशिक्षण"
      ],
      description: "ग्रामपंचायतींशी प्रभावी स्थानिक शासनासाठी समन्वय आणि मार्गदर्शन. राजुरा अधिकारक्षेत्रातील ग्रामपंचायतींसोबत ग्रामीण विकास कार्यक्रम अंमलात आणण्यासाठी कार्य करते.",
    },
    {
      id: 5,
      name: "समाजकल्याण विभाग",
      image: "images/card5.jpg",
      officers: [
        "समाज कल्याण अधिकारी",
        "पर्यवेक्षक",
        "वरिष्ठ सहाय्यक",
        "अनुसूचित जाती-जमाती कल्याण",
        "महिला आणि बालकल्याण",
        "विकलांग व्यक्तींसाठी योजना",
        "सामाजिक सुरक्षा पेन्शन"
      ],
      description: "दुर्बल घटकांसाठी कल्याणकारी योजना यासह अनुसूचित जाती-जमाती, महिला आणि मुले. राजुरा क्षेत्रात विविध सामाजिक सुरक्षा आणि सक्षमीकरण कार्यक्रम अंमलात आणते.",
    },
    {
      id: 6,
      name: "आरोग्य विभाग",
      image: "images/card6.jpg",
      officers: [
        "आरोग्य पर्यवेक्षक",
        "विस्तार अधिकारी आरोग्य",
        "वैद्यकीय अधिकारी",
         "प्राथमिक आरोग्य केंद्र व्यवस्थापन",
        "लसीकरण कार्यक्रम",
        "आरोग्य शिबिर आयोजन",
        "जन्म-मृत्यू नोंदणी"
      ],
      description: "ग्रामीण आरोग्य सेवांचे व्यवस्थापन यासह प्राथमिक आरोग्यसेवा आणि लसीकरण कार्यक्रम. आरोग्य शिबिरे आयोजित करते आणि राजुरा क्षेत्रातील प्राथमिक आरोग्य केंद्रांचे व्यवस्थापन करते.",
    },
    {
      id: 7,
      name: "कृषी विभाग",
      image: "images/card7.jpg",
      officers: [
         "कृषी अधिकारी",
        "विस्तार अधिकारी कृषी",
        "तांत्रिक सहाय्यक कृषी",
        "कृषी योजना अंमलबजावणी",
        "शेतकऱ्यांना तांत्रिक मार्गदर्शन",
        "बियाणे, खते वितरण",
        "कृषी प्रदर्शने आयोजित करणे"
      ],
      description: "विविध योजना आणि तांत्रिक मार्गदर्शनाद्वारे कृषी विकास आणि शेतकरी कल्याण. राजुरा मधील शेतकऱ्यांना आधुनिक शेती तंत्रज्ञान आणि संसाधनांसह पाठिंबा देतो.",
    },
    {
      id: 8,
      name: "बांधकाम विभाग",
      image: "images/card8.jpg",
      officers: [
        "कनिष्ठ अभियंता",
        "स्थापत्य अभियांत्रिकी सहाय्यक",
        "वरिष्ठ सहाय्यक",
         "रस्ते आणि पूल बांधकाम",
        "सार्वजनिक इमारत बांधकाम",
        "जलसंधारण प्रकल्प",
        "बांधकाम दर्जा तपासणी"
      ],
      description: "रस्ते, इमारती आणि जलसंधारण प्रकल्प यासह पायाभूत सुविधा विकास. राजुरा पंचायत समिती क्षेत्रातील बांधकाम आणि देखभाल कामावर देखरेख करते.",
    },
    {
      id: 9,
      name: "पशुसंवर्धन विभाग",
      image: "images/card9.jpg",
      officers: [
       "पशुवैद्यकीय डॉक्टर",
        "पशुधन पर्यवेक्षक",
        "तांत्रिक सहाय्यक",
        "पशुवैद्यकीय सेवा",
        "पशुधन विकास योजना",
        "कृत्रिम गर्भधारणा केंद्रे",
        "पशुधन प्रदर्शने"
      ],
      description: "ग्रामीण भागातील प्राण्यांसाठी पशुधन विकास आणि आरोग्य सेवा. राजुरा गावांमध्ये पशुवैद्यकीय सेवा पुरवते आणि पशुसंवर्धनाला प्रोत्साहन देते.",
    },
    {
      id: 10,
      name: "घरकुल विभाग",
      image: "images/card10.jpg",
      officers: [
         "गृहनिर्माण अधिकारी",
        "तांत्रिक सहाय्यक",
        "कनिष्ठ अभियंता",
        "घरकुल योजना अंमलबजावणी",
        "घरबांधणी अनुदान",
        "घरांची तपासणी आणि मंजुरी",
        "यादी तयार करणे आणि पडताळणी"
      ],
      description: "ग्रामीण भागातील पात्र लाभार्थ्यांसाठी गृहनिर्माण योजनांची अंमलबजावणी. राजुरा मधील एससी, एसटी, व्हीजेएनटी आणि मागासवर्गीय समुदायांसाठी घरकुल योजना व्यवस्थापित करते.",
    },
    {
      id: 11,
      name: "पाणी स्वच्छता मिशन",
      image: "images/card11.jpg",
      officers: [
        "तालुका समन्वयक",
        "तांत्रिक सहाय्यक",
        "क्षेत्र पर्यवेक्षक",
        "स्वच्छ भारत मिशन अंमलबजावणी",
        "शौचालय बांधकाम",
        "पाणीपुरवठा योजना",
        "स्वच्छता जागरूकता कार्यक्रम"
      ],
      description: "स्वच्छ भारत मिशन अंतर्गत स्वच्छता आणि पाणीपुरवठा व्यवस्थापन. राजुरा ग्रामीण भागात नळाचे पाणी जोडणीसाठी जल जीवन मिशन अंमलात आणते.",
    },
    {
      id: 12,
      name: "मनरेगा कक्ष",
      image: "images/card11.jpg",
      officers: [
        "सहाय्यक कार्यक्रम अधिकारी",
        "तांत्रिक सहाय्यक",
        "संगणक परिचालक",
        "मनरेगा योजना अंमलबजावणी",
        "जॉब कार्ड वितरण",
        "हमी कामाचे दिवस",
        "प्रकल्प नियोजन आणि अंमलबजावणी"
      ],
      description: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी कायद्याद्वारे ग्रामीण रोजगार निर्मिती. राजुरा क्षेत्रात टिकाऊ मालमत्ता निर्माण करते आणि रोजगार पुरवते.",
    },
    {
      id: 13,
      name: "पेसा कक्ष",
      image: "images/card11.jpg",
      officers: [
        "आदिवासी विकास अधिकारी",
        "क्षेत्र समन्वयक",
        "सामाजिक कार्यकर्ता",
        "पेसा कायदा अंमलबजावणी",
        "आदिवासी समुदाय विकास",
        "वन हक्क समिती कार्य",
        "परंपरागत संसाधने संरक्षण"
      ],
      description: "पेसा कायद्याच्या तरतुदींनुसार आदिवासी समुदायांचे कल्याण आणि विकास. राजुरा च्या अनुसूचित भागातील ग्रामसभांना स्वयंशासनासाठी सक्षम करते.",
    },
  ];

  // Select the appropriate data based on current language
  const talents = language === 'mr' ? talentsMr : talentsEn;

  const cardsPerSlide = 9;
  const totalSlides = Math.ceil(talents.length / cardsPerSlide);

  const nextSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (totalSlides > 1) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const getVisibleTalents = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const visibleTalents = talents.slice(startIndex, startIndex + cardsPerSlide);
    
    // Fill empty slots with placeholder cards if needed
    const emptySlots = cardsPerSlide - visibleTalents.length;
    if (emptySlots > 0) {
      return [
        ...visibleTalents,
        ...Array(emptySlots).fill(null).map((_, index) => ({
          id: `empty-${index}`,
          isEmpty: true
        }))
      ];
    }
    
    return visibleTalents;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openTalentModal = (talent) => {
    setSelectedTalent(talent);
    setIsModalOpen(true);
  };

  const closeTalentModal = () => {
    setIsModalOpen(false);
    setSelectedTalent(null);
  };

  // Function to truncate long text
  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full mb-4">
          <span className="text-sm">{t.talents.badge}</span>
        </div>
        <h2 className="text-4xl text-gray-900 mb-4">{t.talents.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.talents.description}
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Left Arrow - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <button
              onClick={prevSlide}
              style={{ marginTop: "850px" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500 transition-all duration-300"
              aria-label={language === 'mr' ? 'मागील स्लाइड' : 'Previous slide'}
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-orange-700" />
            </button>
          )}

          {/* Cards */}
          {getVisibleTalents().map((talent, index) => (
            talent.isEmpty ? (
              // Empty placeholder card
              <div key={talent.id} className="opacity-0 pointer-events-none">
                <Card className="rounded-xl shadow-md border p-0 overflow-hidden bg-white h-[400px]" />
              </div>
            ) : (
              <Card
                key={talent.id}
                className="rounded-xl shadow-md border p-0 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group flex flex-col h-[480px]"
              >
                <div className="w-full flex items-center justify-center py-4">
                  <div className="w-48 h-48 flex items-center justify-center">
                    <ImageWithFallback
                      src={talent.image}
                      alt={talent.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      fallbackSrc="images/default.png"
                    />
                  </div>
                </div>

                <h3 className="text-center text-xl font-semibold text-gray-900 py-4 border-b">
                  {talent.name}
                </h3>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Description with Read More */}
                  <div className="mb-4 flex-grow">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {truncateText(talent.description, 100)}
                    </p>
                    {/* Always show Read More button for all cards */}
                    <button
                      onClick={() => openTalentModal(talent)}
                      className="text-orange-600 hover:text-orange-800 text-sm font-medium mt-2 inline-flex items-center gap-1"
                    >
                      {language === 'mr' ? 'अधिक वाचा' : 'Read More'}
                      <Info className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Officers List */}
                  <ul className="text-gray-800 text-sm space-y-1 flex-grow">
                    {talent.officers?.slice(0, 3).map((officer, idx) => (
                      <li key={idx} className="flex items-start gap-6">
                        <span className="text-green-600 text-lg">›</span>
                        <span className="flex-1 text-xs">{officer}</span>
                      </li>
                    ))}
                    {talent.officers && talent.officers.length > 3 && (
                      <li className="text-orange-600 text-xs font-medium mt-2">
                        + {talent.officers.length - 3} {language === 'mr' ? 'अधिक' : 'more'}...
                      </li>
                    )}
                  </ul>
                </div>
              </Card>
            )
          ))}

          {/* Right Arrow - Only show if there are multiple slides */}
          {totalSlides > 1 && (
            <button
              onClick={nextSlide}
              style={{ marginTop: "850px" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-4 shadow-2xl hover:bg-orange-50 border-2 border-gray-300 hover:border-orange-500 transition-all duration-300"
              aria-label={language === 'mr' ? 'पुढील स्लाइड' : 'Next slide'}
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-orange-700" />
            </button>
          )}
        </div>

        {/* Slide Indicators - Only show if there are multiple slides */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={language === 'mr' ? `स्लाइड ${index + 1} वर जा` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Talent Detail Modal */}
      {isModalOpen && selectedTalent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedTalent.name}
                  </h3>
                </div>
                <button
                  onClick={closeTalentModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700">
                    <ImageWithFallback
                      src={selectedTalent.image}
                      alt={selectedTalent.name}
                      className="w-full h-full object-cover"
                      fallbackSrc="images/default.png"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'mr' ? 'विभागाचे वर्णन' : 'Department Description'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedTalent.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {language === 'mr' ? 'कर्मचारी तपशील' : 'Staff Details'}
                </h4>
                <ul className="space-y-2">
                  {selectedTalent.officers?.map((officer, idx) => (
                    <li key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-green-600 text-lg mt-0.5">›</span>
                      <span className="text-gray-700">{officer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex justify-end">
                <button
                  onClick={closeTalentModal}
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  {language === 'mr' ? 'बंद करा' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nominate Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-xl border hover:shadow-lg transition-all duration-300">
          <Award className="w-12 h-12 text-orange-500" />
          <div className="text-left">
            <h3 className="text-gray-900 mb-1 font-semibold">
              {t.talents.nominate.title}
            </h3>
            <p className="text-sm text-gray-600">
              {t.talents.nominate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}