const PERSONAJES = [
  {
    "id": "rey",
    "role": "",
    "details": "Nacido en 1527",
    "profile": "Gobiernas una monarquía cuyos territorios se extienden por varios continentes. Tus decisiones tienen consecuencias que otros soportarán.",
    "goal": "Conservar el poder de la Corona y pasar a la posteridad.",
    "quote": "Has nacido para gobernar. Nadie te ha preguntado si sabes hacerlo. Por suerte, tampoco es necesario.",
    "portrait": "assets/images/personajes/rey.webp",
    "name": "Felipe II, Rey de las Españas",
    "group": "Éxito",
    "category": "",
    "bio": "Naces en la cúspide de una monarquía dinástica. Tus decisiones afectan a miles de personas.",
    "events": [
      {
        "title": "Heredas territorios que nunca has visitado.",
        "context": "Las posesiones dinásticas se transmiten por vínculos familiares, no por un concurso de méritos.",
        "sound": "recompensa",
        "choices": [
          {
            "text": "Aceptar modestamente la herencia",
            "result": "La corte proclama tu prudencia. Conservas las posesiones y recibes nuevos títulos.",
            "effects": {
              "dinero": 12,
              "salud": 0,
              "poder": 8
            },
            "resultTitle": "La corte proclama tu prudencia"
          },
          {
            "text": "Exigir un mapa más grande",
            "result": "Los cartógrafos trabajan toda la noche. Te felicitan por tu visión estratégica.",
            "effects": {
              "dinero": 5,
              "salud": 0,
              "poder": 8
            },
            "resultTitle": "Los cartógrafos trabajan toda la noche"
          }
        ],
        "shortTitle": "Heredas territorios que nunca has visitado"
      },
      {
        "title": "Una campaña militar ha agotado los recursos.",
        "context": "Las guerras de la Monarquía Hispánica implicaron grandes costes humanos y financieros.",
        "sound": "desastre",
        "choices": [
          {
            "text": "Ordenar un desfile",
            "result": "Se celebra el desfile. El coste recae sobre la Hacienda y los súbditos.",
            "effects": {
              "dinero": -12,
              "salud": 0,
              "poder": 3
            },
            "resultTitle": "Se celebra el desfile"
          },
          {
            "text": "Culpar a tus consejeros",
            "result": "Los consejeros se disculpan. Tu posición permanece intacta.",
            "effects": {
              "dinero": -4,
              "salud": 0,
              "poder": 2
            },
            "resultTitle": "Los consejeros se disculpan"
          }
        ],
        "shortTitle": "Una campaña militar ha agotado los recursos"
      },
      {
        "title": "La Hacienda suspende pagos.",
        "context": "La Corona de Felipe II acordó suspensiones de pagos en 1557, 1575 y 1596. Este episodio es una dramatización, no una cronología de 1600.",
        "sound": "ironia",
        "choices": [
          {
            "text": "Llamarlo reajuste financiero",
            "result": "¡Innovación económica! Los acreedores esperan y tú sigues reinando.",
            "effects": {
              "dinero": -8,
              "salud": 0,
              "poder": 1
            },
            "resultTitle": "Innovación económica Los acreedores esperan y tú sigues reinando"
          },
          {
            "text": "Organizar una ceremonia solemne",
            "result": "La ceremonia resulta magnífica. Las deudas siguen ahí, pero la música también.",
            "effects": {
              "dinero": -12,
              "salud": 0,
              "poder": 2
            },
            "resultTitle": "La ceremonia resulta magnífica"
          }
        ],
        "shortTitle": "La Hacienda suspende pagos"
      }
    ],
    "ending": {
      "title": "¡VICTORIA IMPERIAL!",
      "text": "La Corona continúa en tus manos. Los costes de tus decisiones se reparten entre quienes no pudieron tomarlas.",
      "sound": "victoria"
    },
    "story": {
      "title": "La gloria tiene sus gastos",
      "context": "1588: la Gran Armada, conocida como Armada Invencible, fracasa frente a Inglaterra. La Corona financia también a los Tercios de Flandes con impuestos, plata americana y crédito de banqueros, entre ellos genoveses.",
      "options": [
        {
          "text": "Ordenar que pinten una victoria gloriosa",
          "progress": "Mandas pintar una victoria de la Armada Invencible. Los barcos no regresan, pero el retrato es espléndido. La plata americana ayuda a pagar guerras y deudas con banqueros genoveses; buena parte de esa riqueza nunca se queda en Castilla. Tú conservas la Corona.",
          "final": ""
        },
        {
          "text": "Mandar construir barcos de oro macizo",
          "progress": "Ordenas barcos de oro. Tus ministros construyen navíos de madera y llaman a eso prudencia. Los Tercios siguen cobrando gracias a nuevos créditos y a la plata americana, comprometida en pagos a financieros, incluidos genoveses. Tu prestigio sobrevive.",
          "final": ""
        }
      ],
      "ending": "VICTORIA",
      "tagline": "Tu mayor acierto fue seguir siendo el rey."
    }
  },
  {
    "id": "noble",
    "role": "",
    "details": "",
    "profile": "Posees tierras, rentas y derechos señoriales. Estás convencido de que tu fortuna es fruto exclusivo de tu talento.",
    "goal": "Aumentar tu patrimonio sin que nadie lo confunda con trabajar.",
    "quote": "Todo lo que tienes te lo has ganado. Especialmente lo que heredaste.",
    "portrait": "assets/images/personajes/noble.webp",
    "name": "Don Gaspar de Villatorcida, Marqués de las Mil Herencias",
    "group": "Éxito",
    "category": "",
    "bio": "Tu patrimonio y tus relaciones cortesanas te ofrecen ventajas difíciles de alcanzar por nacimiento ajeno.",
    "events": [
      {
        "title": "Recibes tierras vinculadas a un mayorazgo.",
        "context": "Los mayorazgos permitían vincular patrimonios familiares bajo condiciones legales.",
        "sound": "recompensa",
        "choices": [
          {
            "text": "Aceptar la herencia",
            "result": "Los escribanos certifican tu talento hereditario.",
            "effects": {
              "dinero": 14,
              "salud": 0,
              "poder": 5
            },
            "resultTitle": "Los escribanos certifican tu talento hereditario"
          },
          {
            "text": "Quejarte del papeleo",
            "result": "Contratas a alguien para resolverlo. La renta continúa llegando.",
            "effects": {
              "dinero": 11,
              "salud": 0,
              "poder": 3
            },
            "resultTitle": "Contratas a alguien para resolverlo"
          }
        ],
        "shortTitle": "Recibes tierras vinculadas a un mayorazgo"
      },
      {
        "title": "Los arrendatarios solicitan una rebaja.",
        "context": "Las relaciones señoriales y las rentas variaban según territorio y época.",
        "sound": "problema",
        "choices": [
          {
            "text": "Delegar la respuesta",
            "result": "Tu administrador comunica que la petición será estudiada. Tus rentas quedan protegidas.",
            "effects": {
              "dinero": 0,
              "salud": 0,
              "poder": 1
            },
            "resultTitle": "Tu administrador comunica que la petición será estudiada"
          },
          {
            "text": "Pedir un banquete para reflexionar",
            "result": "El banquete es memorable. Los arrendatarios siguen esperando.",
            "effects": {
              "dinero": -5,
              "salud": 0,
              "poder": 0
            },
            "resultTitle": "El banquete es memorable"
          }
        ],
        "shortTitle": "Los arrendatarios solicitan una rebaja"
      },
      {
        "title": "Te ofrecen un honor cortesano.",
        "context": "El prestigio y las redes de patronazgo eran fundamentales en la sociedad cortesana.",
        "sound": "recompensa",
        "choices": [
          {
            "text": "Aceptar con dignidad",
            "result": "Tu apellido adquiere todavía más lustre.",
            "effects": {
              "dinero": 0,
              "salud": 0,
              "poder": 9
            },
            "resultTitle": "Tu apellido adquiere todavía más lustre"
          },
          {
            "text": "Aceptar con falsa modestia",
            "result": "Todos celebran tu humildad. La distinción sigue siendo tuya.",
            "effects": {
              "dinero": 0,
              "salud": 0,
              "poder": 8
            },
            "resultTitle": "Todos celebran tu humildad"
          }
        ],
        "shortTitle": "Te ofrecen un honor cortesano"
      }
    ],
    "ending": {
      "title": "¡ÉXITO HEREDITARIO!",
      "text": "Tus rentas y tu apellido te acompañan hasta el final. La corte te felicita por tu extraordinario mérito de nacimiento.",
      "sound": "victoria"
    },
    "story": {
      "title": "El talento de heredar",
      "context": "En la Castilla del siglo XVI, el mayorazgo permite mantener determinados patrimonios vinculados a una familia. Don Gaspar se dispone a demostrar su capacidad empresarial.",
      "options": [
        {
          "text": "Comprar cien pavos reales para vigilar tus tierras",
          "progress": "Los pavos no detectan ladrones y espantan a tus criados. Tus administradores intentan no reírse. El negocio fracasa. Las rentas de las tierras vinculadas a tu familia continúan llegando y un pariente te consigue un favor cortesano. La corte celebra tu espíritu innovador.",
          "final": ""
        },
        {
          "text": "Invertir la fortuna en un molino que funcione sin agua",
          "progress": "El molino no gira. Exiges a los artesanos que revisen su falta de entusiasmo. Pierdes dinero en el molino imposible, pero el patrimonio familiar amortigua el golpe. Sigues cobrando rentas y te elogian por apoyar las ciencias.",
          "final": ""
        }
      ],
      "ending": "VICTORIA",
      "tagline": "Tu apellido trabajó mucho más que tú."
    }
  },
  {
    "id": "clero",
    "role": "",
    "details": "",
    "profile": "Diriges una diócesis con rentas, propiedades y considerable influencia social.",
    "goal": "Conservar los recursos e influencia del obispado.",
    "quote": "Has consagrado tu vida a la pobreza y la humildad. Principalmente a que los demás las practiquen.",
    "portrait": "assets/images/personajes/clero.webp",
    "name": "Don Baltasar de Valcárcel, Obispo de Valdeoro",
    "group": "Éxito",
    "category": "",
    "bio": "Ocupas una dignidad eclesiástica influyente. No representas las condiciones de todo el clero.",
    "events": [
      {
        "title": "Recibes una dignidad eclesiástica.",
        "context": "Las altas dignidades eclesiásticas podían concentrar influencia y recursos.",
        "sound": "recompensa",
        "choices": [
          {
            "text": "Aceptar el cargo",
            "result": "Tu autoridad aumenta sin necesidad de demostrar talento ante el pueblo.",
            "effects": {
              "dinero": 5,
              "salud": 0,
              "poder": 10
            },
            "resultTitle": "Tu autoridad aumenta sin necesidad de demostrar talento ante el pueblo"
          },
          {
            "text": "Decir que no eres digno",
            "result": "La corte admira tu modestia. Te insiste hasta que aceptas.",
            "effects": {
              "dinero": 5,
              "salud": 0,
              "poder": 8
            },
            "resultTitle": "La corte admira tu modestia"
          }
        ],
        "shortTitle": "Recibes una dignidad eclesiástica"
      },
      {
        "title": "Se discute el destino de unas rentas.",
        "context": "Los ingresos y privilegios eclesiásticos dependían de instituciones y jurisdicciones concretas.",
        "sound": "problema",
        "choices": [
          {
            "text": "Convocar una reunión",
            "result": "Tras largas deliberaciones, tu posición permanece segura.",
            "effects": {
              "dinero": 0,
              "salud": 0,
              "poder": 2
            },
            "resultTitle": "Tras largas deliberaciones, tu posición permanece segura"
          },
          {
            "text": "Encargar un informe",
            "result": "El informe cuesta dinero. Tú recibes las felicitaciones.",
            "effects": {
              "dinero": -5,
              "salud": 0,
              "poder": 3
            },
            "resultTitle": "El informe cuesta dinero"
          }
        ],
        "shortTitle": "Se discute el destino de unas rentas"
      },
      {
        "title": "La Corona solicita tu apoyo.",
        "context": "La Iglesia y la monarquía mantenían relaciones de cooperación y conflicto, según el caso.",
        "sound": "ironia",
        "choices": [
          {
            "text": "Negociar condiciones",
            "result": "Tu influencia resulta útil y se reconoce públicamente.",
            "effects": {
              "dinero": 3,
              "salud": 0,
              "poder": 9
            },
            "resultTitle": "Tu influencia resulta útil y se reconoce públicamente"
          },
          {
            "text": "Pronunciar un discurso solemne",
            "result": "El discurso emociona a los presentes. Obtienes prestigio sin mover un dedo.",
            "effects": {
              "dinero": 0,
              "salud": 0,
              "poder": 7
            },
            "resultTitle": "El discurso emociona a los presentes"
          }
        ],
        "shortTitle": "La Corona solicita tu apoyo"
      }
    ],
    "ending": {
      "title": "¡GLORIA Y PRESTIGIO!",
      "text": "Has preservado influencia y recursos. Tu partida termina entre honores, no entre facturas.",
      "sound": "victoria"
    },
    "story": {
      "title": "Una ocasión para ganar prestigio",
      "context": "Tras el Concilio de Trento (1545–1563), la Iglesia católica impulsa reformas y una intensa vida ceremonial. Don Baltasar desea dejar huella.",
      "options": [
        {
          "text": "Encargar una campana tan grande que nadie pueda tocarla",
          "progress": "La campana queda atrapada en el taller. La llamas símbolo del silencio espiritual. El proyecto consume fondos sin prestar servicio alguno. Tus protectores elogian la ambición artística y obtienes un nuevo honor eclesiástico.",
          "final": ""
        },
        {
          "text": "Gastar las limosnas en retratos de tu humildad",
          "progress": "Contratas a tres pintores para inmortalizarte sin joyas, pero con marco de oro. Las familias necesitadas siguen esperando. Tus contactos celebran tu imagen de austeridad y te aseguran nuevas rentas. El retrato recibe visitas.",
          "final": ""
        }
      ],
      "ending": "VICTORIA",
      "tagline": "La providencia también tenía buenos contactos."
    }
  },
  {
    "id": "campesino",
    "role": "",
    "details": "37 años · Reino de León",
    "profile": "Cultivas tierras con tu familia. Las cosechas, las rentas y otras obligaciones determinan tu supervivencia.",
    "goal": "Asegurar alimentos y conservar tus medios de vida.",
    "quote": "El imperio es muy grande. Tu parcela, bastante menos.",
    "portrait": "assets/images/personajes/campesino.webp",
    "name": "Martín, campesino de Sahagún",
    "group": "Normal",
    "category": "Campesino de Sahagún",
    "bio": "Trabajas la tierra y afrontas cosechas inciertas, rentas y obligaciones fiscales.",
    "events": [
      {
        "title": "La cosecha ha sido mala.",
        "context": "Las crisis de subsistencia afectaron a distintas regiones de Castilla en la Edad Moderna.",
        "sound": "problema",
        "choices": [
          {
            "text": "Guardar parte del grano",
            "result": "Tu familia come unos días más, pero no alcanza para todos los pagos.",
            "effects": {
              "dinero": 0,
              "salud": 4,
              "poder": -1
            },
            "resultTitle": "Tu familia come unos días más, pero no alcanza para todos los pagos"
          },
          {
            "text": "Vender lo poco que queda",
            "result": "Cubres una deuda inmediata y te quedas sin reservas.",
            "effects": {
              "dinero": 8,
              "salud": -7,
              "poder": -2
            },
            "resultTitle": "Cubres una deuda inmediata y te quedas sin reservas"
          }
        ],
        "shortTitle": "La cosecha ha sido mala"
      },
      {
        "title": "Llega el momento de pagar.",
        "context": "La fiscalidad castellana incluía figuras como la alcabala y, desde 1590, los servicios de millones.",
        "sound": "desastre",
        "choices": [
          {
            "text": "Solicitar un préstamo",
            "result": "Obtienes tiempo, pero la deuda te acompañará después de la cosecha.",
            "effects": {
              "dinero": -8,
              "salud": 0,
              "poder": -1
            },
            "resultTitle": "Obtienes tiempo, pero la deuda te acompañará después de la cosecha"
          },
          {
            "text": "Vender herramientas",
            "result": "Pagas una parte y pierdes medios esenciales para trabajar.",
            "effects": {
              "dinero": 6,
              "salud": -5,
              "poder": -2
            },
            "resultTitle": "Pagas una parte y pierdes medios esenciales para trabajar"
          }
        ],
        "shortTitle": "Llega el momento de pagar"
      }
    ],
    "ending": {
      "title": "SUPERVIVENCIA PRECARIA",
      "text": "Tu familia sale adelante, pero con menos herramientas y nuevas deudas. Sobrevivir también ha sido una lucha.",
      "sound": "triste"
    },
    "story": {
      "title": "Una tierra que podría ser tuya",
      "context": "Castilla, finales del siglo XVI.",
      "options": [
        {
          "text": "Arrendar la parcela y sembrar más",
          "progress": "",
          "final": "En 1590 te cobran el servicio de millones para sostener las guerras del rey. Entregas la cosecha, pierdes la tierra y ves pasar hambre a tu familia. El recaudador se marcha satisfecho."
        },
        {
          "text": "Quedarte con tu parcela y guardar grano",
          "progress": "",
          "final": "En 1590 te cobran el servicio de millones para sostener las guerras del rey. Entregas la cosecha, pierdes la tierra y ves pasar hambre a tu familia. El recaudador se marcha satisfecho."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "lavandera",
    "role": "",
    "details": "29 años · Madrid",
    "profile": "Lavas ropa por encargo para otras familias. Los ingresos dependen de la demanda y de cobrar el trabajo.",
    "goal": "Conseguir ingresos regulares y mayor independencia.",
    "quote": "La corte necesita camisas limpias. Tú necesitas comer.",
    "portrait": "assets/images/personajes/lavandera.webp",
    "name": "Inés, lavandera de Madrid",
    "group": "Normal",
    "category": "Lavandera de Madrid",
    "bio": "Lavas ropa para sostener tu hogar en una ciudad con fuertes desigualdades.",
    "events": [
      {
        "title": "Tienes más encargos de los que puedes atender.",
        "context": "El trabajo de las mujeres sostenía economías domésticas y urbanas, a menudo con escaso reconocimiento.",
        "sound": "problema",
        "choices": [
          {
            "text": "Aceptar todos los encargos",
            "result": "Ganas unas monedas más a costa de tu salud y descanso.",
            "effects": {
              "dinero": 10,
              "salud": -14,
              "poder": 0
            },
            "resultTitle": "Ganas unas monedas más a costa de tu salud y descanso"
          },
          {
            "text": "Rechazar algunos encargos",
            "result": "Conservas fuerzas, pero te falta dinero para cubrir los gastos.",
            "effects": {
              "dinero": -8,
              "salud": 9,
              "poder": 0
            },
            "resultTitle": "Conservas fuerzas, pero te falta dinero para cubrir los gastos"
          }
        ],
        "shortTitle": "Tienes más encargos de los que puedes atender"
      },
      {
        "title": "El precio del pan vuelve a subir.",
        "context": "El precio del pan era central en la subsistencia urbana del Antiguo Régimen.",
        "sound": "desastre",
        "choices": [
          {
            "text": "Buscar trabajo adicional",
            "result": "Trabajas aún más. La seguridad económica sigue lejos.",
            "effects": {
              "dinero": 7,
              "salud": -12,
              "poder": 0
            },
            "resultTitle": "Trabajas aún más"
          },
          {
            "text": "Reducir las comidas",
            "result": "La familia resiste, pero el coste se paga en el cuerpo.",
            "effects": {
              "dinero": -5,
              "salud": -15,
              "poder": 0
            },
            "resultTitle": "La familia resiste, pero el coste se paga en el cuerpo"
          }
        ],
        "shortTitle": "El precio del pan vuelve a subir"
      }
    ],
    "ending": {
      "title": "EL TRABAJO NO BASTA",
      "text": "Sigues trabajando. Tu esfuerzo mantiene a otros limpios y a ti exhausta.",
      "sound": "triste"
    },
    "story": {
      "title": "El negocio de tu vida",
      "context": "Madrid es sede estable de la corte desde 1561.",
      "options": [
        {
          "text": "Aceptar el contrato de la casa noble",
          "progress": "",
          "final": "Madrid es la corte desde 1561. Lavas para una casa noble que nunca te paga. Te embargan las herramientas y acabas en la calle. Ellos siguen celebrando banquetes sobre manteles limpios."
        },
        {
          "text": "Atender a muchas familias pequeñas",
          "progress": "",
          "final": "Madrid es la corte desde 1561. Lavas para una casa noble que nunca te paga. Te embargan las herramientas y acabas en la calle. Ellos siguen celebrando banquetes sobre manteles limpios."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "herrero",
    "role": "",
    "details": "34 años · Valladolid",
    "profile": "Mantienes un pequeño taller donde fabricas y reparas herramientas y herrajes.",
    "goal": "Conservar el taller y mejorar tus ingresos.",
    "quote": "Tu oficio es imprescindible para el reino. Eso no garantiza que te paguen.",
    "portrait": "assets/images/personajes/herrero.webp",
    "name": "Alonso, herrero castellano",
    "group": "Normal",
    "category": "Herrero castellano",
    "bio": "Mantienes un pequeño taller y dependes de encargos, materiales y pagos.",
    "events": [
      {
        "title": "Sube el coste del hierro.",
        "context": "Los oficios urbanos dependían de mercados, suministros y regulaciones locales.",
        "sound": "problema",
        "choices": [
          {
            "text": "Subir tus precios",
            "result": "Algunos clientes se marchan. Los gastos no disminuyen.",
            "effects": {
              "dinero": -7,
              "salud": 0,
              "poder": 0
            },
            "resultTitle": "Algunos clientes se marchan"
          },
          {
            "text": "Mantener los precios",
            "result": "Conservas encargos, pero apenas cubres el coste del material.",
            "effects": {
              "dinero": -10,
              "salud": 0,
              "poder": 0
            },
            "resultTitle": "Conservas encargos, pero apenas cubres el coste del material"
          }
        ],
        "shortTitle": "Sube el coste del hierro"
      },
      {
        "title": "Un cliente importante retrasa el pago.",
        "context": "Las relaciones de crédito y dependencia podían condicionar los talleres artesanos.",
        "sound": "error",
        "choices": [
          {
            "text": "Reclamar lo que te deben",
            "result": "Te prometen pagar pronto. Tú sigues necesitando comprar carbón.",
            "effects": {
              "dinero": 0,
              "salud": -3,
              "poder": -1
            },
            "resultTitle": "Te prometen pagar pronto"
          },
          {
            "text": "Pedir dinero prestado",
            "result": "El taller abre mañana, pero con una deuda nueva.",
            "effects": {
              "dinero": 7,
              "salud": 0,
              "poder": -1
            },
            "resultTitle": "El taller abre mañana, pero con una deuda nueva"
          }
        ],
        "shortTitle": "Un cliente importante retrasa el pago"
      }
    ],
    "ending": {
      "title": "EL TALLER RESISTE",
      "text": "Consigues mantener abierto el taller, pero a costa de endeudarte.",
      "sound": "triste"
    },
    "story": {
      "title": "Tu propia herrería",
      "context": "Las guerras de Felipe II, incluida la campaña de Flandes, exigen recursos y suministros.",
      "options": [
        {
          "text": "Invertir en una fragua más grande",
          "progress": "",
          "final": "Los Tercios combaten en Flandes. Fabricas hierro para sus armas, pero el contratista de la Corona no te paga. Te embargan la fragua. Los soldados cobran gloria; tú, deudas."
        },
        {
          "text": "Ahorrar y mantener el taller pequeño",
          "progress": "",
          "final": "Los Tercios combaten en Flandes. Fabricas hierro para sus armas, pero el contratista de la Corona no te paga. Te embargan la fragua. Los soldados cobran gloria; tú, deudas."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "gitano",
    "role": "",
    "details": "31 años · Comunidad gitana de Castilla",
    "profile": "Conoces los animales y los mercados, pero afrontas restricciones y prejuicios por tu pertenencia a la comunidad gitana.",
    "goal": "Conservar tu actividad y proteger a los tuyos.",
    "quote": "Sabes reconocer un buen caballo a veinte pasos. La autoridad te reconoce por prejuicios.",
    "portrait": "assets/images/personajes/gitano.webp",
    "name": "Catalina, tratante de caballerías",
    "group": "Normal",
    "category": "Tratante de caballerías",
    "bio": "Tu vida está condicionada por disposiciones discriminatorias contra las comunidades gitanas.",
    "events": [
      {
        "title": "Una pragmática limita tu forma de vida.",
        "context": "Las pragmáticas de 1499 y otras disposiciones posteriores restringieron actividades y movilidad de las comunidades gitanas.",
        "sound": "ley",
        "choices": [
          {
            "text": "Adaptarte a las exigencias",
            "result": "Evitas un conflicto inmediato, pero la discriminación no desaparece.",
            "effects": {
              "dinero": -3,
              "salud": 0,
              "poder": -3
            },
            "resultTitle": "Evitas un conflicto inmediato, pero la discriminación no desaparece"
          },
          {
            "text": "Defender tus costumbres",
            "result": "Te expones a sanciones y a mayor vigilancia.",
            "effects": {
              "dinero": 0,
              "salud": -7,
              "poder": -7
            },
            "resultTitle": "Te expones a sanciones y a mayor vigilancia"
          }
        ],
        "shortTitle": "Una pragmática limita tu forma de vida"
      },
      {
        "title": "Las autoridades controlan los desplazamientos.",
        "context": "Las restricciones legales variaron según las disposiciones y su aplicación en cada periodo.",
        "sound": "problema",
        "choices": [
          {
            "text": "Permanecer donde estás",
            "result": "Reduces un riesgo y aumentan las dificultades para ganarte la vida.",
            "effects": {
              "dinero": -8,
              "salud": 2,
              "poder": -2
            },
            "resultTitle": "Reduces un riesgo y aumentan las dificultades para ganarte la vida"
          },
          {
            "text": "Buscar trabajo en otro lugar",
            "result": "La movilidad necesaria para trabajar puede convertirse en motivo de sospecha.",
            "effects": {
              "dinero": 4,
              "salud": -5,
              "poder": -5
            },
            "resultTitle": "La movilidad necesaria para trabajar puede convertirse en motivo de sospecha"
          }
        ],
        "shortTitle": "Las autoridades controlan los desplazamientos"
      }
    ],
    "ending": {
      "title": "LIBERTAD VIGILADA",
      "text": "Has evitado algunas sanciones, pero las leyes siguen limitando tus opciones.",
      "sound": "triste"
    },
    "story": {
      "title": "Un camino para tu familia",
      "context": "La Pragmática de 1499 contra los gitanos y otras disposiciones posteriores limitaron su movilidad y sus modos de vida.",
      "options": [
        {
          "text": "Establecerte y abrir un puesto",
          "progress": "",
          "final": "Comercias honradamente con caballos. Las leyes contra los gitanos te persiguen por tu origen y tu modo de vida. Te confiscan las caballerías y dejas a tu familia sin sustento. Tu delito es existir."
        },
        {
          "text": "Continuar viajando entre mercados",
          "progress": "",
          "final": "Comercias honradamente con caballos. Las leyes contra los gitanos te persiguen por tu origen y tu modo de vida. Te confiscan las caballerías y dejas a tu familia sin sustento. Tu delito es existir."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "mitayo",
    "role": "",
    "details": "26 años · Andes, virreinato del Perú",
    "profile": "Vives en una comunidad andina afectada por obligaciones laborales coloniales. La historia se sitúa tras la organización de la mita minera en la década de 1570.",
    "goal": "Sobrevivir al periodo de trabajo exigido y regresar a tu comunidad.",
    "quote": "En Europa hablan de las riquezas del Nuevo Mundo. Tú descubrirás de dónde salen.",
    "portrait": "assets/images/personajes/mitayo.webp",
    "name": "Túpac, mitayo de Potosí",
    "group": "Normal",
    "category": "Mitayo de Potosí",
    "bio": "Eres obligado a participar en turnos de trabajo minero en el entorno de Potosí.",
    "events": [
      {
        "title": "Te asignan un turno de mita.",
        "context": "El virrey Francisco de Toledo reorganizó la mita minera de Potosí durante la década de 1570.",
        "sound": "ley",
        "choices": [
          {
            "text": "Presentarte al turno",
            "result": "Cumples la obligación colonial a costa de tiempo y sustento familiar.",
            "effects": {
              "dinero": -3,
              "salud": -14,
              "poder": -5
            },
            "resultTitle": "Cumples la obligación colonial a costa de tiempo y sustento familiar"
          },
          {
            "text": "Solicitar una exención",
            "result": "Las posibilidades de obtenerla son limitadas y dependen de tu situación.",
            "effects": {
              "dinero": 0,
              "salud": -4,
              "poder": -2
            },
            "resultTitle": "Las posibilidades de obtenerla son limitadas y dependen de tu situación"
          }
        ],
        "shortTitle": "Te asignan un turno de mita"
      },
      {
        "title": "El trabajo en las minas deteriora tu salud.",
        "context": "La minería de Potosí entrañaba riesgos graves; las tareas y exposiciones diferían según el trabajo concreto.",
        "sound": "desastre",
        "choices": [
          {
            "text": "Seguir trabajando",
            "result": "Tu cuerpo soporta un coste que no aparece en los relatos de gloria.",
            "effects": {
              "dinero": -2,
              "salud": -16,
              "poder": -2
            },
            "resultTitle": "Tu cuerpo soporta un coste que no aparece en los relatos de gloria"
          },
          {
            "text": "Buscar ayuda",
            "result": "Consigues apoyo parcial, pero las obligaciones continúan.",
            "effects": {
              "dinero": -4,
              "salud": 4,
              "poder": -1
            },
            "resultTitle": "Consigues apoyo parcial, pero las obligaciones continúan"
          }
        ],
        "shortTitle": "El trabajo en las minas deteriora tu salud"
      }
    ],
    "ending": {
      "title": "EL PRECIO DE LA PLATA",
      "text": "Regresas marcado por el trabajo obligatorio. El metal enriqueció circuitos lejanos; tu vida no recibió la misma recompensa.",
      "sound": "triste"
    },
    "story": {
      "title": "Regresar a casa",
      "context": "En la década de 1570, el virrey Francisco de Toledo reorganizó la mita para abastecer de mano de obra a las minas de Potosí.",
      "options": [
        {
          "text": "Cumplir el turno sin protestar",
          "progress": "",
          "final": "La mita de Potosí te obliga a bajar a las minas de plata. Enfermas entre polvo y derrumbes. La plata cruza el Atlántico y ayuda a pagar las deudas de la Corona con banqueros, incluidos los genoveses. Tú no regresas."
        },
        {
          "text": "Pedir ayuda para reducir el turno",
          "progress": "",
          "final": "La mita de Potosí te obliga a bajar a las minas de plata. Enfermas entre polvo y derrumbes. La plata cruza el Atlántico y ayuda a pagar las deudas de la Corona con banqueros, incluidos los genoveses. Tú no regresas."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "esclavizada",
    "role": "",
    "details": "24 años · África occidental",
    "profile": "Vives en tu comunidad, elaboras tejidos y objetos para comerciar y tienes familia, amistades y proyectos. Al comenzar, eres libre.",
    "goal": "Desarrollar tu oficio, mantener tu libertad y proteger tus vínculos.",
    "quote": "Tienes un oficio, una familia y una vida. Otros pretenden convertirte en mercancía.",
    "portrait": "assets/images/personajes/esclavizada.webp",
    "name": "Awa, artesana de Senegambia",
    "group": "Normal",
    "category": "Artesana de Senegambia",
    "bio": "Vives bajo esclavitud en un entorno urbano de la América hispánica del siglo XVII.",
    "events": [
      {
        "title": "Una oportunidad en el mercado",
        "context": "Escena ficticia de la vida cotidiana en Senegambia del siglo XVI; el oficio y la comunidad concretos requieren documentación.",
        "sound": "click",
        "choices": [
          {
            "text": "Viajar al mercado con tus tejidos",
            "result": "Vendes parte de tu trabajo y vuelves con ideas para nuevas piezas. Tu vida y tus proyectos siguen adelante.",
            "effects": {
              "dinero": 9,
              "salud": 0,
              "poder": 0
            },
            "resultTitle": "Vendes parte de tu trabajo y vuelves con ideas para nuevas piezas"
          },
          {
            "text": "Quedarte a terminar un encargo",
            "result": "Terminas un tejido importante y compartes la tarde con tu familia. El trabajo continúa.",
            "effects": {
              "dinero": 5,
              "salud": 2,
              "poder": 0
            },
            "resultTitle": "Terminas un tejido importante y compartes la tarde con tu familia"
          }
        ],
        "shortTitle": "Una oportunidad en el mercado"
      },
      {
        "title": "Llegan noticias de violencia y capturas",
        "context": "La trata atlántica se relacionó con redes complejas de captura, compraventa y transporte. Esta historia no representa una ruta universal.",
        "sound": "problema",
        "choices": [
          {
            "text": "Buscar información y avisar a tu comunidad",
            "result": "Compartís noticias e intentáis protegeros. La amenaza procede de otras personas y estructuras de poder, no de un error tuyo.",
            "effects": {
              "dinero": 0,
              "salud": -2,
              "poder": 0
            },
            "resultTitle": "Compartís noticias e intentáis protegeros"
          },
          {
            "text": "Permanecer cerca de tu familia",
            "result": "Os organizáis para afrontar la incertidumbre. La violencia ajena sigue siendo una amenaza real.",
            "effects": {
              "dinero": 0,
              "salud": 2,
              "poder": 0
            },
            "resultTitle": "Os organizáis para afrontar la incertidumbre"
          }
        ],
        "shortTitle": "Llegan noticias de violencia y capturas"
      },
      {
        "title": "Te arrebatan la libertad",
        "context": "Escena ficticia de captura y esclavización. No es consecuencia de una decisión equivocada de Awa; debe investigarse la ruta histórica antes de publicar.",
        "sound": "desastre",
        "choices": [
          {
            "text": "Aferrarte a tu nombre y tus recuerdos",
            "result": "No puedes controlar lo que otros hacen contigo. Conservas tu nombre, tu memoria y tu identidad.",
            "effects": {
              "dinero": 0,
              "salud": -10,
              "poder": -12
            },
            "resultTitle": "No puedes controlar lo que otros hacen contigo"
          },
          {
            "text": "Intentar mantener un vínculo con otras personas cautivas",
            "result": "En medio de la violencia impuesta, buscas apoyo mutuo. Tu humanidad no desaparece.",
            "effects": {
              "dinero": 0,
              "salud": -8,
              "poder": -12
            },
            "resultTitle": "En medio de la violencia impuesta, buscas apoyo mutuo"
          }
        ],
        "shortTitle": "Te arrebatan la libertad"
      }
    ],
    "ending": {
      "title": "LA LIBERTAD NO ERA TUYA",
      "text": "Tu historia no termina necesariamente aquí. La resistencia y la manumisión existieron, pero tu libertad no dependía solo de tu esfuerzo.",
      "sound": "triste"
    },
    "story": {
      "title": "Un futuro tejido a mano",
      "context": "En el siglo XVI, las redes de trata atlántica conectan distintas regiones africanas con mercados coloniales.",
      "options": [
        {
          "text": "Viajar para vender tus tejidos",
          "progress": "",
          "final": "Te capturan y te venden al otro lado del Atlántico. Te arrebatan la libertad, el oficio y la familia. Los comerciantes cuentan beneficios; nadie cuenta tus pérdidas."
        },
        {
          "text": "Quedarte y fortalecer tu taller",
          "progress": "",
          "final": "Te capturan y te venden al otro lado del Atlántico. Te arrebatan la libertad, el oficio y la familia. Los comerciantes cuentan beneficios; nadie cuenta tus pérdidas."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El imperio prospera. Tú pagas la cuenta."
    }
  },
  {
    "id": "gitano_hombre",
    "name": "Mateo, herrero gitano",
    "role": "",
    "group": "Normal",
    "details": "31 años · Castilla, siglo XVI",
    "profile": "Reparas herraduras, forjas clavos y mantienes a tu familia con tu trabajo. No pides favores: quieres vivir de la fragua.",
    "goal": "Trabajar libremente y regresar cada noche con tu familia.",
    "quote": "Tu oficio es honrado. La ley no te considera honrado a ti.",
    "portrait": "assets/images/personajes/gitano_hombre.webp",
    "story": {
      "title": "El hierro no protege de la ley",
      "context": "Las leyes de la Corona persiguen a la población gitana desde la Pragmática de 1499. Tu oficio no te libra de la persecución.",
      "options": [
        {
          "text": "Seguir trabajando en la fragua",
          "progress": "",
          "final": "Eres herrero, pero te declaran vagabundo. Te cortan una oreja y te condenan a galeras. Remas encadenado durante tres años hasta morir de un infarto. En 1588 se recuerda a la Armada Invencible; tu nombre no aparece en ninguna crónica."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "El hierro forja imperios. No te salva de sus leyes."
    }
  },
  {
    "id": "resistencia",
    "name": "Killa, mujer andina",
    "role": "",
    "group": "Normal",
    "details": "25 años · Andes, siglo XVI",
    "profile": "Vives en una comunidad andina y trabajas la tierra con tu familia. Quieres decidir sobre tu vida, pero la llegada de los conquistadores pone tu libertad en peligro.",
    "goal": "Conservar tu libertad, proteger a tu familia y decidir sobre tu futuro.",
    "quote": "Los vencedores llaman mestizaje a lo que tú nunca elegiste.",
    "portrait": "assets/images/personajes/resistencia.webp",
    "story": {
      "title": "El precio de la conquista",
      "context": "Tras la conquista del Tahuantinsuyo, la dominación española transforma las comunidades andinas. El mestizaje nace de relaciones muy distintas: algunas voluntarias, otras impuestas mediante la violencia y el poder colonial.",
      "options": [
        {
          "text": "Intentar proteger tu libertad",
          "progress": "",
          "final": "Un soldado español te obliga a mantener relaciones contra tu voluntad. Tienes un hijo y te arrebatan la posibilidad de decidir. Los vencedores celebran el nacimiento de una nueva sociedad mestiza; tú cargas con la violencia que prefieren olvidar."
        }
      ],
      "ending": "GAME OVER",
      "tagline": "Tu vida cambia por la fuerza. La historia lo llama mestizaje."
    }
  }
];
