import { IMainInfo } from '../../constants/types';
import imgDmitry from '../../assets/aboutus/dmitry.png';
import imgRoman from '../../assets/aboutus/roman.png';
export const mainRomanInfo: IMainInfo = {
  image: imgRoman,
  name: 'Роман Кадевич',
  role: 'Фронтенд разработчик',
  sex: 'Мужской',
  country: 'Беларусь',
  ghlink: 'https://github.com/RomanKadevich',
};
export const mainDmitryInfo: IMainInfo = {
  image: imgDmitry,
  name: 'Дмитрий Булгаков',
  role: 'Фронтенд разработчик',
  sex: 'Мужской',
  country: 'Россия / Турция',
  ghlink: 'https://github.com/ffriday',
};
export const infoRoman = `    Роман, 29 лет, решил изменить свою карьеру и следовать своей страсти к разработке веб-приложений. Несмотря на образование в области управления и экономики, Роман почувствовал, что его истинное призвание связано с миром программирования.
С детства он проявлял интерес к компьютерным технологиям, изучая ActionScript и создавая анимации во Flash. Несколько лет назад он также освоил основы Python, что укрепило его креативный потенциал и вдохновило погрузиться в программирование.Роман имеет богатый опыт в области управления и экономики. Этот опыт дал ему ценные навыки в организации и планировании, которые помогают ему во время разработки. Более девяти месяцев активного обучения фронтенду укрепили его знания и навыки, делая его готовым к созданию веб-приложений любой сложности.`;

export const contributionRoman = `Роман занимал важную роль в рамках проекта. Его обязанности включали разработку пользовательского интерфейса, отличающегося не только привлекательным дизайном, но и высокой функциональностью. Кроме того, он успешно решал задачи по оптимизации кода, что способствовало увеличению производительности приложения и уменьшению технических проблем.
  Его активное участие в обсужденияхи разработке стратегии реализации оказало важное влияние на достижение общих целей проекта.
В итоге, его вклад в проект обеспечил завершение разработки приложенияи обеспеченил высокий уровень его качества.`;
export const difficultiesRoman =
  'Важно отметить, что в начале проекта возникла значительная трудность из-за отсутствия опыта работы Романа с React. Это требовало интенсивного самообучения и освоения большого объема новых знаний в процессе разработки. Роман проявил  усердие и усилия, чтобы осоить основы данной технологии, и его решимость в обучении оказала важное воздействие на успешное завершение проекта. Этот опыт также подчеркнул его способность быстро адаптироваться и преодолевать трудности в профессиональном росте.';

export const infoDmitry =
  'Дмитрий, 35 лет, в 2022 году принял решение переехать и развиваться в новой профессии - разработке веб-приложений. Программирование и компьютерами Дмитрий заинтересовался в старшей школе, когда у него появился первый компьютер. С тех пор он получил высшее образование в области обработки информации в геофизике, изучал и применял языки программирования, такие как Visual Basic, C#, Python, Fortran, но это не было его основным видом деятельности. Дмитрий строил, проектировал и руководил проектами по строительству бассейнов и фитнесов.Но пришло время для изменений и Дмитрий твердо решил освоить навыки по разработке на JavaScript. Этот шаг, а так-же опыт в управлении проектами позволит ему использовать свои знания и навыки в создание современных веб-приложений и приблизит его к его новой карьере в ИТ-сфере';

export const contributionDmitry = `На данном проекте Дмитрий активно участвовал в работе команды, где он взял на себя часть обязанностей лидера команды. Он распределял задачи и планировал промежуточные дедлайны, обеспечивая плавное и эффективное выполнение проекта. Его главным направлением работы стала интеграция с API системы eCommerce, но помимо этого, Дмитрий также уделял внимание разработке пользовательского интерфейса.
Благодаря активному участию в обсуждениях архитектуры и стратегии разработки, Дмитрий и команда смогли преодолеть множество трудностей, с которыми столкнулись в процессе, что подчеркивает их способность преодолевать трудности ради достижения общей цели.`;
export const difficultiesDmitry =
  'Начиная разработку проекта на новом инструменте - React Дмитрий и команда понимали, что это потребует значительных усилий, это был их осознанный выбор и желание освонить новый навык. Неожиданной трудностью стало отчисление одного из членов команды из-за проблем с прохождением интервью, что потребовало от команды перераспределить и выделать больше времени на работу. В процессе выполнения проекта Дмитрий тратил много времени на изучение документации API, оглядываясь назад, он предпочел бы уделить этому больше внимания в начале проекта, что позволило бы равномерно распределить нагрузку на протяжении всего проекта.';
export const cooperation = (
  <>
    <p>
      Главная цель участников команды - получение новых знаний, опыта разработки и взаимодействия в команде. С уверенностью можем сказать, что
      команда BugBusters такой опыт получила! Вместо поиска команд Дмитрий и Роман решили сделать свою собственную, после чего провели несколько
      интервью для поиска третьего участника, им оказался Андрей (
      <a className='about-us__cooperation-link' href='https://github.com/iandyone'>
        ссылка на GitHub
      </a>
      ), Андрей обладал опытом разработки на React и показался хорошим претендентом на место в команде. Андрей активно участвовал в настройке
      окружения для разработки и в первых этапах создания приложения, но так сложилось, что Андрей был отчислен из школы из-за проблем с интервью
      в середине второго спринта.
    </p>
    <p>
      Организация работы команды строилась на основе Github Project и чата в Telegram, для важных вопросов организовыволись созвоны. Для
      визуализации идей и схем использовалась доска в Miro. Каждый участник комагды занимался своими тасками, но по итогу выполнения таска в
      команде устраивались созвоны для разбора кода и логики класса или компонента, таким образом все участники команды имели представление о
      работе своих тиммейтов.
    </p>
    <p>
      На старте проекта, когда команда состояла из 3 человек приоритет в организации был отдан GitHub Project, но позднее, когда команда
      уменьшилась до 2 человек коммуникации переместились в чат и на доску Miro т.к. был отдан приоритет скорости общения и более богатому
      инструментарию визуализации задачь и процессов.
    </p>
    <p>
      Благодарим Ирину (
      <a className='about-us__cooperation-link' href='https://www.behance.net/kadzevich'>
        ссылка на Behance
      </a>
      ) за предоставление макета дизайна сайта, а также подбор и нейминг букетов для нашего магазина.{' '}
    </p>
    <p>Спасибо нашим менторам за советы, комментарии!</p>
  </>
);
