const englishItems = [
  'The survey is based on field visit to constituencies and direct interaction with the people',
  'The methodology adopted was both structured and unstructured questionnaire, participative and non-participative observation, random samples and selective samples and group discussions.',
  'The largest group consisted of different age groups, different income groups, different social backgrounds (OC/BC/SC/ST and minorities), different occupations (Govt. and non-Govt.), male and female, students, agriculture & labour, businessmen, professionals, house wives, farmers and auto drivers etc.',
  'This is a trend setting survey because predicting candidate wise winning margin is a difficult process and a bit technical. We could successfully do it in 2017 UP assembly Elections and 2024 A.P assembly elections and we were correct to a large extent in many constituencies. This needs lot of planning and collecting error free data which sometimes may go wrong also. I hope you understand the difficulties and will appreciate our effort and overlook shortcomings. Your suggestions are highly appreciated.',
];

const hindiItems = [
  'यह सर्वेक्षण क्षेत्रों (निर्वाचन क्षेत्रों) के फील्ड विजिट और लोगों से सीधे संवाद पर आधारित है।',
  'अपनाई गई कार्यप्रणाली में संरचित एवं असंरचित प्रश्नावली, सहभागी एवं गैर-सहभागी अवलोकन, रैंडम सैंपल (यादृच्छिक नमूने) और चयनित नमूने तथा समूह चर्चा शामिल थे।',
  'सर्वेक्षण में विभिन्न आयु वर्गों, आय वर्गों, सामाजिक पृष्ठभूमियों (OC/BC/SC/ST एवं अल्पसंख्यक), विभिन्न व्यवसायों (सरकारी एवं गैर-सरकारी), पुरुष एवं महिला, छात्र, कृषि एवं श्रमिक, व्यवसायी, पेशेवर, गृहिणी, किसान और ऑटो चालकों आदि को शामिल किया गया।',
  'यह एक ट्रेंड सेटिंग सर्वेक्षण है क्योंकि प्रत्याशीवार जीत के अंतर की भविष्यवाणी करना एक कठिन और तकनीकी प्रक्रिया है। हमने इसे 2017 उत्तर प्रदेश विधानसभा चुनावों और 2024 आंध्र प्रदेश विधानसभा चुनावों में सफलतापूर्वक किया था और कई निर्वाचन क्षेत्रों में हमारे परिणाम काफी हद तक सही थे। यह प्रक्रिया काफी योजना और त्रुटिरहित डेटा संग्रह की मांग करती है, जो कभी-कभी गलत भी हो सकता है। हमें उम्मीद है कि आप इन कठिनाइयों को समझेंगे और हमारे प्रयासों की सराहना करेंगे तथा छोटी-मोटी कमियों को नज़रअंदाज़ करेंगे। आपके सुझावों का स्वागत है।',
];

export const Methodology = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Methodology/कार्यप्रणाली</h1>
      <div className="grid md:grid-cols-1 gap-6 text-sm leading-8">
        <div className="bg-white rounded-lg shadow-md py-6 px-10">
          <ol className="list-decimal space-y-2">
            {englishItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-md py-6 px-10">
          <ol className="list-decimal space-y-2">
            {hindiItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
