function toCamelCase(str) {
   if (!str) return '';

   // Разделяем строку по одному или нескольким дефисам/подчёркиваниям
   const words = str.split(/[-_]+/).filter(word => word.length > 0);

   if (words.length === 0) return '';

   // Первое слово остаётся без изменений
   const first = words[0];

   // Остальные слова преобразуем: первая буква заглавная, остальные как есть
   const rest = words.slice(1).map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
   );

   return first + rest.join('');
}