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

  // FRONTEND — batch 2
  { title: 'Tooltip уходит за экран', type: 'bug', roles: ['frontend'] },
  { title: 'Дропдаун открывается вверх ногами', type: 'bug', roles: ['frontend'] },
  { title: 'Фокус уходит в невидимый элемент', type: 'bug', roles: ['frontend'] },
  { title: 'Таблица рендерится 10 секунд', type: 'bug', roles: ['frontend'] },
  { title: 'Стили из другого компонента протекли', type: 'bug', roles: ['frontend'] },
  { title: 'Placeholder длиннее инпута', type: 'bug', roles: ['frontend'] },
  { title: 'Drag-n-drop работает только вниз', type: 'bug', roles: ['frontend'] },
  { title: 'WebSocket реконнектится каждую секунду', type: 'bug', roles: ['frontend'] },

  { title: 'Голосовое управление формой', type: 'feature', roles: ['frontend'] },
  { title: 'Конфетти при 500-й ошибке', type: 'feature', roles: ['frontend'] },
  { title: 'Скелетоны для скелетонов', type: 'feature', roles: ['frontend'] },
  { title: 'Параллакс для текста ошибки', type: 'feature', roles: ['frontend'] },
  { title: '3D-анимация для чекбокса', type: 'feature', roles: ['frontend'] },
  { title: 'Тач ID для лайка', type: 'feature', roles: ['frontend'] },
  { title: 'Виброотклик при каждом клике', type: 'feature', roles: ['frontend'] },

  { title: 'Infinite loop в useEffect на проде', type: 'hotfix', roles: ['frontend'] },
  { title: 'Утечка памяти убивает вкладку', type: 'hotfix', roles: ['frontend'] },
  { title: 'Кнопка оплаты не кликается', type: 'hotfix', roles: ['frontend'] },
  { title: 'Prod собрался с dev-конфигом', type: 'hotfix', roles: ['frontend'] },

  { title: 'Понять чужой CSS без комментариев', type: 'absurd', roles: ['frontend'] },
  { title: 'Найти элемент в DOM на 800 уровней', type: 'absurd', roles: ['frontend'] },
  { title: 'Собрать 47 согласований на UI-кит', type: 'absurd', roles: ['frontend'] },
  { title: 'Поддержать RTL за один спринт', type: 'absurd', roles: ['frontend'] },
  { title: 'Сделать идеальный автокомплит', type: 'absurd', roles: ['frontend'] },
  { title: '"Просто поправь отступ" (20 файлов)', type: 'absurd', roles: ['frontend'] },

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

  // BACKEND — batch 2
  { title: 'Токен не протухает никогда', type: 'bug', roles: ['backend'] },
  { title: 'Webhook приходит 3 раза', type: 'bug', roles: ['backend'] },
  { title: 'Дедлок при двух параллельных заказах', type: 'bug', roles: ['backend'] },
  { title: 'UTF-8 в эмодзи ломает парсер', type: 'bug', roles: ['backend'] },
  { title: 'Поле email принимает "aaa"', type: 'bug', roles: ['backend'] },
  { title: 'Swagger и код живут разной жизнью', type: 'bug', roles: ['backend'] },
  { title: 'Очередь растёт быстрее консьюмера', type: 'bug', roles: ['backend'] },
  { title: 'Таймзоны — сервер UTC, база MSK, фронт CET', type: 'bug', roles: ['backend'] },

  { title: 'Бот-модератор для Slack-каналов', type: 'feature', roles: ['backend'] },
  { title: 'API-гейтвей для одного микросервиса', type: 'feature', roles: ['backend'] },
  { title: 'Saga-оркестратор для отправки письма', type: 'feature', roles: ['backend'] },
  { title: 'SSO через 7 провайдеров', type: 'feature', roles: ['backend'] },
  { title: 'Генератор PDF из PDF', type: 'feature', roles: ['backend'] },
  { title: 'WebSocket-чат с историей на 10 лет', type: 'feature', roles: ['backend'] },
  { title: 'Мультитенант для 2 клиентов', type: 'feature', roles: ['backend'] },

  { title: 'SQL-инъекция в проде', type: 'hotfix', roles: ['backend'] },
  { title: 'Пользователь видит чужие данные', type: 'hotfix', roles: ['backend'] },
  { title: 'Очередь забилась на 2 млн сообщений', type: 'hotfix', roles: ['backend'] },
  { title: 'OOM на воркере каждые 30 минут', type: 'hotfix', roles: ['backend'] },

  { title: 'Разобраться в ORM-магии', type: 'absurd', roles: ['backend'] },
  { title: '"Почему тест проходит локально?"', type: 'absurd', roles: ['backend'] },
  { title: 'Ручной deploy через SSH в 2026', type: 'absurd', roles: ['backend'] },
  { title: 'Написать миграцию для миграции', type: 'absurd', roles: ['backend'] },
  { title: 'Разделить монолит на 50 микросервисов', type: 'absurd', roles: ['backend'] },
  { title: 'Объяснить бизнесу что такое eventual consistency', type: 'absurd', roles: ['backend'] },

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

  // DEVOPS — batch 2
  { title: 'ConfigMap перезаписал секрет', type: 'bug', roles: ['devops'] },
  { title: 'Ingress маршрутизирует в никуда', type: 'bug', roles: ['devops'] },
  { title: 'Registry переполнился образами', type: 'bug', roles: ['devops'] },
  { title: 'Init-контейнер не завершается', type: 'bug', roles: ['devops'] },
  { title: 'Liveness probe убивает здоровый под', type: 'bug', roles: ['devops'] },
  { title: 'ArgoCD синхронится в бесконечном цикле', type: 'bug', roles: ['devops'] },
  { title: 'Логи ротируются раз в год', type: 'bug', roles: ['devops'] },
  { title: 'Autoscaler масштабирует в ноль', type: 'bug', roles: ['devops'] },

  { title: 'Platform engineering для 3 человек', type: 'feature', roles: ['devops'] },
  { title: 'FinOps дашборд для каждого пода', type: 'feature', roles: ['devops'] },
  { title: 'Immutable infrastructure для стейджинга', type: 'feature', roles: ['devops'] },
  { title: 'Internal developer portal', type: 'feature', roles: ['devops'] },
  { title: 'Policy-as-code для всего кластера', type: 'feature', roles: ['devops'] },
  { title: 'Spot-инстансы для прода (what could go wrong)', type: 'feature', roles: ['devops'] },
  { title: 'Feature flags через Kubernetes labels', type: 'feature', roles: ['devops'] },

  { title: 'Pod Eviction на всех нодах сразу', type: 'hotfix', roles: ['devops'] },
  { title: 'Terraform удалил load balancer', type: 'hotfix', roles: ['devops'] },
  { title: 'Секреты в plain text в логах', type: 'hotfix', roles: ['devops'] },
  { title: 'DNS-loop уронил весь кластер', type: 'hotfix', roles: ['devops'] },

  { title: 'Написать документацию для пайплайна', type: 'absurd', roles: ['devops'] },
  { title: '"У меня работает в миникубе"', type: 'absurd', roles: ['devops'] },
  { title: 'Обновить кластер без даунтайма (хаха)', type: 'absurd', roles: ['devops'] },
  { title: 'Убедить всех использовать один CI', type: 'absurd', roles: ['devops'] },
  { title: 'Отдебажить networking в Kubernetes', type: 'absurd', roles: ['devops'] },
  { title: 'Объяснить разницу между CD и CD', type: 'absurd', roles: ['devops'] },

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

  // SRE — batch 2
  { title: 'Alert fatigue — 200 алертов в час', type: 'bug', roles: ['sre'] },
  { title: 'Метрика counter сбросилась в ноль', type: 'bug', roles: ['sre'] },
  { title: 'Distributed tracing теряет спаны', type: 'bug', roles: ['sre'] },
  { title: 'Корреляция инцидентов не работает', type: 'bug', roles: ['sre'] },
  { title: 'On-call расписание кривое — дежурят двое', type: 'bug', roles: ['sre'] },
  { title: 'Statuspage показывает "all green" при даунтайме', type: 'bug', roles: ['sre'] },
  { title: 'Log aggregation отстаёт на 20 минут', type: 'bug', roles: ['sre'] },
  { title: 'Service dependency map устарела', type: 'bug', roles: ['sre'] },

  { title: 'SLO-трекер с автоматическим бюджетом', type: 'feature', roles: ['sre'] },
  { title: 'Incident commander бот в Slack', type: 'feature', roles: ['sre'] },
  { title: 'Golden signals дашборд для каждого сервиса', type: 'feature', roles: ['sre'] },
  { title: 'Load testing перед каждым релизом', type: 'feature', roles: ['sre'] },
  { title: 'Error budget policy для продактов', type: 'feature', roles: ['sre'] },
  { title: 'Canary analysis автоматизация', type: 'feature', roles: ['sre'] },
  { title: 'Unified logging format для 30 сервисов', type: 'feature', roles: ['sre'] },

  { title: 'Thundering herd после деплоя', type: 'hotfix', roles: ['sre'] },
  { title: 'Connection pool exhaustion', type: 'hotfix', roles: ['sre'] },
  { title: 'DNS TTL не обновился, трафик идёт в старый IP', type: 'hotfix', roles: ['sre'] },
  { title: 'Горит production — rollback не помогает', type: 'hotfix', roles: ['sre'] },

  { title: 'Убедить команду писать runbooks', type: 'absurd', roles: ['sre'] },
  { title: 'Посчитать "скока девяток" нам нужно', type: 'absurd', roles: ['sre'] },
  { title: '"Давайте отключим мониторинг на время деплоя"', type: 'absurd', roles: ['sre'] },
  { title: 'Провести game day без паники', type: 'absurd', roles: ['sre'] },
  { title: 'Blameless постмортем (с blame)', type: 'absurd', roles: ['sre'] },
  { title: 'Объяснить latency budget менеджменту', type: 'absurd', roles: ['sre'] },

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

  // PRODUCT — batch 2
  { title: 'Фидбэк юзеров противоречит метрикам', type: 'bug', roles: ['product'] },
  { title: 'OKR из прошлого квартала копипастнули', type: 'bug', roles: ['product'] },
  { title: 'Воронка считает ботов за юзеров', type: 'bug', roles: ['product'] },
  { title: 'Product-market fit пропал после редизайна', type: 'bug', roles: ['product'] },
  { title: 'Спецификация и прод — два разных продукта', type: 'bug', roles: ['product'] },
  { title: 'Customer journey map ведёт в тупик', type: 'bug', roles: ['product'] },
  { title: 'Конверсия упала а никто не заметил', type: 'bug', roles: ['product'] },
  { title: 'Два PM пилят одну фичу по-разному', type: 'bug', roles: ['product'] },

  { title: 'Vibes-based приоритизация', type: 'feature', roles: ['product'] },
  { title: 'AI-генератор юзер-стори', type: 'feature', roles: ['product'] },
  { title: 'Автоматический JTBD-фреймворк', type: 'feature', roles: ['product'] },
  { title: 'Встроенный конкурентный анализ', type: 'feature', roles: ['product'] },
  { title: 'NPS-опрос при закрытии баг-репорта', type: 'feature', roles: ['product'] },
  { title: 'Product analytics за 3 клика (утопия)', type: 'feature', roles: ['product'] },
  { title: 'Roadmap с AI-эстимейтами', type: 'feature', roles: ['product'] },

  { title: 'Клиент грозит уйти к конкуренту', type: 'hotfix', roles: ['product'] },
  { title: 'Фича в проде а PRD нет', type: 'hotfix', roles: ['product'] },
  { title: 'Стейкхолдер эскалировал на CEO', type: 'hotfix', roles: ['product'] },
  { title: 'Релиз сломал главный use case', type: 'hotfix', roles: ['product'] },

  { title: 'Провести discovery с дедлайном вчера', type: 'absurd', roles: ['product'] },
  { title: '"Давайте без ТЗ, и так понятно"', type: 'absurd', roles: ['product'] },
  { title: 'Убедить стейкхолдера что он не прав', type: 'absurd', roles: ['product'] },
  { title: 'Impact mapping для бага в footer', type: 'absurd', roles: ['product'] },
  { title: 'Ежедневный отчёт об отчётах', type: 'absurd', roles: ['product'] },
  { title: 'Написать стратегию на Q5', type: 'absurd', roles: ['product'] },

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

  // ANALYST — batch 2
  { title: 'Airflow DAG упал и никто не заметил', type: 'bug', roles: ['analyst'] },
  { title: 'Витрина данных расходится с источником', type: 'bug', roles: ['analyst'] },
  { title: 'Window function съела всю память', type: 'bug', roles: ['analyst'] },
  { title: 'Дашборд грузится дольше чем SQL', type: 'bug', roles: ['analyst'] },
  { title: 'Pivot table показывает отрицательных юзеров', type: 'bug', roles: ['analyst'] },
  { title: 'Партицирование таблицы сломало отчёты', type: 'bug', roles: ['analyst'] },
  { title: 'Данные пришли в неправильной кодировке', type: 'bug', roles: ['analyst'] },
  { title: 'Дедупликация удалила оригиналы', type: 'bug', roles: ['analyst'] },

  { title: 'Self-service аналитика для менеджеров', type: 'feature', roles: ['analyst'] },
  { title: 'Алерт на аномалии в метриках', type: 'feature', roles: ['analyst'] },
  { title: 'Автогенерация SQL из естественного языка', type: 'feature', roles: ['analyst'] },
  { title: 'Data quality мониторинг', type: 'feature', roles: ['analyst'] },
  { title: 'Reverse ETL в CRM', type: 'feature', roles: ['analyst'] },
  { title: 'Embedding-поиск по логам', type: 'feature', roles: ['analyst'] },
  { title: 'Предиктивная модель оттока на XGBoost', type: 'feature', roles: ['analyst'] },

  { title: 'Отчёт уже у CEO а данные неправильные', type: 'hotfix', roles: ['analyst'] },
  { title: 'Airflow заспамил 10000 тасков', type: 'hotfix', roles: ['analyst'] },
  { title: 'Аналитический запрос заблокировал транзакции', type: 'hotfix', roles: ['analyst'] },
  { title: 'Tableau лицензия истекла перед демо', type: 'hotfix', roles: ['analyst'] },

  { title: 'Найти "actionable insights" в шуме', type: 'absurd', roles: ['analyst'] },
  { title: '"А можно в Excel?" (10 GB данных)', type: 'absurd', roles: ['analyst'] },
  { title: 'Объяснить p-value маркетологу', type: 'absurd', roles: ['analyst'] },
  { title: 'Доказать стат. значимость на 12 юзерах', type: 'absurd', roles: ['analyst'] },
  { title: 'Нарисовать график без осей', type: 'absurd', roles: ['analyst'] },
  { title: '"Почему цифры другие если посчитать иначе?"', type: 'absurd', roles: ['analyst'] },
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
