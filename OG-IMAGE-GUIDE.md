# Инструкция по созданию OG изображения для RAW

## Требования к изображению:

- **Размер:** 1200 x 630 px (обязательно)
- **Формат:** PNG или JPG
- **Название файла:** `og-image.png`
- **Расположение:** `/public/og-image.png`

## Дизайн:

### Фон:
- Темный градиент (темно-синий → фиолетовый)
- Стиль: соответствует дизайну сайта

### Контент изображения:

1. **Основной заголовок (крупно):**
   ```
   Risk Awareness Week 2026
   ```

2. **Подзаголовок:**
   ```
   #1 Global Virtual Risk Conference
   ```

3. **Даты:**
   ```
   12–17 October 2026
   ```

4. **Статистика (внизу):**
   ```
   20,000+ Professionals | 120+ Countries | 200+ Workshops
   ```

5. **Награда:**
   ```
   🏆 FERMA 2024 Training & Education Programme of the Year
   ```

### Цвета:
- Фон: темные оттенки (#0a0a1a, #1a1a2e)
- Градиент: фиолетовый (#9333ea) → синий
- Текст: белый (#ffffff)
- Акценты: фиолетовый (#c084fc)

## Инструменты для создания:

### Вариант 1: Canva (рекомендуется)
1. Перейти на https://www.canva.com
2. Создать Custom Size: 1200 x 630 px
3. Использовать темплейт "Social Media Post"
4. Добавить элементы согласно дизайну выше
5. Скачать как PNG

### Вариант 2: Figma
1. Создать новый Frame 1200x630
2. Добавить градиентный фон
3. Добавить текстовые элементы
4. Export as PNG

### Вариант 3: Adobe Express
1. Выбрать Social Media → Custom Size
2. 1200 x 630 px
3. Создать дизайн
4. Download

## После создания:

1. Сохранить как `/public/og-image.png`

2. Обновить `src/app/layout.tsx`:
   ```typescript
   openGraph: {
     images: [
       {
         url: "/og-image.png",  // Изменить с /logo.png
         width: 1200,
         height: 630,
         alt: "Risk Awareness Week 2026 - Global Virtual Risk Conference",
       },
     ],
   },
   twitter: {
     images: ["/og-image.png"],  // Изменить с /logo.png
   },
   ```

3. Обновить `src/components/seo/JsonLd.tsx`:
   ```typescript
   "image": {
     "@type": "ImageObject",
     "url": "https://riskawarenessweek.com/og-image.png"  // Изменить с /logo.png
   },
   ```

4. Протестировать:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

## Пример того, как должно выглядеть:

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  🏆 FERMA 2024 Training & Education Programme of the Year   ║
║                                                              ║
║                   Risk Awareness Week                        ║
║                         2026                                 ║
║                                                              ║
║          #1 Global Virtual Risk Conference                   ║
║                                                              ║
║                 12–17 October 2026                           ║
║                                                              ║
║  ════════════════════════════════════════════════════════   ║
║                                                              ║
║  20,000+ Professionals | 120+ Countries | 200+ Workshops     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

**Фон:** Темный градиент с фиолетовыми акцентами
