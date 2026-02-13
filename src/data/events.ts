import type { GameEventTemplate, PlayerRole } from '../types';

export const EVENT_TEMPLATES: GameEventTemplate[] = [
  {
    type: 'fridayDeploy',
    title: 'ПЯТНИЧНЫЙ ДЕПЛОЙ',
    description: 'Все таймеры ускоряются x2!',
    duration: 8,
  },
  {
    type: 'investorCall',
    title: 'СОЗВОН С ИНВЕСТОРОМ',
    description: 'In Progress заблокирован!',
    duration: 5,
  },
  {
    type: 'coffeeBroken',
    title: 'КОФЕМАШИНА СЛОМАЛАСЬ',
    description: 'Кофе не восстанавливается!',
    duration: 10,
  },
  {
    type: 'internPushed',
    title: 'СТАЖЁР ПУШНУЛ В MAIN',
    description: '+3 хотфикса!',
    duration: 0,
  },
  {
    type: 'codeReview',
    title: 'CODE REVIEW',
    description: 'Задача вернулась из Done!',
    duration: 0,
  },
  {
    type: 'retro',
    title: 'РЕТРО',
    description: 'Все таймеры замедлены. Передышка!',
    duration: 6,
  },
];

/** Role-specific hotfix titles for the "intern pushed" event */
export const INTERN_HOTFIX_TITLES: Record<PlayerRole, string[]> = {
  frontend: [
    'Белый экран на проде',
    'Бандл весит 15 МБ',
    'CORS на проде, локально ОК',
  ],
  backend: [
    'БД удалилась сама',
    'Деньги списываются дважды',
    'API возвращает 200 на ошибки',
  ],
  devops: [
    'ПРОД УПАЛ, ВСЁ ГОРИТ',
    'Ноды в кластере NotReady',
    'AWS счёт в 10 раз больше',
  ],
  sre: [
    'Каскадный отказ 5 сервисов',
    '503 на всё, мониторинг молчит',
    'Latency p99 = 30 секунд',
  ],
};

export const COLUMN_TITLES: Record<string, string> = {
  backlog: 'BACKLOG',
  todo: 'TO DO',
  inProgress: 'IN PROGRESS',
  done: 'DONE',
};
