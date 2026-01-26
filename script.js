const players = [
  "Коваленко",
  "Шевчук",
  "Бондар",
  "Мельник",
  "Ткаченко",
  "Поліщук",
  "Романюк",
  "Савченко",
  "Дяченко",
  "Лисенко",
  "Гнатюк"
];

const dnipro = {};

for (let i = 0; i < players.length; i++) {
  const name = players[i];

  dnipro[name] = {
    number: i + 1,
    goals: 0
  };
}

console.log(dnipro);