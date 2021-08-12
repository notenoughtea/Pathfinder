'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Routes', [
       {
      url: "/img/бадуки1.jpeg",
      title: "Бадукские озёра",
      difficulty: 4,
      address: 'между хребтами Хаджибей и Бадукским',
      length: 14,
      description: `Маршрут относится к категориям: однодневный, автомобильный—>пеший, для туристов средней степени подготовки, радиальный, 

      Взнос для заповедника: 200-300 руб с человека (в зависимости от дня недели)
      
      Красивейший маршрут, сочетающий в себе поездку на авто и пеший подъем в гору 
      
      На авто по трассе А155 (промежуток Теберда - Домбай) до знака «Бадукские озёра», сворачиваем направо к мосту, оставляем авто возле живописной реки Теберда.
      
      Пешком(около 2-х часов в гору): переходим через реку Теберда по подвесному мосту и у сотрудников тебердинского государственного биосферного заповедника оплачиваем взнос (выше написано). Обычно советуют вернуться к 5 часам вечера, поэтому после обеда чаще маршрут закрыт на вход. Можно взять палки для ходьбы (бесплатно)
      
      Начинаем подъем в гору по тропе, по пути встречаем других туристов, здороваемся:), идём дальше. 
      Через ~ полчаса видим мост через реки Хаджибей и Бадук (есть чудесная легенда о них), переходим по мосту на другую сторону склона, продолжаем подъем. 
      Если вы до сих пор не сделали ни одного фото, уже пора достать телефон/фотоаппарат! 
      Примерно через 2 часа достаточно интенсивного подъема видим насыпь крупных булыжников, переходим по ней к первому Бадукскому озеру - самому маленькому, но не менее красивому, чем другие два. 
      Устраиваем недолгий привал, едим, купаемся (вода ледяная!!!), отдыхаем и идём дальше.
      
      По тропе идём минут 10-15 до второго Бадукского озёра - оно гораздо больше. Желающие купаются, сопровождая процесс криками через стучащие друг об друга зубы (очень холодно)
      
      Идём к третьему Бадукскому озеру - самому большому. Вы уже заметили, что у каждого из них особенный цвет?)
      Смотрим на часы, рассчитываем время на путь обратно и со спокойной душой отдыхаем, едим, купаемся.
      
      Дальше для туристов пути нет.
      
      Готовы идти обратно? Пошли! (Тоже примерно 2 часа вниз). Берегите силы, если нужно, опирайтесь на палки.
      
      Счастливые возвращаемся к машине. Строим планы на завтра.`,
      lat: 43.37457693374691,
      lng: 41.655982488901266,
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
       {
      url: "/img/сент.jpeg",// +Roma
      title: "Сентинский храм",
      difficulty: 1,
      address: 'аул Нижняя Теберда',
      length: 26,
      description: `Маршрут относится к категориям: однодневный, автомобильный, для туристов любой степени подготовки

      Это место можно посетить по пути в Теберду-Домбай (Вы все равно проезжаете возле него) или же выделить отдельный день и отправиться  из места отдыха.
      
      Следуя на авто по федеральной трассе А155 из Черкесска в Домбай, в конце Нижней Теберды сворачивайте направо после моста через реку Теберда. Мимо пасущихся коров и овец поднимайтесь примерно полчаса до указателя «Сентинский храм», впрочем, вы итак его увидите ещё по дороге (если быть внимательным и смотреть вверх на гору)
      Оставляете машину и идёте пешком около 10 минут, любуясь видами на ущелье и населенный пункт внизу.
      Храм стоит на краю горы (холма).
      И стоит он там…внимание… с 965 года! Х век!!! Я уже сказал, что это древнейший христианский храм на территории России?) 
      Здесь лучше не описывать. Нужно увидеть самим. Обратите внимание на фрески, а также на систему сбора и хранения дождевой воды. Пожалуйста, отнеситесь с уважением к памятнику архитектуры, не стоит писать на стенах свои имена и названия городов, из которых вы прибыли. 
      Обязательно сделайте множество фотографий! Так вы сможете возвращаться сюда ещё много раз.
      
      Выше храма ведёт дорога к ещё одной мало кому известной локации. Но это уже другой маршрут и другая история…)`,
      lat: 43.63708111354883,
      lng: 41.865741562196355,
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "/img/фор.jpeg",
      title: "Форельное озеро",
      difficulty: 1,
      address: 'Гоначхирское ущелье',
      length: 40,
      description: `
      Маршрут относится к категориям: однодневный, автомобильный/конный/пеший/на квадроциклах, для туристов любой степени подготовки
      
      Следуя по федеральной трассе А155 на промежутке Теберда - Домбай сворачивайте налево у знака «Клухорский перевал»
      Необходимо оплатить взнос заповеднику - 200-300 руб с человека в зависимости от дня недели
       
      Вы окажетесь на Военно-Сухумской дороге - езжайте по ущелью до самого озера (дорога одна, не заблудитесь) 
      Гоначхирское ущелье многие считают самым красивым в Карачаево-Черкесии и, скорее всего, по праву.
      Вдоль дороги течёт бурная горная река Гоначхир, по руслу которой накиданы куски скал размером с машину. 
      Если вы путешествуете в апреле-июне, то ближе к концу пути увидите возле реки снежник (остатки лавины, которая сходит несколько раз за зимний сезон - именно поэтому ущелье закрыто на зиму). Впереди будет виден Главный Кавказский хребет. Доехав до озера, необязательно сразу останавливаться - можно продолжить путь до пограничной заставы - граница с Абхазией. Дальше вас не пустят, но здесь тоже очень живописно. Пофоткались? Возвращайтесь к озеру (это минут 5-7). Теперь можете кушать и купаться - что ещё нужно для счастья?) Плавать в чистейшей воде, когда тебя окружают огромные горы - незабываемое чувство. 
      
      Если оооочень хочется - можно достать пропуск (официально, через заповедник и пограничную службу) и отправиться дальше к клухорскому перевалу (раньше,в советское время, здесь проходил знаменитый 43-й маршрут, который начинался в Кавказских Минеральных Водах, проходил через Теберду-Домбай (вместе с множеством походов) и заканчивался переходом через клухорский перевал к чёрному морю - в Сухум). Но вы до моря дойти точно не сможете - не пустят. Но можно доехать до Клухорского озера, там же - памятник «Героическим защитникам заоблачных высот» - участникам ВОВ.
      Интересный факт: здесь проходил знаменитый Великий шелковый путь. 
      
      Остальное вы должны увидеть сами!!!
      О красоте писать не буду - лучше напишите вы.`,
      lat: 43.285018760586226,
      lng: 41.793202576619976,
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     ])
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Routes');
  }
};
