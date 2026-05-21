# DEPLOY — как устроен прод этого репо

**TL;DR:** `git push origin main` → автодеплой на `www.riskawarenessweek.com` через 30–60 секунд. Всё.

Если что-то не задеплоилось — читай до конца, тут описаны все грабли.

---

## Архитектура

```
git push origin main
  │
  ├─→ github.com/riskacademy/RAW-website          (source of truth, не наш аккаунт)
  └─→ github.com/TerekhinAndrei/raw_website       (mirror, наш личный аккаунт)
                  │
                  ↓ webhook
        Vercel project: risk-academy1/raw_website
          (https://vercel.com/risk-academy1/raw_website)
                  │
                  ↓ build & deploy
        www.riskawarenessweek.com  (production alias)
```

**Ключевая особенность:** `origin` сконфигурирован с **двумя push-URL'ами**. Один `git push origin main` пушит и в `riskacademy/RAW-website`, и в `TerekhinAndrei/raw_website` одной командой.

Vercel подключен **только к зеркалу** (`TerekhinAndrei/raw_website`), потому что в аккаунте `riskacademy` у нас нет admin-прав для установки Vercel GitHub App. Зеркало — это техническая обходка, не идеальная архитектура. См. раздел «Правильный фикс на будущее».

---

## Как деплоить

```bash
git push origin main
```

Всё. Никаких `vercel --prod`, никаких ручных операций.

Чтобы убедиться, что прошло:

```bash
# 1. Оба репо приняли коммит — push сам распечатает две строки "To <url>"
# 2. Vercel триггернул деплой
curl -sI https://www.riskawarenessweek.com/ | grep -iE "etag|age"
# etag должен поменяться через ~1 минуту после push'а
```

---

## Локальный git config (как это настроено)

```bash
$ git remote -v
origin   https://github.com/riskacademy/RAW-website          (fetch)
origin   https://github.com/riskacademy/RAW-website.git      (push)
origin   https://github.com/TerekhinAndrei/raw_website.git   (push)
```

Если на новой машине настраиваешь с нуля:

```bash
git clone https://github.com/riskacademy/RAW-website.git
cd RAW-website
git remote set-url --add --push origin https://github.com/riskacademy/RAW-website.git
git remote set-url --add --push origin https://github.com/TerekhinAndrei/raw_website.git
# Проверка
git remote -v   # должно показать 1 fetch + 2 push URL на origin
```

---

## Грабли и как их распознать

### Симптом: `git push origin main` пишет только в один репо

Кто-то на этой машине сделал `git remote set-url origin <something>` без `--add --push` — это перезаписало push-config. Перенастрой по разделу выше.

### Симптом: код в обоих репо, но прод не обновляется

Проверь, что Vercel GitHub App жив в `TerekhinAndrei/raw_website`:
```bash
TOKEN=$(python3 -c 'import json; print(json.load(open("/Users/$USER/Library/Application Support/com.vercel.cli/auth.json")).get("token",""))')
curl -s "https://api.vercel.com/v9/projects/prj_sJkfAnJJAS6y9aUU2C4rZCg8kKFY?teamId=team_pE5Yyufk4cs2nBbBt7ovGpAW" \
  -H "Authorization: Bearer $TOKEN" | python3 -c "import sys,json; print(json.load(sys.stdin).get('link'))"
```
Должно показать `type=github, repo=raw_website, org=TerekhinAndrei`. Если `link` null — кто-то отключил интеграцию в Vercel Dashboard → Settings → Git, надо переподключить.

### Симптом: прод отдаёт старый HTML, хотя deploy в Vercel — Ready

Vercel edge-cache залип. Лечится новым деплоем (даже пустой коммит триггернёт). Не пытайся искать "force purge" в Dashboard — этого нет, способ один: новый build.

### Симптом: кто-то пушнул в `riskacademy/RAW-website` напрямую (через web-UI, мобильник, другую машину) — mirror отстал

Эта конфигурация работает **только при push'ах с этой машины**. Если на `riskacademy/RAW-website` появился коммит, которого нет в `TerekhinAndrei/raw_website`, надо вручную:
```bash
git fetch origin
git push origin main:main
# Если refused — нужен force, потому что local main отстал:
git pull --rebase
git push origin main
```

Команды позволят восстановить синхрон. Это и есть та самая «пляска», которую конструкция исключает только при дисциплине «пуш только с этой машины».

### Симптом: упал манифест прав на `riskacademy/RAW-website`

Если владельцу аккаунта что-то не нравится и он отозвал твой push-доступ — push в первый URL развалится, второй продолжит работать. Прод не сломается (Vercel смотрит на mirror), но source of truth перестанет обновляться. Решение — связаться с владельцем `riskacademy`.

---

## Vercel-проект — координаты

```
Project:   raw_website
Team:      risk-academy1
Project ID: prj_sJkfAnJJAS6y9aUU2C4rZCg8kKFY
Team ID:    team_pE5Yyufk4cs2nBbBt7ovGpAW
URL:        https://vercel.com/risk-academy1/raw_website
Domain:     www.riskawarenessweek.com (+ apex)
Connected:  GitHub TerekhinAndrei/raw_website, branch main
```

CLI:
```bash
vercel login   # один раз
vercel inspect www.riskawarenessweek.com --scope risk-academy1
vercel ls raw_website --scope risk-academy1
```

---

## Правильный фикс на будущее (когда будет ресурс)

Текущая схема с двумя push-URL — это **обходка**, потому что `riskacademy` нам не принадлежит, и мы не можем поставить туда Vercel GitHub App.

Правильное решение — одно из:

1. **Попросить владельца `riskacademy`** установить Vercel GitHub App (https://github.com/apps/vercel/installations/new) на свой аккаунт с доступом к `RAW-website`. После этого в Vercel Dashboard → raw_website → Settings → Git → переподключить с `TerekhinAndrei/raw_website` на `riskacademy/RAW-website`. Mirror больше не нужен, push идёт в один репо, всё штатно.

2. **Перенести репо в org**, который мы контролируем (например, перенести `RAW-website` под аккаунт, где мы можем ставить GitHub Apps). Изменить fetch-URL у `origin`, убрать второй push-URL.

3. **GitHub Action в `riskacademy/RAW-website`** с deploy key на `TerekhinAndrei/raw_website` — мирорит автоматически на server-side, независимо от того, с какой машины кто пушит. Требует admin-прав в `riskacademy` для создания workflow + добавления секрета. То есть тоже упирается в владельца.

До этого момента — пуши с этой машины, схема работает.

---

## История

Эту схему собрал 21 мая 2026 после того, как прод залип на 16 дней:
- Прод был подключен к `TerekhinAndrei/raw_website`, но локальный `main` пушился в `terekhindc/raw` (другой репо), куда Vercel не смотрел.
- 16 коммитов накопилось в неправильных репо, прод обслуживал майскую версию.
- Починили: убрали лишний remote, переподключили Vercel правильно (он остался на `TerekhinAndrei/raw_website` после провалившейся попытки переключить на `riskacademy/RAW-website` из-за прав), настроили dual-push.

Если эта инструкция расходится с реальностью — значит конфиг кто-то поменял. Восстанавливай по разделу «Локальный git config».
