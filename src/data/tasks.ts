import type { TaskTemplate, TaskType, PlayerRole } from '../types';

export const TASK_TEMPLATES: TaskTemplate[] = [
  // ============================================================
  //  SHARED (available for all roles) — meetings & universal absurd
  // ============================================================
  { title: 'Синк по синку синков', type: 'meeting' },
  { title: 'Стендап на 2 часа', type: 'meeting' },
  { title: 'Ретро по ретро', type: 'meeting' },
  { title: 'Планирование планирования', type: 'meeting' },
  { title: 'Созвон "можно было письмом"', type: 'meeting' },
  { title: 'Демо без подготовки', type: 'meeting' },
  { title: 'Брейншторм в пятницу в 17:00', type: 'meeting' },
  { title: '1-on-1 с 8 людьми', type: 'meeting' },
  { title: 'Воркшоп по Agile для Agile-команды', type: 'meeting' },

  { title: 'Объяснить менеджеру техдолг', type: 'absurd' },
  { title: 'Оценить задачу за 5 минут', type: 'absurd' },
  { title: 'Сделать MVP за выходные', type: 'absurd' },
  { title: 'Разобраться в чужом коде', type: 'absurd' },
  { title: 'Пройти код-ревью с первой попытки', type: 'absurd' },
  { title: 'Сделать "быстренько"', type: 'absurd' },
  { title: 'Нарисовать 7 красных линий', type: 'absurd' },
  { title: 'Настроить принтер', type: 'absurd' },
  { title: 'Починить интернет', type: 'absurd' },

  // ============================================================
  //  FRONTEND
  // ============================================================
  { title: 'Кнопка работает только по четвергам', type: 'bug', roles: ['frontend'] },
  { title: 'CSS сломался в IE', type: 'bug', roles: ['frontend'] },
  { title: 'Форма отправляется 3 раза', type: 'bug', roles: ['frontend'] },
  { title: 'Аватарка отображается вверх ногами', type: 'bug', roles: ['frontend'] },
  { title: 'Кнопка "Отмена" сохраняет данные', type: 'bug', roles: ['frontend'] },
  { title: 'Тёмная тема светлее светлой', type: 'bug', roles: ['frontend'] },
  { title: 'Скролл работает только влево', type: 'bug', roles: ['frontend'] },
  { title: 'Модалка за модалкой за модалкой', type: 'bug', roles: ['frontend'] },
  { title: 'z-index: 999999 не помогает', type: 'bug', roles: ['frontend'] },
  { title: 'Анимация работает только в Chrome', type: 'bug', roles: ['frontend'] },
  { title: 'Layout сдвигается при hover', type: 'bug', roles: ['frontend'] },
  { title: 'Шрифт не грузится на проде', type: 'bug', roles: ['frontend'] },

  { title: 'Сделать тёмную тему для тёмной темы', type: 'feature', roles: ['frontend'] },
  { title: 'Добавить AI в логин-форму', type: 'feature', roles: ['frontend'] },
  { title: 'AR-превью для текстовых файлов', type: 'feature', roles: ['frontend'] },
  { title: 'Виджет погоды в банковском приложении', type: 'feature', roles: ['frontend'] },
  { title: 'Добавить лайки к ошибкам', type: 'feature', roles: ['frontend'] },
  { title: 'Pixel-perfect по макету из Paint', type: 'feature', roles: ['frontend'] },
  { title: 'Сделать приложение метавселенной', type: 'feature', roles: ['frontend'] },
  { title: 'Адаптив под часы и холодильник', type: 'feature', roles: ['frontend'] },
  { title: 'Добавить NFT к аватаркам', type: 'feature', roles: ['frontend'] },

  { title: 'Вёрстка упала на iPhone 6', type: 'hotfix', roles: ['frontend'] },
  { title: 'Белый экран на проде', type: 'hotfix', roles: ['frontend'] },
  { title: 'Бандл весит 15 МБ', type: 'hotfix', roles: ['frontend'] },
  { title: 'CORS на проде, локально ОК', type: 'hotfix', roles: ['frontend'] },

  { title: 'Центрировать div', type: 'absurd', roles: ['frontend'] },
  { title: 'Объяснить бабушке Git', type: 'absurd', roles: ['frontend'] },
  { title: 'Обновить зависимости без слёз', type: 'absurd', roles: ['frontend'] },
  { title: 'Написать тесты на тесты', type: 'absurd', roles: ['frontend'] },
  { title: 'Понять, зачем 12 стейт-менеджеров', type: 'absurd', roles: ['frontend'] },
  { title: 'Мигрировать на новый фреймворк (опять)', type: 'absurd', roles: ['frontend'] },
  { title: 'Сверстать email для Outlook', type: 'absurd', roles: ['frontend'] },

  // ============================================================
  //  BACKEND
  // ============================================================
  { title: 'Пароль виден в URL', type: 'bug', roles: ['backend'] },
  { title: 'Логин работает без пароля', type: 'bug', roles: ['backend'] },
  { title: 'Дата рождения из будущего', type: 'bug', roles: ['backend'] },
  { title: 'Уведомления приходят вчерашние', type: 'bug', roles: ['backend'] },
  { title: 'Поиск находит всё кроме нужного', type: 'bug', roles: ['backend'] },
  { title: 'Пагинация возвращает одну страницу', type: 'bug', roles: ['backend'] },
  { title: 'Кэш не инвалидируется никогда', type: 'bug', roles: ['backend'] },
  { title: 'N+1 запросов на каждый клик', type: 'bug', roles: ['backend'] },
  { title: 'Race condition при оплате', type: 'bug', roles: ['backend'] },
  { title: 'Транзакция не откатывается', type: 'bug', roles: ['backend'] },
  { title: 'Enum валится при новом значении', type: 'bug', roles: ['backend'] },
  { title: 'Rate limiter считает ботов юзерами', type: 'bug', roles: ['backend'] },

  { title: 'Добавить блокчейн в TODO-лист', type: 'feature', roles: ['backend'] },
  { title: 'Кнопка "Мне повезёт" в CRM', type: 'feature', roles: ['backend'] },
  { title: 'Интеграция с холодильником', type: 'feature', roles: ['backend'] },
  { title: 'GraphQL поверх SOAP поверх REST', type: 'feature', roles: ['backend'] },
  { title: 'Микросервис для одной кнопки', type: 'feature', roles: ['backend'] },
  { title: 'AI-модерация комментариев котов', type: 'feature', roles: ['backend'] },
  { title: 'Кэш третьего уровня для лайков', type: 'feature', roles: ['backend'] },
  { title: 'Event sourcing для TODO-листа', type: 'feature', roles: ['backend'] },

  { title: 'БД удалилась сама', type: 'hotfix', roles: ['backend'] },
  { title: 'Деньги списываются дважды', type: 'hotfix', roles: ['backend'] },
  { title: 'Миграции откатились в 2019', type: 'hotfix', roles: ['backend'] },
  { title: 'API возвращает 200 на ошибки', type: 'hotfix', roles: ['backend'] },
  { title: 'Пулл коннектов кончился', type: 'hotfix', roles: ['backend'] },

  { title: 'Перевести легаси с COBOL', type: 'absurd', roles: ['backend'] },
  { title: 'Найти баг без логов', type: 'absurd', roles: ['backend'] },
  { title: 'Документировать 300 эндпоинтов', type: 'absurd', roles: ['backend'] },
  { title: 'Понять монолит из 2017', type: 'absurd', roles: ['backend'] },
  { title: 'Прочитать stack trace на 500 строк', type: 'absurd', roles: ['backend'] },
  { title: 'Дебагнуть race condition по логам', type: 'absurd', roles: ['backend'] },
  { title: 'Объяснить фронту, зачем 404', type: 'absurd', roles: ['backend'] },

  // ============================================================
  //  DEVOPS
  // ============================================================
  { title: 'CI падает на пустом месте', type: 'bug', roles: ['devops'] },
  { title: 'Докер-образ весит 4 ГБ', type: 'bug', roles: ['devops'] },
  { title: 'Pipeline зациклился', type: 'bug', roles: ['devops'] },
  { title: 'Секрет попал в git history', type: 'bug', roles: ['devops'] },
  { title: 'Helm chart не темплейтится', type: 'bug', roles: ['devops'] },
  { title: 'Terraform state рассинхронился', type: 'bug', roles: ['devops'] },
  { title: 'Сертификат обновился, но не тот', type: 'bug', roles: ['devops'] },
  { title: 'Cronjob запускается дважды', type: 'bug', roles: ['devops'] },
  { title: 'DNS пропагация третий день', type: 'bug', roles: ['devops'] },
  { title: 'Файрвол режет внутренний трафик', type: 'bug', roles: ['devops'] },
  { title: 'Volume заполнился под завязку', type: 'bug', roles: ['devops'] },

  { title: 'Поднять Kubernetes за день', type: 'feature', roles: ['devops'] },
  { title: 'GitOps для 47 репозиториев', type: 'feature', roles: ['devops'] },
  { title: 'Multi-region отказоустойчивость', type: 'feature', roles: ['devops'] },
  { title: 'Canary deploy для монолита', type: 'feature', roles: ['devops'] },
  { title: 'Service mesh с нуля', type: 'feature', roles: ['devops'] },
  { title: 'Zero-downtime миграция БД', type: 'feature', roles: ['devops'] },
  { title: 'Автоскейлинг по фазе луны', type: 'feature', roles: ['devops'] },
  { title: 'Вендор-лок в 3 облака сразу', type: 'feature', roles: ['devops'] },

  { title: 'ПРОД УПАЛ, ВСЁ ГОРИТ', type: 'hotfix', roles: ['devops', 'sre'] },
  { title: 'SSL истёк 3 дня назад', type: 'hotfix', roles: ['devops', 'sre'] },
  { title: 'Логи пишутся в /dev/null', type: 'hotfix', roles: ['devops', 'sre'] },
  { title: 'Бэкап — это README.md', type: 'hotfix', roles: ['devops'] },
  { title: 'Ноды в кластере NotReady', type: 'hotfix', roles: ['devops'] },
  { title: 'AWS счёт в 10 раз больше', type: 'hotfix', roles: ['devops'] },

  { title: 'Мигрировать Jenkins в GitHub Actions', type: 'absurd', roles: ['devops'] },
  { title: 'Объяснить девам, что такое Docker', type: 'absurd', roles: ['devops'] },
  { title: 'Написать Ansible на 2000 строк', type: 'absurd', roles: ['devops'] },
  { title: 'Дебажить YAML отступы в 3 ночи', type: 'absurd', roles: ['devops'] },
  { title: 'Понять Terraform из соседней команды', type: 'absurd', roles: ['devops'] },
  { title: '"Это работало в стейджинге"', type: 'absurd', roles: ['devops'] },
  { title: 'Развернуть прод по документации', type: 'absurd', roles: ['devops'] },

  // ============================================================
  //  SRE
  // ============================================================
  { title: 'Алерт фолзит каждые 5 минут', type: 'bug', roles: ['sre'] },
  { title: 'Dashboard врёт про latency', type: 'bug', roles: ['sre'] },
  { title: 'Метрики потерялись между DC', type: 'bug', roles: ['sre'] },
  { title: 'PagerDuty звонит не тому', type: 'bug', roles: ['sre'] },
  { title: 'Error budget уже на нуле', type: 'bug', roles: ['sre'] },
  { title: 'SLO считается неправильно', type: 'bug', roles: ['sre'] },
  { title: 'Tracing ID не пробрасывается', type: 'bug', roles: ['sre'] },
  { title: 'Prometheus OOM каждый час', type: 'bug', roles: ['sre'] },
  { title: 'Grafana dashboard — 200 панелей', type: 'bug', roles: ['sre'] },
  { title: 'Логи структурированы, но по-разному', type: 'bug', roles: ['sre'] },
  { title: 'Circuit breaker не срабатывает', type: 'bug', roles: ['sre'] },

  { title: 'Автоматический rollback по SLI', type: 'feature', roles: ['sre'] },
  { title: 'Chaos engineering в пятницу', type: 'feature', roles: ['sre'] },
  { title: 'SLO для внутреннего тул-сервиса', type: 'feature', roles: ['sre'] },
  { title: 'Runbook автоматизация', type: 'feature', roles: ['sre'] },
  { title: 'Synthetic мониторинг из 5 регионов', type: 'feature', roles: ['sre'] },
  { title: 'Capacity planning на Q3', type: 'feature', roles: ['sre'] },
  { title: 'Distributed tracing для гРПЦ', type: 'feature', roles: ['sre'] },
  { title: 'Anomaly detection по метрикам', type: 'feature', roles: ['sre'] },

  { title: 'Пуши шлются CEO', type: 'hotfix', roles: ['sre'] },
  { title: 'Latency p99 = 30 секунд', type: 'hotfix', roles: ['sre'] },
  { title: '503 на всё, мониторинг молчит', type: 'hotfix', roles: ['sre'] },
  { title: 'Каскадный отказ 5 сервисов', type: 'hotfix', roles: ['sre'] },
  { title: 'Memory leak жрёт по гигу в час', type: 'hotfix', roles: ['sre'] },

  { title: 'Написать постмортем без blame', type: 'absurd', roles: ['sre'] },
  { title: 'Выжить на стендапе', type: 'absurd', roles: ['sre'] },
  { title: 'Объяснить SLO продакт-менеджеру', type: 'absurd', roles: ['sre'] },
  { title: 'Не заснуть на on-call в 4 утра', type: 'absurd', roles: ['sre'] },
  { title: 'Найти root cause за 5 минут', type: 'absurd', roles: ['sre'] },
  { title: 'Починить алерт не сломав другой', type: 'absurd', roles: ['sre'] },
  { title: '"Просто добавь retry"', type: 'absurd', roles: ['sre'] },

  // ============================================================
  //  PRODUCT
  // ============================================================
  { title: 'Фича-реквест противоречит прошлому', type: 'bug', roles: ['product'] },
  { title: 'Роадмап устарел за спринт', type: 'bug', roles: ['product'] },
  { title: 'Стейкхолдеры хотят разное', type: 'bug', roles: ['product'] },
  { title: 'A/B тест показал ничего', type: 'bug', roles: ['product'] },
  { title: 'Юзер-стори без критериев приёмки', type: 'bug', roles: ['product'] },
  { title: 'Приоритеты поменялись третий раз за день', type: 'bug', roles: ['product'] },
  { title: 'Бэклог на 400 тикетов без сортировки', type: 'bug', roles: ['product'] },
  { title: 'KPI считались неправильно квартал', type: 'bug', roles: ['product'] },
  { title: 'Retention упал после "улучшений"', type: 'bug', roles: ['product'] },
  { title: 'NPS -20 после нового онбординга', type: 'bug', roles: ['product'] },

  { title: 'AI-роадмап генератор', type: 'feature', roles: ['product'] },
  { title: 'Дашборд OKR для OKR дашборда', type: 'feature', roles: ['product'] },
  { title: 'Геймификация KPI сотрудников', type: 'feature', roles: ['product'] },
  { title: 'Метавселенная для стендапов', type: 'feature', roles: ['product'] },
  { title: 'NFT за закрытие спринта', type: 'feature', roles: ['product'] },
  { title: 'Монетизация кнопки "Отмена"', type: 'feature', roles: ['product'] },
  { title: 'Подписка на уведомления об уведомлениях', type: 'feature', roles: ['product'] },
  { title: 'Добавить social proof на страницу 404', type: 'feature', roles: ['product'] },

  { title: 'CEO хочет пивот ПРЯМО СЕЙЧАС', type: 'hotfix', roles: ['product'] },
  { title: 'Конкурент запустил то же самое', type: 'hotfix', roles: ['product'] },
  { title: 'Инвестор просит метрики за вчера', type: 'hotfix', roles: ['product'] },
  { title: 'Юзеры уходят после онбординга', type: 'hotfix', roles: ['product'] },
  { title: 'PR-кризис из-за фичи', type: 'hotfix', roles: ['product'] },

  { title: 'Приоритизировать 200 фич за час', type: 'absurd', roles: ['product'] },
  { title: 'Объяснить разработчику зачем кнопка', type: 'absurd', roles: ['product'] },
  { title: 'Написать PRD на салфетке', type: 'absurd', roles: ['product'] },
  { title: 'Провести кастдев с мамой', type: 'absurd', roles: ['product'] },
  { title: 'Сделать RICE-скоринг для обеда', type: 'absurd', roles: ['product'] },
  { title: '"Давайте как в Тинькофф, только лучше"', type: 'absurd', roles: ['product'] },
  { title: 'Объяснить CEO что MVP ≠ финал', type: 'absurd', roles: ['product'] },

  // ============================================================
  //  ANALYST
  // ============================================================
  { title: 'Дашборд показывает вчерашние данные', type: 'bug', roles: ['analyst'] },
  { title: 'SQL-запрос крутится 40 минут', type: 'bug', roles: ['analyst'] },
  { title: 'Метрики в двух отчётах расходятся', type: 'bug', roles: ['analyst'] },
  { title: 'ETL-пайплайн сломался молча', type: 'bug', roles: ['analyst'] },
  { title: 'NULL-ы съели половину воронки', type: 'bug', roles: ['analyst'] },
  { title: 'Дубликаты в таблице фактов', type: 'bug', roles: ['analyst'] },
  { title: 'График растёт но бизнес падает', type: 'bug', roles: ['analyst'] },
  { title: 'JOIN вернул в 10 раз больше строк', type: 'bug', roles: ['analyst'] },
  { title: 'Когортный анализ считает мёртвых юзеров', type: 'bug', roles: ['analyst'] },
  { title: 'BI-инструмент обновился и всё сломал', type: 'bug', roles: ['analyst'] },

  { title: 'ML-модель предсказания чурна', type: 'feature', roles: ['analyst'] },
  { title: 'Real-time аналитика на стриме данных', type: 'feature', roles: ['analyst'] },
  { title: 'Дашборд дашбордов', type: 'feature', roles: ['analyst'] },
  { title: 'Предсказание выручки по фазе луны', type: 'feature', roles: ['analyst'] },
  { title: 'A/B тест кнопки "Купить" vs "Отдай деньги"', type: 'feature', roles: ['analyst'] },
  { title: 'Сегментация юзеров по знаку зодиака', type: 'feature', roles: ['analyst'] },
  { title: 'Автоматизировать еженедельный отчёт', type: 'feature', roles: ['analyst'] },
  { title: 'Data Lake для логов кофемашины', type: 'feature', roles: ['analyst'] },

  { title: 'Отчёт для совета директоров через час', type: 'hotfix', roles: ['analyst'] },
  { title: 'Данные за месяц пропали из DWH', type: 'hotfix', roles: ['analyst'] },
  { title: 'Прод-база легла от аналитического запроса', type: 'hotfix', roles: ['analyst'] },
  { title: 'Метрика врала квартал — надо пересчитать', type: 'hotfix', roles: ['analyst'] },
  { title: 'CEO увидел "не тот" график', type: 'hotfix', roles: ['analyst'] },

  { title: 'Объяснить корреляцию ≠ причинность', type: 'absurd', roles: ['analyst'] },
  { title: 'Найти инсайт в рандомных данных', type: 'absurd', roles: ['analyst'] },
  { title: '"Сделай дашборд, но красивый"', type: 'absurd', roles: ['analyst'] },
  { title: 'Посчитать ROI корпоратива', type: 'absurd', roles: ['analyst'] },
  { title: 'Доказать что фича работает (она нет)', type: 'absurd', roles: ['analyst'] },
  { title: 'Визуализировать данные без данных', type: 'absurd', roles: ['analyst'] },
  { title: '"Просто выгрузи из базы" (200 млн строк)', type: 'absurd', roles: ['analyst'] },
];

/** Get tasks available for a specific role */
export function getTasksForRole(role: PlayerRole): TaskTemplate[] {
  return TASK_TEMPLATES.filter(
    (t) => !t.roles || t.roles.includes(role)
  );
}

export const TASK_CONFIG: Record<TaskType, {
  maxTime: number;
  workTime: number;
  points: number;
  damage: number;
}> = {
  bug: { maxTime: 30, workTime: 4, points: 10, damage: 8 },
  feature: { maxTime: 40, workTime: 6, points: 25, damage: 12 },
  hotfix: { maxTime: 18, workTime: 3, points: 30, damage: 15 },
  meeting: { maxTime: 35, workTime: 5, points: 5, damage: 6 },
  absurd: { maxTime: 45, workTime: 7, points: 50, damage: 15 },
};

export const TASK_COLORS: Record<TaskType, string> = {
  bug: '#ffe600',
  feature: '#00d4ff',
  hotfix: '#ff3b3b',
  meeting: '#8e8e93',
  absurd: '#bf5af2',
};

export const TASK_LABELS: Record<TaskType, string> = {
  bug: 'BUG',
  feature: 'FEATURE',
  hotfix: 'HOTFIX',
  meeting: 'MEETING',
  absurd: '???',
};

export const ROLE_META: Record<PlayerRole, {
  label: string;
  icon: string;
  color: string;
  description: string;
}> = {
  frontend: {
    label: 'Frontend',
    icon: '🎨',
    color: '#00d4ff',
    description: 'CSS, div-ы, фреймворки каждый месяц',
  },
  backend: {
    label: 'Backend',
    icon: '🗄️',
    color: '#39ff14',
    description: 'API, базы данных, загадочные 500-ки',
  },
  devops: {
    label: 'DevOps',
    icon: '🔧',
    color: '#ff9500',
    description: 'Pipeline-ы, Docker, YAML-ад',
  },
  sre: {
    label: 'SRE',
    icon: '🔥',
    color: '#ff3b3b',
    description: 'Алерты, SLO, on-call в 3 ночи',
  },
  product: {
    label: 'Product',
    icon: '📋',
    color: '#ff6ec7',
    description: 'Роадмапы, приоритеты, "а давайте..."',
  },
  analyst: {
    label: 'Analyst',
    icon: '📊',
    color: '#a78bfa',
    description: 'Дашборды, SQL, "данные говорят..."',
  },
};
