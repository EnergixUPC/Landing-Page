let idioma = 'es';
const translateBtn = document.getElementById('translateBtn');

function q(selector) { return document.querySelector(selector); }
function qa(selector) { return Array.from(document.querySelectorAll(selector)); }

function safeSetText(selector, text, index = null) {
  if (index === null) {
    const el = q(selector);
    if (el) el.textContent = text;
  } else {
    const list = document.querySelectorAll(selector);
    if (list && list[index]) list[index].textContent = text;
  }
}
function safeSetHTML(selector, html, index = null) {
  if (index === null) {
    const el = q(selector);
    if (el) el.innerHTML = html;
  } else {
    const list = document.querySelectorAll(selector);
    if (list && list[index]) list[index].innerHTML = html;
  }
}
function safePlaceholder(selector, text, index = 0) {
  const list = document.querySelectorAll(selector);
  if (list && list[index]) list[index].placeholder = text;
}
function setListTexts(listSelector, texts = []) {
  const items = qa(listSelector + ' .fListItem');
  for (let i = 0; i < texts.length; i++) {
    const li = items[i];
    if (!li) continue;
    const a = li.querySelector('a');
    if (a) a.textContent = texts[i];
    else li.textContent = texts[i];
  }
}
function setGenericListTexts(texts = []) {
  const items = qa('.fListItem');
  for (let i = 0; i < texts.length; i++) {
    const li = items[i];
    if (!li) continue;
    const a = li.querySelector('a');
    if (a) a.textContent = texts[i];
    else li.textContent = texts[i];
  }
}

// Traducciones actualizadas
const nav_en = [
  'Home', 'Benefits', 'Products', 'Subscriptions', 'Our Team', 'FAQ', 'Try Now', 'Sign In'
];
const nav_es = [
  'Inicio', 'Beneficios', 'Productos', 'Suscripciones', 'Nuestro Equipo', 'FAQ', 'Probar ahora', 'Iniciar Sesión'
];

const beneficiosTitle_en = 'Why Choose Energix?';
const beneficiosTitle_es = '¿Por qué Elegir Energix?';

const beneficiosSubtitle_en = 'Transform the way you manage your energy.';
const beneficiosSubtitle_es = 'Transforma la manera en que gestionas tu energía.';

const beneficios_en = [
  {
    title: 'Energy Saving',
    desc: 'Automatic optimization of energy consumption that reduces operating costs and improves home sustainability.',
    iconAlt: 'Energy Saving'
  },
  {
    title: 'Real-Time Monitoring',
    desc: 'Monitor energy consumption on all your devices from our SEMS app, wherever you are.',
    iconAlt: 'Monitoring'
  },
  {
    title: 'Environmental Care',
    desc: 'Contribute to reducing your carbon footprint by adopting more efficient and sustainable consumption habits.',
    iconAlt: 'Environmental Care'
  },
  {
    title: 'Technical Support',
    desc: 'Our team provides continuous support and updates to keep the system running optimally.',
    iconAlt: 'Technical Support'
  },
  {
    title: 'Personalized Alerts',
    desc: 'Receive notifications about excessive consumption or anomalies in your home to take immediate corrective actions.',
    iconAlt: 'Personalized Alerts'
  },
  {
    title: 'Access to SEMS',
    desc: 'Our web application is the solution to your energy problems, offering you total control over your consumption.',
    iconAlt: 'Access to SEMS'
  }
];

const beneficios_es = [
  {
    title: 'Ahorro Energético',
    desc: 'Optimización automática del consumo energético que reduce costos operativos y mejora la sostenibilidad del hogar.',
    iconAlt: 'Ahorro Energético'
  },
  {
    title: 'Monitoreo en Tiempo Real',
    desc: 'Monitorea el consumo de energía en todos tus dispositivos desde nuestra aplicación SEMS, estés donde estés.',
    iconAlt: 'Monitoreo'
  },
  {
    title: 'Cuidado del Medio Ambiente',
    desc: 'Contribuye a la reducción de tu huella de carbono al adoptar hábitos de consumo más eficientes y sostenibles.',
    iconAlt: 'Cuidado del Medio Ambiente'
  },
  {
    title: 'Soporte Técnico',
    desc: 'Nuestro equipo brinda soporte continuo y actualizaciones para mantener el sistema funcionando de manera óptima.',
    iconAlt: 'Soporte Técnico'
  },
  {
    title: 'Alertas Personalizadas',
    desc: 'Recibe notificaciones sobre consumo excesivo o anomalías en tu hogar para tomar acciones correctivas inmediatas.',
    iconAlt: 'Alertas Personalizadas'
  },
  {
    title: 'Acceso a SEMS',
    desc: 'Nuestra aplicación web es la solución a tus problemas energéticos, ofreciéndote control total sobre tu consumo.',
    iconAlt: 'Acceso a SEMS'
  }
];

const products_en = [
  {
    title: 'Smart Plug',
    price: 'S/39.00',
    desc: 'A device that connects to a conventional power outlet and allows you to control the switching on and off of electrical devices remotely.'
  },
  {
    title: 'Gas Water Heater',
    price: 'S/799.90',
    desc: 'A water heater that uses natural gas (NG) or liquefied petroleum gas (LPG) as an energy source. It offers advantages such as greater energy efficiency and operation independent of electricity.'
  },
  {
    title: 'Smart Outlet',
    price: 'S/79.00',
    desc: 'A device that connects to a conventional power outlet. Managed through mobile apps and compatible with voice assistants like Alexa and Google Assistant.'
  },
  {
    title: 'LED Bulbs',
    price: 'S/29.90',
    desc: 'An efficient lighting source that uses semiconductor technology to produce light. Offers advantages such as low energy consumption, long life, instant ignition, and less heat emission compared to traditional bulbs.'
  },
  {
    title: 'Smart Water Heater',
    price: 'S/699.90',
    desc: 'An electric water heater that incorporates advanced technologies to optimize energy consumption and adapt to your usage habits.'
  }
];

const products_es = [
  {
    title: 'Enchufe Inteligente',
    price: 'S/39.00',
    desc: 'Un dispositivo que se conecta a la toma de corriente convencional y permite controlar el encendido y apagado de dispositivos eléctricos de forma remota'
  },
  {
    title: 'Terma a Gas',
    price: 'S/799.90',
    desc: 'Un calentador de agua que utiliza gas natural (GN) o gas licuado de petróleo (GLP) como fuente de energía. Ofrece ventajas como mayor eficiencia energética y funcionamiento independiente de la electricidad.'
  },
  {
    title: 'Tomacorriente Inteligente',
    price: 'S/79.00',
    desc: 'Un dispositivo que se conecta a una toma de corriente convencional. Se gestionan a través de aplicaciones móviles y son compatibles con asistentes de voz como Alexa y Google Assistant.'
  },
  {
    title: 'Focos LED',
    price: 'S/29.90',
    desc: 'Una fuente de iluminación eficiente que utiliza tecnología de semiconductores para producir luz. Ofrece ventajas como bajo consumo energético, larga vida útil, encendido instantáneo y menor emisión de calor en comparación con bombillas tradicionales.'
  },
  {
    title: 'Terma Inteligente',
    price: 'S/699.90',
    desc: 'Un calentador de agua eléctrico que incorpora tecnologías avanzadas para optimizar el consumo energético y adaptarse a tus hábitos de uso.'
  }
];

const suscripcionesTitle_en = 'Subscriptions';
const suscripcionesTitle_es = 'Suscripciones';

const suscripcionesSubtitle_en = 'Get full access and start saving today';
const suscripcionesSubtitle_es = 'Obtén acceso completo y comienza a ahorrar hoy mismo';

const pricing_en = [
  {
    plan: 'Basic',
    subtitle: 'Perfect for your home',
    price: 'S/15',
    period: '/month',
    features: [
      'Real-time consumption monitoring',
      'Excessive consumption alerts',
      'Monthly savings reports',
      'Email support'
    ],
    button: 'Subscribe'
  },
  {
    plan: 'Premium',
    subtitle: 'For demanding users',
    price: 'S/25',
    period: '/month',
    features: [
      'Everything in the Basic plan',
      'Detailed analysis per device',
      'Personalized savings recommendations',
      'Comparisons with similar households',
      '24/7 priority support'
    ],
    button: 'Subscribe'
  },
  {
    plan: 'Annual',
    subtitle: 'The complete solution',
    price: 'S/160',
    period: '/year',
    features: [
      'Everything in the Premium plan for one year',
      'Save more than 30%',
      'Early access to new features',
      'Free installation of a smart device'
    ],
    button: 'Subscribe'
  }
];

const pricing_es = [
  {
    plan: 'Básico',
    subtitle: 'Perfecto para tu hogar',
    price: 'S/15',
    period: '/mes',
    features: [
      'Monitoreo de consumo en tiempo real',
      'Alertas de consumo excesivo',
      'Reportes mensuales de ahorro',
      'Soporte por correo electrónico'
    ],
    button: 'Suscribirse'
  },
  {
    plan: 'Premium',
    subtitle: 'Para usuarios exigentes',
    price: 'S/25',
    period: '/mes',
    features: [
      'Todo lo del plan Básico',
      'Análisis detallado por dispositivo',
      'Recomendaciones personalizadas de ahorro',
      'Comparativas con hogares similares',
      'Soporte prioritario 24/7'
    ],
    button: 'Suscribirse'
  },
  {
    plan: 'Anual',
    subtitle: 'La solución completa',
    price: 'S/160',
    period: '/año',
    features: [
      'Todo lo del plan Premium por un año',
      'Ahorra más de un 30%',
      'Acceso anticipado a nuevas funcionalidades',
      'Instalación de un dispositivo inteligente gratis'
    ],
    button: 'Suscribirse'
  }
];

const mvvSubtitle_en = 'Promoting sustainability through innovation and commitment.';
const mvvSubtitle_es = 'Impulsando la sostenibilidad a través de la innovación y el compromiso.';

const mvvCards_en = [
  {
    title: 'Mission',
    desc: 'Our mission is to develop a tool that helps people monitor, understand, and optimize their energy consumption, promoting responsible habits that benefit their economy.'
  },
  {
    title: 'Vision',
    desc: 'Our vision is to be recognized as a leading platform in energy management for homes, offering smart solutions that allow people to take full control of their consumption and reduce their expenses.'
  },
  {
    title: 'Values',
    desc: 'We believe in constant innovation to optimize energy, sustainability for a greener future, and empowering people to make smart decisions.'
  }
];

const mvvCards_es = [
  {
    title: 'Misión',
    desc: 'Nuestra misión es desarrollar una herramienta que ayude a las personas a monitorear, entender y optimizar su consumo energético, promoviendo hábitos responsables que beneficien a su economía.'
  },
  {
    title: 'Visión',
    desc: 'Nuestra visión es ser reconocidos como una plataforma líder en gestión energética para hogares, ofreciendo soluciones inteligentes que permitan a las personas tomar el control total de su consumo y reducir sus gastos.'
  },
  {
    title: 'Valores',
    desc: 'Creemos en la innovación constante para optimizar la energía, la sostenibilidad para un futuro más verde y el empoderamiento de las personas para que tomen decisiones inteligentes.'
  }
];

const teamMembers_en = [
  { name: 'Iker Barturen', sub: 'Studies Software Engineering at UPC. Responsible, meets deadlines, and supports teammates. Skilled in C++, C#, Python, and JavaScript frameworks.' },
  { name: 'Yeira Huaman', sub: 'Studies Software Engineering at UPC. Responsible and works well in teams. Knowledge in C++, Python, CSS, HTML, SQL, and Figma.' },
  { name: 'Andres Torres', sub: 'Studies Software Engineering at UPC. Good level in C++ and basic in Python. Responsible and collaborates in group work.' },
  { name: 'Alexis Encalada', sub: 'Studies Software Engineering at UPC. Responsible and perseverant. Contributes knowledge in C++ and Python, as well as video editing.' },
  { name: 'Mateo Loechle', sub: 'I am a 6th semester Software Engineering student. I like working in teams and learning new things.' }
];
const teamMembers_es = [
  { name: 'Iker Barturen', sub: 'Cursa Ingeniería de Software en la UPC. Es responsable, cumple con los plazos y apoya a sus compañeros. Conoce C++, C#, Python y frameworks de JavaScript' },
  { name: 'Yeira Huaman', sub: 'Estudia Ingeniería de Software en la UPC. Es responsable y trabaja bien en equipo. Tiene conocimientos en C++, Python, CSS, HTML, SQL y Figma' },
  { name: 'Andres Torres', sub: 'Cursa Ingeniería de Software en la UPC. Tiene buen nivel en C++ y básico en Python. Es responsable y colabora en trabajos grupales' },
  { name: 'Alexis Encalada', sub: 'Estudia Ingeniería de Software en la UPC. Es responsable y perseverante. Aporta conocimientos en C++ y Python, además de edición de videos' },
  { name: 'Mateo Loechle', sub: 'Soy estudiante de 6to ciclo de la carrera de Ingeniería de Software, me gusta trabajar en equipo y aprender cosas nuevas' }
];

const faqTitle_en = 'Frequently Asked Questions';
const faqTitle_es = 'Preguntas Frecuentes';

const faq_en = [
  {
    q: 'What is the Energy Management System (SEMS)?',
    a: 'SEMS is a web application that allows you to monitor and manage energy consumption in your home or business in real time. It provides detailed reports and alerts so you can make informed decisions about your consumption habits.'
  },
  {
    q: 'How does SEMS help me save money?',
    a: 'By identifying devices that consume the most energy, you can adjust your usage habits to reduce your electricity bill. Reports and personalized recommendations guide you to optimize your consumption.'
  },
  {
    q: 'Do I need to buy additional hardware to use SEMS?',
    a: 'Yes, the SEMS application works together with our smart devices (such as outlets and water heaters) that connect to your Wi-Fi network to measure energy consumption and send data to the platform.'
  },
  {
    q: 'Do you offer plans for businesses or only for homes?',
    a: 'Currently, our products and services are designed for home users. We are working on larger solutions for the future.'
  },
  {
    q: 'Can I try Energix without buying hardware?',
    a: 'Yes. The "Try Now" button gives you access to an interactive demo with simulated consumption data, with no device installation or sign-up required, so you can explore the platform before deciding.'
  }
];

const faq_es = [
  {
    q: '¿Qué es el Sistema de Gestión de Energía (SEMS)?',
    a: 'SEMS es una aplicación web que te permite monitorear y gestionar el consumo de energía en tu hogar o negocio en tiempo real. Te proporciona reportes detallados y alertas para que puedas tomar decisiones informadas sobre tus hábitos de consumo.'
  },
  {
    q: '¿Cómo me ayuda SEMS a ahorrar dinero?',
    a: 'Al identificar los dispositivos que consumen más energía, puedes ajustar tus hábitos de uso para reducir tu factura de electricidad. Los reportes y recomendaciones personalizadas te guían para optimizar tu consumo.'
  },
  {
    q: '¿Necesito comprar hardware adicional para usar SEMS?',
    a: 'Sí, la aplicación SEMS funciona en conjunto con nuestros dispositivos inteligentes (como tomacorrientes y termas) que se conectan a tu red Wi-Fi para medir el consumo de energía y enviar los datos a la plataforma.'
  },
  {
    q: '¿Ofrecen planes para empresas o solo para hogares?',
    a: 'Actualmente, nuestros productos y servicios están diseñados para usuarios domésticos. Estamos trabajando en soluciones más grandes para el futuro.'
  },
  {
    q: '¿Puedo probar Energix sin comprar hardware?',
    a: 'Sí. Con el botón "Probar ahora" accedes a una demo interactiva con datos de consumo simulados, sin necesidad de instalar ningún dispositivo ni registrarte, para que conozcas la plataforma antes de decidir.'
  }
];

const footerTitles_en = [
  'Energy saving options:',
  'Benefits of energy saving:',
  'More information',
  'Contact Us',
  'Social Media'
];
const footerTitles_es = [
  'Opciones sobre el ahorro de energía:',
  'Beneficios de ahorrar energía',
  'Más información',
  'Contactanos',
  'Redes Sociales'
];

const footerList1_en = [
  'Efficient use of appliances',
  'Thermal insulation in walls and ceilings',
  'Turn off lights and electronics when not in use',
  'Use energy-efficient LED lighting',
  'Opt for renewable energy sources'
];
const footerList1_es = [
  'Uso eficiente de electrodomésticos',
  'Aislamiento térmico en paredes y techos',
  'Apagar luces y aparatos electrónicos cuando no se use',
  'Usar iluminación LED de bajo consumo',
  'Optar por energías renovables para el hogar'
];

const footerList2_en = [
  'Reduce electricity costs',
  'Decrease carbon footprint',
  'Contribute to sustainability',
  'Extend appliance lifespan',
  'Improve home energy efficiency'
];
const footerList2_es = [
  'Reduce los costos de electricidad',
  'Disminuye la huella de carbono',
  'Contribuye a la sostenibilidad',
  'Prolonga la vida útil de los electrodomésticos',
  'Mejora la eficiencia energética'
];

const footerList3_en = [
  'Energy saving',
  '7 tips to reduce home consumption',
  'Devices to save electricity',
  'The Aquae challenge',
  'Osinergmin'
];
const footerList3_es = [
  'El ahorro energético',
  '7 consejos para disminuir el consumo en casa',
  'Aparatos para ahorrar luz y energía eléctrica',
  'El reto Aquae',
  'Osinergmin'
];

if (translateBtn) {
  translateBtn.addEventListener('click', () => {
    try {
      if (idioma === 'es') {
        // NAV
        const navItems = qa('.menuItem a');
        navItems.forEach((a, i) => { if (nav_en[i]) a.textContent = nav_en[i]; });
        if (q('.navActions .buttonDemo')) q('.navActions .buttonDemo').textContent = nav_en[6];
        if (q('.navActions .button:not(.buttonDemo)')) q('.navActions .button:not(.buttonDemo)').textContent = nav_en[7];

        // HERO
        if (q('.backgroundTitle')) safeSetHTML('.backgroundTitle', hero_en);

        // BENEFICIOS
        safeSetText('.beneficiosTitle', beneficiosTitle_en);
        safeSetText('.beneficiosSubtitle', beneficiosSubtitle_en);
        qa('.beneficioItem').forEach((item, idx) => {
          const title = item.querySelector('.beneficioItemTitle');
          const desc = item.querySelector('p');
          const icon = item.querySelector('img');
          if (title && beneficios_en[idx]) title.textContent = beneficios_en[idx].title;
          if (desc && beneficios_en[idx]) desc.textContent = beneficios_en[idx].desc;
          if (icon && beneficios_en[idx]) icon.alt = beneficios_en[idx].iconAlt;
        });

        // PRODUCTOS
        qa('.product').forEach((prod, idx) => {
          const title = prod.querySelector('.productTitle');
          const price = prod.querySelector('.productPrice');
          const desc = prod.querySelector('.productDesc');
          if (products_en[idx]) {
            if (title) title.textContent = products_en[idx].title;
            if (price) price.textContent = products_en[idx].price;
            if (desc) desc.textContent = products_en[idx].desc;
          }
        });
        qa('.buyButton .button').forEach(b => { if (b) b.textContent = 'Buy'; });

        // SUSCRIPCIONES
        safeSetText('.suscripcionesTitle', suscripcionesTitle_en);
        safeSetText('.suscripcionesSubtitle', suscripcionesSubtitle_en);
        qa('.pricing-card').forEach((card, idx) => {
          if (pricing_en[idx]) {
            const planTitle = card.querySelector('.plan-title');
            const planSubtitle = card.querySelector('.plan-subtitle');
            const planPrice = card.querySelector('.price');
            const period = card.querySelector('.period');
            const features = card.querySelectorAll('.plan-features li');
            const button = card.querySelector('.button');
            if (planTitle) planTitle.textContent = pricing_en[idx].plan;
            if (planSubtitle) planSubtitle.textContent = pricing_en[idx].subtitle;
            if (planPrice) planPrice.textContent = pricing_en[idx].price;
            if (period) period.textContent = pricing_en[idx].period;
            features.forEach((li, i) => {
              if (pricing_en[idx].features[i]) li.innerHTML = `<i class="check-icon">✔</i> ${pricing_en[idx].features[i]}`;
            });
            if (button) button.textContent = pricing_en[idx].button;
          }
        });
        qa('.tag').forEach(tag => { tag.textContent = 'Premium'; });

        // ABOUT THE TEAM (solo subtítulo y tarjetas, el título no cambia)
        safeSetText('.mvvSubtitle', mvvSubtitle_en);
        qa('.mvvCard').forEach((card, idx) => {
          const h3 = card.querySelector('h3');
          const p = card.querySelector('p');
          if (mvvCards_en[idx]) {
            if (h3) h3.textContent = mvvCards_en[idx].title;
            if (p) p.textContent = mvvCards_en[idx].desc;
          }
        });

        // TEAM MEMBERS
        safeSetText('.teamTitle', 'Our Team');
        qa('.member').forEach((m, idx) => {
          const name = m.querySelector('.memberTitle');
          const sub = m.querySelector('.memberSubtitle');
          if (teamMembers_en[idx]) {
            if (name) name.textContent = teamMembers_en[idx].name;
            if (sub) sub.textContent = teamMembers_en[idx].sub;
          }
        });

        // FAQ
        safeSetText('.faqTitle', faqTitle_en);
        qa('.faqItem').forEach((item, idx) => {
          const h3 = item.querySelector('.faqQuestion h3');
          const p = item.querySelector('.faqAnswer p');
          if (faq_en[idx]) {
            if (h3) h3.textContent = faq_en[idx].q;
            if (p) p.textContent = faq_en[idx].a;
          }
        });

        // FOOTER
        qa('.fMenuTitle').forEach((el, idx) => {
          if (footerTitles_en[idx]) el.textContent = footerTitles_en[idx];
        });
        setListTexts('.fList1', footerList1_en);
        setListTexts('.fList2', footerList2_en);
        setListTexts('.fList3', footerList3_en);
        safePlaceholder('.fInput', 'Your email');
        qa('.fButton').forEach((b, idx) => { if (b) b.textContent = 'Send'; });

        translateBtn.textContent = 'ES';
        idioma = 'en';
      } else {
        // NAV
        const navItems = qa('.menuItem a');
        navItems.forEach((a, i) => { if (nav_es[i]) a.textContent = nav_es[i]; });
        if (q('.navActions .buttonDemo')) q('.navActions .buttonDemo').textContent = nav_es[6];
        if (q('.navActions .button:not(.buttonDemo)')) q('.navActions .button:not(.buttonDemo)').textContent = nav_es[7];

        // HERO
        if (q('.backgroundTitle')) safeSetHTML('.backgroundTitle', hero_es);

        // BENEFICIOS
        safeSetText('.beneficiosTitle', beneficiosTitle_es);
        safeSetText('.beneficiosSubtitle', beneficiosSubtitle_es);
        qa('.beneficioItem').forEach((item, idx) => {
          const title = item.querySelector('.beneficioItemTitle');
          const desc = item.querySelector('p');
          const icon = item.querySelector('img');
          if (title && beneficios_es[idx]) title.textContent = beneficios_es[idx].title;
          if (desc && beneficios_es[idx]) desc.textContent = beneficios_es[idx].desc;
          if (icon && beneficios_es[idx]) icon.alt = beneficios_es[idx].iconAlt;
        });

        // PRODUCTOS
        qa('.product').forEach((prod, idx) => {
          const title = prod.querySelector('.productTitle');
          const price = prod.querySelector('.productPrice');
          const desc = prod.querySelector('.productDesc');
          if (products_es[idx]) {
            if (title) title.textContent = products_es[idx].title;
            if (price) price.textContent = products_es[idx].price;
            if (desc) desc.textContent = products_es[idx].desc;
          }
        });
        qa('.buyButton .button').forEach(b => { if (b) b.textContent = 'Comprar'; });

        // SUSCRIPCIONES
        safeSetText('.suscripcionesTitle', suscripcionesTitle_es);
        safeSetText('.suscripcionesSubtitle', suscripcionesSubtitle_es);
        qa('.pricing-card').forEach((card, idx) => {
          if (pricing_es[idx]) {
            const planTitle = card.querySelector('.plan-title');
            const planSubtitle = card.querySelector('.plan-subtitle');
            const planPrice = card.querySelector('.price');
            const period = card.querySelector('.period');
            const features = card.querySelectorAll('.plan-features li');
            const button = card.querySelector('.button');
            if (planTitle) planTitle.textContent = pricing_es[idx].plan;
            if (planSubtitle) planSubtitle.textContent = pricing_es[idx].subtitle;
            if (planPrice) planPrice.textContent = pricing_es[idx].price;
            if (period) period.textContent = pricing_es[idx].period;
            features.forEach((li, i) => {
              if (pricing_es[idx].features[i]) li.innerHTML = `<i class="check-icon">✔</i> ${pricing_es[idx].features[i]}`;
            });
            if (button) button.textContent = pricing_es[idx].button;
          }
        });
        qa('.tag').forEach(tag => { tag.textContent = 'Premium'; });

        // ABOUT THE TEAM (solo subtítulo y tarjetas, el título no cambia)
        safeSetText('.mvvSubtitle', mvvSubtitle_es);
        qa('.mvvCard').forEach((card, idx) => {
          const h3 = card.querySelector('h3');
          const p = card.querySelector('p');
          if (mvvCards_es[idx]) {
            if (h3) h3.textContent = mvvCards_es[idx].title;
            if (p) p.textContent = mvvCards_es[idx].desc;
          }
        });

        // TEAM MEMBERS
        safeSetText('.teamTitle', 'Nuestro Equipo');
        qa('.member').forEach((m, idx) => {
          const name = m.querySelector('.memberTitle');
          const sub = m.querySelector('.memberSubtitle');
          if (teamMembers_es[idx]) {
            if (name) name.textContent = teamMembers_es[idx].name;
            if (sub) sub.textContent = teamMembers_es[idx].sub;
          }
        });

        // FAQ
        safeSetText('.faqTitle', faqTitle_es);
        qa('.faqItem').forEach((item, idx) => {
          const h3 = item.querySelector('.faqQuestion h3');
          const p = item.querySelector('.faqAnswer p');
          if (faq_es[idx]) {
            if (h3) h3.textContent = faq_es[idx].q;
            if (p) p.textContent = faq_es[idx].a;
          }
        });

        // FOOTER
        qa('.fMenuTitle').forEach((el, idx) => {
          if (footerTitles_es[idx]) el.textContent = footerTitles_es[idx];
        });
        setListTexts('.fList1', footerList1_es);
        setListTexts('.fList2', footerList2_es);
        setListTexts('.fList3', footerList3_es);
        safePlaceholder('.fInput', 'Tu correo');
        qa('.fButton').forEach((b, idx) => { if (b) b.textContent = 'Enviar'; });

        translateBtn.textContent = 'EN';
        idioma = 'es';
      }
    } catch (err) {
      console.error('Error en cambio de idioma:', err);
    }
  });
} else {
  console.warn('translateBtn no encontrado en el DOM');
}