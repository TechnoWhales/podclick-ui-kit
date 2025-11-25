import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    libInjectCss(), // Инжектит CSS в JS
    dts({
      insertTypesEntry: true, // генерирует index.d.ts прямо в dist
      outDir: "dist/types",
      /**
       * Отключает использование Rollup для сборки TypeScript declaration files (.d.ts)
       * Без rollupTypes (false):
       * ✅ Сохраняет исходную структуру папок
       * ✅ Надежнее работает со сложными конфигами TypeScript
       * ✅ Правильно обрабатывает barrel exports (export * from './components')
       * ✅ Быстрее сборка для небольших/средних библиотек
       *
       * С rollupTypes (true):
       * ✅ Создает оптимизированный бандл типов
       * ✅ Удаляет неиспользуемые типы (tree-shaking)
       * ❌ Может ломаться на сложных конфигациях
       * ❌ Проблемы с путями и алиасами
       * ❌ Сложнее дебажить при ошибках
       *
       */
      rollupTypes: false,
      include: ["src"],
      exclude: [
        "src/**/*.stories.*",
        "src/**/*.test.*",
        "src/App.*",
        "src/main.*",
        "src/stories/**/*",
      ],
      tsconfigPath: resolve(__dirname, "tsconfig.build.json"),
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: false,
  build: {
    emptyOutDir: true, // Очищает выходную директорию (dist) перед каждой сборкой
    /**
     * Конфигурация сборки библиотеки (в отличие от приложения)
     * Указывает Vite, что мы собираем библиотеку для распространения через npm
     * а не полноценное веб-приложение
     */
    lib: {
      /**
       * Главная точка входа библиотеки
       * Файл, который экспортирует все публичные API библиотеки
       *
       * 📁 Должен содержать все export'ы, которые должны быть доступны пользователям
       */
      entry: resolve(__dirname, "src/index.ts"),
      name: "podclick-ui-kit",
      fileName: (format) => {
        // Функция для генерации имен выходных файлов
        if (format === "es") return "index.esm.js";
        if (format === "cjs") return "index.js";
        return `index.${format}.js`;
      },
      /**
       * Форматы выходных файлов библиотеки
       * Определяет, в каких модульных системах будет работать библиотека
       *
       * 📦 Поддерживаемые форматы:
       * - 'es': ES Modules (современный стандарт, для webpack, Vite, Rollup)
       * - 'cjs': CommonJS (для Node.js и старых сборщиков)
       * - 'umd': Universal Module Definition (работает везде, но больше размер)
       * - 'iife': Immediately Invoked Function Expression (для прямого включения в браузер)
       *
       * 🎯 Наш выбор:
       * - ES: для современных проектов и tree-shaking
       * - CJS: для обратной совместимости
       * - UMD/IIFE: не включаем чтобы уменьшить размер пакета
       */
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      /**
       * Список внешних зависимостей, которые не должны включаться в сборку библиотеки
       * Эти зависимости будут указаны как peerDependencies в package.json
       * и должны быть установлены в основном проекте
       *
       */
      external: ["react", "react-dom", "clsx"],
      /**
       * Настройки выходных файлов
       * Определяют формат и структуру собранной библиотеки
       */
      output: {
        /**
         * Глобальные переменные для UMD сборки
         * Определяет, как внешние зависимости должны быть доступны в глобальной области видимости
         * когда библиотека используется без менеджера пакетов (через CDN)
         *
         * @example
         * // При использовании через CDN:
         * // react доступен как глобальная переменная React
         * // react-dom доступен как ReactDOM
         * // clsx доступен как clsx
         */
        globals: {
          react: "React", // Глобальная переменная React для пакета 'react'
          "react-dom": "ReactDOM", // Глобальная переменная ReactDOM для пакета 'react-dom'
          clsx: "clsx", // Глобальная переменная clsx для пакета 'clsx'
        },
        /**
         * Сжатие выходного кода
         * Удаляет комментарии, лишние пробелы, переносы строк
         * Значительно уменьшает размер бандла
         *
         * 🚀 Рекомендуется всегда true для production-сборки
         */
        compact: true,
      },
    },
    /**
     * Выбор инструмента для минификации (сжатия) JavaScript кода
     *
     * 🛠 esbuild - чрезвычайно быстрый минификатор, написанный на Go
     * который обеспечивает хороший баланс между скоростью и эффективностью сжатия
     *
     * 📊 Сравнение с другими вариантами:
     * - 'esbuild': ✅ Быстрее всех (в 10-100x раз), хорошее сжатие
     * - 'terser':  ✅ Лучшее сжатие, но медленнее
     * - 'false':   ❌ Без минификации (только для разработки)
     *
     * 🚀 Преимущества esbuild:
     * - Молниеносная скорость сборки
     * - Автоматически удаляет неиспользуемый код (dead code elimination)
     * - Удаляет лишние пробелы, комментарии, переименовывает переменные
     * - Поддерживает современный JavaScript (ES2022+)
     */
    minify: "esbuild",
    sourcemap: false, // для уменьшения размера
    target: "es2015", // для лучшей совместимости и сжатия
  },
});
