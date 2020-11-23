  let lang = 'ru';
  if (lang == 'ru') {
  console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
}
else if (lang == 'en') {
	console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
} 

switch (lang) {
case 'ru':
  console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
  break;
case 'en':
  console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
  break;
}

let matrix = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(matrix[lang]);

let namePerson = prompt('Как тебя зовут?');
name = (namePerson == 'Артём') ? 'директор' : 
name = (namePerson == 'Максим')? 'преподаватель' : 
'студент' ;
console.log(name);

