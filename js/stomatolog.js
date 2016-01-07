//пока не убирай поле count, оно удобно для добавления дополнительных полей каждой услуге

// unit - по русские ует - условные единицы трудоемкости
var globalJSON = [
    {
        "id": 1,
        "name": "Общие виды работ",
        "services": [
            {
                "code": "1.1",
                "name": "Осмотр (без проведения лечебно-диагностических мероприятий). Обследование стоматологического статуса первичного больного (осмотр, сбор анамнеза, заполнение зубной формулы, определение индексов КПУ, кп, КПУкп, ИГ, ПМА, состояния прикуса, степени активности кариеса)",
                "count": "",
                "unit": "3.0",
                "price": "150"
            },
            {
                "code": "1.2",
                "name": "Повторный прием (набор одноразовых принадлежностей или инструментов)",
                "count": "",
                "unit": "0.5",
                "price": "150"
            },
            {
                "code": "1.11.2",
                "name": "Анестезия внутриротовая (инфильтрационная, проводниковая, внутрипульпарная, интралигаментарная)",
                "count": "",
                "unit": "0.5",
                "price": "150"
            },
            {
                "code": "1.13",
                "name": "Снятие искусственной коронки",
                "count": "",
                "unit": "1.0",
                "price": "150"
            },
            {
                "code": "1.14",
                "name": "Снятие цельнолитой коронки",
                "count": "",
                "unit": "0.8",
                "price": "250"
            },
            {
                "code": "1.15",
                "name": "Снятие пломбы",
                "count": "",
                "unit": "0.5",
                "price": "100"
            },
            {
                "code": "1.16",
                "name": "Депофорез одного корневого канала(1 сеанс)",
                "count": "",
                "unit": "0",
                "price": "50"
            },
            {
                "code": "1.17.1",
                "name": "Рентгенологический снимок",
                "count": "",
                "unit": "0.5",
                "price": "200"
            },
            {
                "code": "1.17.2",
                "name": "Повторный рентгенологический снимок",
                "count": "",
                "unit": "0.5",
                "price": "200"
            },
            {
                "code": "1.17.3",
                "name": "Чтение одной дентальной рентгенограммы",
                "count": "",
                "unit": "0,5",
                "price": "150"
            },
            {
                "code": "1.18",
                "name": "Физиотерапия лазером, аппаратом (1 сеанс)",
                "count": "",
                "unit": "0",
                "price": "50"
            },
            {
                "code": "1.19",
                "name": "Временная повязка химического, светового отверждения",
                "count": "",
                "unit": "0",
                "price": "150"
            },
            {
                "code": "1.20",
                "name": "Временная пломба",
                "count": "",
                "unit": "0.25",
                "price": "100"
            },
            {
                "code": "1.21",
                "name": "Полировка, шлифовка пломбы при лечении кариозных полостей I, II, III, V класса по Блэку",
                "count": "", 
                "unit": "0.5",
                "price": "150"
            },
            {
                "code": "1.22",
                "name": "Полировка, шлифовка пломбы при лечении кариозных полостей IV класса по Блэку",
                "count": "",
                "unit": "2.0",
                "price": "250"
            },
            {
                "code": "1.23",
                "name": "Триоксидент",
                "count": "",
                "unit": "1.5",
                "price": "500"
            },
            {
                "code": "1.24",
                "name": "Эндоканальное отбеливание (1 корневого канала)",
                "count": "",
                "unit": "1.0",
                "price": "1000"
            },
            {
                "code": "1.25",
                "name": "Ретракция десны",
                "count": "",
                "unit": "0.25",
                "price": "50"
            },
            {
                "code": "1.26",
                "name": "Каустинерв",
                "count": "",
                "unit": "1.0",
                "price": "200"
            }
        ]
    },
    {
        "id": 2,
        "name": "Профилактические мероприятия",
        "services": [
            {
                "code": "2.1",
                "name": "Герметизация фиссур (1 зуб) материалом химического отверждения",
                "count": "",
                "unit": "1.5",
                "price": "100"
            },
            {
                "code": "2.2",
                "name": "Герметизация фиссур (1 зуб) материалом светового отверждения",
                "count": "",
                "unit": "2.0",
                "price": "150"
            },
            {
                "code": "2.3",
                "name": "Серебрение 1 молочного зуба(сафорайд)",
                "count": "",
                "unit": "0.25",
                "price": "50"
            }
        ]
    },
    {
        "id": 3,
        "name": "Терапевтический прием",
        "services": [
            {
                "code": "3.1",
                "name": "Наложение одной пломбы из СИЦ (стеклоиономерный цемент) при поверхностном и среднем кариесе I и V класса по Блэку (Ketac Molar)",
                "count": "",
                "unit": "0.5",
                "price": "300"
            },
            {
                "code": "3.2",
                "name": "Наложение одной пломбы из СИЦ при поверхностном и среднем кариесе II и III класса по Блэку (Ketac Molar)",
                "count": "",
                "unit": "0.5",
                "price": "400"
            },
            {
                "code": "3.3",
                "name": "Наложение одной пломбы из СИЦ при глубоком кариесе I-III класса по Блэку (Ketac Molar)",
                "count": "",
                "unit": "1.0",
                "price": "500"
            },
            {
                "code": "3.4",
                "name": "Наложение одной пломбы светового отверждения при среднем кариесе (I и V класс по Блэку)",
                "count": "",
                "unit": "1.0",
                "price": "1000"
            },
            {
                "code": "3.5",
                "name": "Наложение одной пломбы светового отверждения при среднем кариесе II,III,IV класса по Блэку",
                "count": "",
                "unit": "0",
                "price": "1200"
            },
            {
                "code": "3.6",
                "name": "Наложение одной пломбы светового отверждения при глубоком кариесе (I и V класс по Блэку)",
                "count": "",
                "unit": "1.5",
                "price": "1300"
            },
            {
                "code": "3.7",
                "name": "Наложение одной пломбы светового отверждения при глубоком кариесе II.III.IV класса по Блэку",
                "count": "",
                "unit": "1.5",
                "price": "1500"
            },
            {
                "code": "3.8",
                "name": "Наложение подкладки на кариозную полость Лайф, Calcimol",
                "count": "",
                "unit": "1.5",
                "price": "100"
            },
            {
                "code": "3.9",
                "name": "Наложение подкладки светового отверждения на кариозную полость Vitrimer,Vitrebond",
                "count": "",
                "unit": "0.25",
                "price": "300"
            },
            {
                "code": "4.0",
                "name": "Лечение кариеса депульпированного зуба, пломба химического отвержения Ketac Molar",
                "count": "",
                "unit": "1.0",
                "price": "600"
            },
            {
                "code": "4.1",
                "name": "Лечение кариеса депульпированного зуба, пломба светового отвержения Vitrimer",
                "count": "",
                "unit": "1.5",
                "price": "900"
            },
            {
                "code": "4.2",
                "name": "Восстановление коронковой части депульпированного зуба при отсутствии твердых тканей до 1/2 коронки зуба",
                "count": "",
                "unit": "7.5",
                "price": "1700"
            },
            {
                "code": "4.3",
                "name": "Восстановление формы зуба при полном отсутствии коронки зуба (включая работу по подготовке корневых каналов под штифт)",
                "count": "",
                "unit": "16.0",
                "price": "2500"
            },
            {
                "code": "4.4",
                "name": "Лечение с применением парапульпарных штифтов",
                "count": "",
                "unit": "0",
                "price": "200"
            },
            {
                "code": "4.5",
                "name": "Восстановление цвета и формы зуба при некариозных поражениях твердых тканей зуба(эрозия, клиновидный дефект, гипоплазия)",
                "count": "",
                "unit": "3.5",
                "price": "1000"
            },
            {
                "code": "4.6",
                "name": "Восстановление цвета эмали",
                "count": "",
                "unit": "6.0",
                "price": "1000"
            }
        ]
    },
    {
        "id": 4,
        "name": "Эндодонтические виды работ",
        "services": [
            {
                "code": "5.1.1",
                "name": "Фиксация стекловолоконного и титанового штифта в корневом канале",
                "count": "",
                "unit": "0",
                "price": "350"
            },
            {
                "code": "5.1.2",
                "name": "Фиксация анкерного штифта в корневом канале",
                "count": "",
                "unit": "0",
                "price": "300"
            },
            {
                "code": "5.2",
                "name": "Армирование стекловолоконного штифта в корневом канале",
                "count": "",
                "unit": "0",
                "price": "700"
            },
            {
                "code": "5.3",
                "name": "Лечение пульпита ампутационным методом без наложения пломбы",
                "count": "", "unit": "0",
                "price": "300"
            },
            {
                "code": "5.4",
                "name": "Медикаментозная обработка 1 корневого канала",
                "count": "", "unit": "0",
                "price": "60"
            },
            {
                "code": "5.5",
                "name": "Инструментальная обработка 1 корневого канала",
                "count": "", 
                "unit": "0",
                "price": "180"
            },
            {
                "code": "5.6",
                "name": "Механическое и химическое расширение 1 корневого канала",
                "count": "", 
                "unit": "0",
                "price": "300"
            },
            {
                "code": "5.7",
                "name": "Обтурация 1 корневого канала (гуттаперча)",
                "unitNotProportionWithCount" : true, // unitNotProportionWithCount - меняется значение ует при изменении count
                "count": "", 
                "unit": "3.0", //при кол-ве == 1 ует = 3.0
                "price": "300"
            },
            {
                "code": "5.8",
                "name": "Обтурация 1 корневого канала (эндометазон)",
                "unitNotProportionWithCount" : true,
                "count": "",
                "unit": "3.0", //при кол-ве == 1 ует = 3.0
                "price": "180"
            },
            {
                "code": "5.9",
                "name": "Обтурация 1 корневого канала (крезопат)",
                "count": "", 
                "unit": "3.0",
                "price": "120"
            },
            {
                "code": "6.0",
                "name": "Временное пломбирование корневого канала (Metapex, Metapasta)",
                "count": "",
                "unit": "2.0",
                "price": "180"
            },
            {
                "code": "6.1",
                "name": "Распломбировка 1 корневого канала леченого пастой",
                "count": "",
                "unit": "2.0",
                "price": "180"
            },
            {
                "code": "6.2",
                "name": "Распломбировка 1 корневого канала леченого резорцин-формалиновой смесью",
                "count": "",
                "unit": "5.0",
                "price": "600"
            },
            {
                "code": "6.3",
                "name": "Распломбировка 1 корневого канала леченого цементом",
                "count": "",
                "unit": "6.0",
                "price": "660"
            },
            {
                "code": "6.4",
                "name": "Распломбировка 1 корневого канала леченого гуттаперчей",
                "count": "",
                "unit": "3.5",
                "price": "480"
            },
            {
                "code": "6.5",
                "name": "Извлечение анкерного штифта, вкладки из одного корневого канала",
                "count": "",
                "unit": "4.0",
                "price": "400"
            },
            {
                "code": "6.6",
                "name": "Извлечение стекловолоконного штифта из одного корневого канала",
                "count": "",
                "unit": "4.0",
                "price": "600"
            },
            {
                "code": "6.7",
                "name": "Извлечение отломка инструмента из одного корневого канала",
                "count": "",
                "unit": "4.0",
                "price": "800"
            },
            {
                "code": "6.8",
                "name": "Прохождение канала при наличии в нем отломка инструмента",
                "count": "", "unit": "0",
                "price": "700"
            }
        ]
    },
    {
        "id": 5,
        "name": "Ортопедический прием",
        "services": [
            {
                "code": "5.1",
                "name": "Фиксация коронки («Висцин)",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "5.1",
                "name": "Фиксация коронки («Фуджи» и т.д)",
                "count": "", "unit": "0",
                "price": "300"
            },
            {
                "code": "5.2",
                "name": "Консультация",
                "count": "", "unit": "0",
                "price": "150"
            },
            {
                "code": "5.3",
                "name": "Коррекция протеза (после гарантии)",
                "count": "", "unit": "0",
                "price": "150"
            },
            {
                "code": "5.4",
                "name": "Индивидуальная ложка",
                "count": "", "unit": "0",
                "price": "600"
            },
            {
                "code": "5.5",
                "name": "Перебазировка съемного протеза в клинике",
                "count": "", "unit": "0",
                "price": "400"
            },
            {
                "code": "5.6",
                "name": "Контрольная модель",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "5.7",
                "name": "Коронка металлическая (штампованная)",
                "count": "", "unit": "0",
                "price": "900"
            },
            {
                "code": "5.8",
                "name": "Коронка пластмассовая",
                "count": "", "unit": "0",
                "price": "1300"
            },
            {
                "code": "5.9",
                "name": "Коронка пластмассовая временная",
                "count": "", "unit": "0",
                "price": "500"
            },
            {
                "code": "5.10",
                "name": "Зуб пластмассовый в мостовидном протезе",
                "count": "", "unit": "0",
                "price": "860"
            },
            {
                "code": "5.11",
                "name": "Коронка металлическая с пластмассовой облицовкой (комбинированная)",
                "count": "", "unit": "0",
                "price": "1400"
            },
            {
                "code": "5.12",
                "name": "Коронка металлическая с пластмассовой облицовкой (комбинированная) и с литой «защиткой»",
                "count": "", "unit": "0",
                "price": "1740"
            },
            {
                "code": "5.13",
                "name": "Коронка бюгельная",
                "count": "", "unit": "0",
                "price": "900"
            },
            {
                "code": "5.14",
                "name": "Коронка металлическая цельнолитая",
                "count": "", "unit": "0",
                "price": "1700"
            },
            {
                "code": "5.15",
                "name": "Коронка металлическая цельнолитая с пластмассовой облицовкой (комбинированная)",
                "count": "", "unit": "0",
                "price": "2050"
            },
            {
                "code": "5.16",
                "name": "Коронка металлическая литая (методом прилива) на основе штампованного колпачка",
                "count": "", "unit": "0",
                "price": "1480"
            },
            {
                "code": "5.17",
                "name": "Коронка (зуб) металлокерамическая",
                "count": "", "unit": "0",
                "price": "3800"
            },
            {
                "code": "5.18",
                "name": "Коронка литая (без керамического покрытия) в металлокерамическом мостовидном протезе",
                "count": "", "unit": "0",
                "price": "1600"
            },
            {
                "code": "5.19",
                "name": "Зуб литой (без керамического покрытия) в металлокерамическом мостовидном протезе",
                "count": "", 
                "unit": "0",
                "price": "1184"
            },
            {
                "code": "5.20",
                "name": "Спайка, лапка",
                "count": "", "unit": "0",
                "price": "180"
            },
            {
                "code": "5.21",
                "name": "Коронка металлическая штампованная с литой жевательной поверхностью",
                "count": "", "unit": "0",
                "price": "1240"
            },
            {
                "code": "5.22",
                "name": "Защитное покрытие 1 коронки (зуба) Ti",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "5.22",
                "name": "Защитное покрытие 1 коронки (зуба) Zi",
                "count": "", "unit": "0",
                "price": "250"
            },
            {
                "code": "5.23",
                "name": "Зуб литой метал. с пластмассовой облицовкой (фасетка)",
                "count": "", "unit": "0",
                "price": "1100"
            },
            {
                "code": "5.23",
                "name": "Зуб литой металлический",
                "count": "", "unit": "0",
                "price": "850"
            },
            {
                "code": "5.24",
                "name": "Базис литой металлический для съемного протеза",
                "count": "", "unit": "0",
                "price": "3000"
            },
            {
                "code": "5.30",
                "name": "Вкладка литая культевая со штифтом (1 канал)",
                "count": "", "unit": "0",
                "price": "1500"
            },
            {
                "code": "5.30",
                "name": "Вкладка литая культевая со штифтом (2 канала)",
                "count": "", "unit": "0",
                "price": "1600"
            },
            {
                "code": "5.32",
                "name": "Съемный протез частичный гипоаллергенный, без мономера (Аcri-fri),зубы «Эстедент»,",
                "count": "", "unit": "0",
                "price": "10000"
            },
            {
                "code": "5.33",
                "name": "Съемный протез полный гипоаллергенный, без мономера (Асri-fri),зубы «Эстедент», Харьков",
                "count": "", "unit": "0",
                "price": "12000"
            },
            {
                "code": "5.34",
                "name": "Перебазировка одной единицы несъемной конструкции",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "5.33",
                "name": "Съемный протез частичный гипоаллергенный, без мономера (Асri-fri) ,зубы импортные (Италия, Китай)",
                "count": "", "unit": "0",
                "price": "11000"
            },
            {
                "code": "5.35",
                "name": "Съемный протез полный гипоаллергенный, без мономера (Асri-fri) зубы (Италия, Китай)",
                "count": "", "unit": "0",
                "price": "13000"
            },
            {
                "code": "5.44",
                "name": "Снятие оттисков альгинатных",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "5.45",
                "name": "Снятие оттисков силиконовых",
                "count": "", "unit": "0",
                "price": "700"
            },
            {
                "code": "5.47",
                "name": "Реставрация фасетки (прямым способом)",
                "count": "", "unit": "0",
                "price": "450"
            },
            {
                "code": "5.49",
                "name": "Снятие цельнолитой коронки (метал. и металлокерамич.)",
                "count": "", "unit": "0",
                "price": "300"
            },
            {
                "code": "5.50",
                "name": "Снятие искусственной коронки (штампов. и пластмассовая)",
                "count": "", "unit": "0",
                "price": "200"
            },
            {
                "code": "6.26",
                "name": "Двухслойный базис (эластическая подкладка)",
                "count": "", "unit": "0",
                "price": "400"
            },
            {
                "code": "6.30",
                "name": "Бюгельный каркас (дуга)",
                "count": "", "unit": "0",
                "price": "2500"
            },
            {
                "code": "6.31",
                "name": "Литой базис",
                "count": "", "unit": "0",
                "price": "3000"
            },
            {
                "code": "6.32",
                "name": "Зуб литой в бюгельном протезе",
                "count": "", "unit": "0",
                "price": "500"
            },
            {
                "code": "6.33",
                "name": "Фасетка в бюгельном протезе",
                "count": "", "unit": "0",
                "price": "600"
            },
            {
                "code": "6.35",
                "name": "Армированная дуга (литая)",
                "count": "", "unit": "0",
                "price": "1300"
            },
            {
                "code": "6.36",
                "name": "Седло",
                "count": "", "unit": "0",
                "price": "300"
            },
            {
                "code": "6.38",
                "name": "Литой кламмер(опорно-удерживающий)",
                "count": "", "unit": "0",
                "price": "300"
            },
            {
                "code": "6.40",
                "name": "Окклюзионная накладной в мостовидном протезе",
                "count": "", "unit": "0",
                "price": "100"
            },
            {
                "code": "6.42",
                "name": "Починка перелома базиса базисной пласмассой",
                "count": "", "unit": "0",
                "price": "500"
            },
            {
                "code": "6.43",
                "name": "Починка двух преломов базиса базисной пластмассой",
                "count": "", "unit": "0",
                "price": "550"
            },
            {
                "code": "6.44",
                "name": "Перебазировка съемного протеза лабораторным методом",
                "count": "", "unit": "0",
                "price": "1000"
            },
            {
                "code": "6.45",
                "name": "Приварка одного кламмера",
                "count": "", "unit": "0",
                "price": "500"
            },
            {
                "code": "6.46",
                "name": "Приварка двух кламмеров",
                "count": "", "unit": "0",
                "price": "550"
            },
            {
                "code": "6.47",
                "name": "Приварка одного зуба («Эстедент»)",
                "count": "", "unit": "0",
                "price": "500"
            },
            {
                "code": "6.47",
                "name": "Приварка одного зуба (импортный)",
                "count": "", "unit": "0",
                "price": "550"
            },
            {
                "code": "6.48",
                "name": "Приварка двух зубов («Эстедент»)",
                "count": "", "unit": "0",
                "price": "550"
            },
            {
                "code": "6.48",
                "name": "Приварка двух зубов (импортный)",
                "count": "", "unit": "0",
                "price": "600"
            },
            {
                "code": "6.51",
                "name": "Кламмер гнутый метал",
                "count": "", "unit": "0",
                "price": "150"
            }
        ]
    }, {
        "id": 6,
        "name": "Пародонтологические услуги",
        "services": [
            {
                "code": "1.1",
                "name": "Осмотр полости рта, сбор анамнеза, оформление пародонтологического пациента, составление плана лечения",
                "unit": "0.5",
                "price": "150"
            },{
                "code": "1.21",
                "name": "Определение кариесогенности зубного налета (окрашивание)",
                "unit": "0.5",
                "price": "50"
            }, {
                "code": "1.22",
                "name": "Обучение гигиене полости рта с составлением индивидуальной программы профилактики",
                "unit": "0.5",
                "price": "100"
            }, {
                "code": "2.51",
                "name": "Удаление назубных отложений ручным способом (1 челюсть)",
                "unit": "2.0",
                "price": "600"
            }, {
                "code": "2.52",
                "name": "Удаление назубных отложений с помощью ультразвука (5-8 зубов)",
                "unit": "1.0",
                "price": "400"
            }, {
                "code": "1.24",
                "name": "Снятие зубных отложений ультразвуком (1 зуб)",
                "unit": "0.5",
                "price": "85"
            },{
                "code": "1.25",
                "name": "Проведение профессиональной гигиены при заболевании парадонта (1 зуб)",
                "unit": "0.5",
                "price": "85"
            }, {
                "code": "",
                "name": "Снятие зубных отложений ультразвуком (1 челюсть)",
                "unit": "1.5",
                "price": "700"
            }, {
                "code": "",
                "name": "Профессиональная гигиена полости рта(AIR FLOW, ультразвук, глубокое фторирование(каппы))",
                "unit": "4.25",
                "price": "2500"
            }, {
                "code": "",
                "name": "Фторирование(гель Sultan) 2 челюсти",
                "unit": "0",
                "price": "550"
            }, {
                "code": "",
                "name": "Мед. обработка десны",
                "unit": "0.5",
                "price": "120"
            }, {
                "code": "2.5.13",
                "name": "Мед. обработка патологии зубо-десневых карманов (орошение)",
                "unit": "0.5",
                "price": "200"
            }, {
                "code": "2.5.14",
                "name": "Мед. обработка патологии зубо-десневых карманов (аппликация)",
                "unit": "0.5",
                "price": "100"
            }, {
                "code": "1.2",
                "name": "Консультация по заболеваниям слизистой оболочки полости рта",
                "unit": "1.5",
                "price": "100"
            }, {
                "code": "2.7.1",
                "name": "Лечение заболеваний слизистой оболочки полости рта (первое посещение)",
                "unit": "1.5",
                "price": "300"
            }, {
                "code": "2.7.2",
                "name": "Лечение заболеваний слизистой оболочки полости рта (последующие посещение)",
                "unit": "1.0",
                "price": "200"
            },{
                "code": "1.16",
                "name": "Аппликация лекарственными препаратами",
                "unit": "0.5",
                "price": "70"
            }, {
                "code": "2.5.12",
                "name": "Использование лечебных повязок(Диплен дента)",
                "unit": "0.5",
                "price": "150"
            }, {
                "code": "",
                "name": "Снятие зубной пигментации AIR FLOW (1 челюсть)",
                "unit": "0",
                "price": "500"
            }, {
                "code": "1.11.1",
                "name": "Анестезия аппликационная",
                "unit": "0.25",
                "price": "60"
            }, {
                "code": "1.11.2",
                "name": "Анестезия инъекционная",
                "unit": "0.5",
                "price": "200"
            }, {
                "code": "2.5.10",
                "name": "Закрытый кюретаж в области двух зубов",
                "unit": "1.0",
                "price": "200"
            }, {
                "code": "2.5.17",
                "name": "Вскрытие пародонтального абсцесса",
                "unit": "0.5",
                "price": "300"
            }, {
                "code": "",
                "name": "Гингивэктомия в области одного зуба",
                "unit": "0",
                "price": "150"
            }, {
                "code": "2.5.18",
                "name": "Гингивопластика в области 6 зубов",
                "unit": "4.5",
                "price": "790"
            }, {
                "code": "1.27",
                "name": "Фторирование одного зуба (Фторлак)",
                "unit": "0.25",
                "price": "50"
            }, {
                "code": "",
                "name": "Фторирование одного зуба (Бифлуорид 12, VOCO)",
                "unit": "0",
                "price": "100"
            }, {
                "code": "1.28",
                "name": "Фторирование фторлаком всех зубов",
                "unit": "2.0",
                "price": "500"
            }, {
                "code": "",
                "name": "Инъекция лекарственных веществ(1 сеанс)",
                "unit": "0.5",
                "price": "50"
            }, {
                "code": "",
                "name": "Шинирование двух зубов системой «Glasspan»",
                "unit": "0",
                "price": "1300"
            }, {
                "code": "",
                "name": "Шинирование дополнитетельного зуба «Glasspan»",
                "unit": "0",
                "price": "650"
            }
        ]
    }
];

var typeListJSON = [
    {
        "id": 1,
        "name" : "пародонтология",
        "title": "Прайс-лист на виды работ на пародонтологическом приеме",
        "ids" : [6]
    },
        {
        "id": 2,
        "name" : "ортопедия",
        "title": "Прайс-лист на виды работ на ортопедическом приеме",
        "ids" : [5]
    },
    {
        "id": 3,
        "name" : "терапия",
        "title": "Прайс-лист на виды работ на терапевтическом приеме",
        "ids" : [1,2,3,4]
    }
];