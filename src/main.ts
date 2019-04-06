import Discord = require('discord.js');

// tslint:disable-next-line:no-var-requires
const CONFIG = require('./../config.json');
const BOT = new Discord.Client();
const DICTIONARY: {[char: string]: string[]} = {
    а: [
        'Адгезия',
        'Атом',
        'Асфиксия',
        'Агония',
        'Аллоэ',
        'Актёр',
        'Ампер',
        'Асмодей',
        'Акроним',
        'Абориген',
        'Абзац',
        'Аккомпанемент',
        'Амплитуда',
        'Автобус',
        'Авиация',
        'Алюминий',
        'Алтарь',
        'Абажур',
        'Аббатство',
        'Аббревиатура',
        'Акроним',
        'Аборт',
        'Абонент',
        'Агент',
        'Ангел',
        'Артист',
        'Аромат',
        'Аппетит',
        'Альтернатива',
        'Абсурд',
        'Астроном',
        'Атака',
        'Амнезия',
        'Авиация',
        'Атлант',
        'Адвокат',
        'Армия',
        'Автомобиль',
        'Адрес',
        'Анализ',
        'Адмирал',
        'Аппарат',
        'Аэропорт',
        'Алмаз',
        'Акула',
        'Ангар',
        'Археолог',
        'Алебарда',
        'Афиша',
        'Аукцион',
        'Арктангенс',
        'Антидот',
        'Аспирин',
        'Аналитик',
        'Арестант',
        'Амбар',
        'Андроид',
        'Ассимптотика',
        'Астматик',
        'Астма',
        'Аккумулятор',
        'Авитаминоз',
        'Алкоголь',
        'Агроном',
        'Агрегация',
        'Амеба',
        'Автоген',
        'Антракт',
        'Абсорбция',
        'Акварель',
        'Аккордеон',
        'Артикль',
        'Ария',
        'Амбиции',
        'Аппендицит',
        'Ампула',
        'Аура',
        'Атташе',
        'Альпинист',
        'Апокалипсис',
        'Алчность',
        'Арифметика',
        'Архаичность',
        'Ахинея',
        'Аптека',
        'Апрель',
        'Август'
    ],
    я: [
        'Яблоко',
        'Ягода',
        'Яд',
        'Ядро',
        'Язык',
        'Язь',
        'Ярл',
        'Ясень',
        'Япония',
        'Якутия',
        'Ярмарка',
        'Яхта',
        'Ястреб',
        'Ягуар',
        'Ярость',
        'Ясли',
        'Янтарь',
        'Ярлык',
        'Явство',
        'Якорь',
        'Ячмень',
        'Яшма',
        'Яхонт',
        'Ярус',
        'Яичница',
        'Яйцо',
        'Язычник',
        'Ябеда',
        'Явление',
        'Ямщик',
        'Ячейка',
        'Японец',
        'Якитори',
        'Языковед',
        'Якобиния',
        'Ясность',
        'Ясновидение',
        'Ямайка',
        'Ягодица',
        'Явь',
        'Якание',
        'Ящер',
        'Ящик',
        'Ярд',
        'Язва',
        'Яма',
        'Янки',
        'Ягненок',
        'Ярмо',
        'Яр',
        'Ятаган',
        'Ясновидящий',
        'Яхтсмен',
        'Янычар',
        'Яйцеклетка',
        'Якут',
        'Ядовитость',
        'Ятрохимия'
    ]
};

export class Main {

    private usedWords: string[] = [];

    constructor() {
        BOT.login(CONFIG.token)
            .then(() => console.log('Successfully logged as', BOT.user.username))
            .catch((error) => console.log(error));

        BOT.on('message', async (message) => {
            if (await message.author.id !== '555446099079331840') {
                return;
            }
            if (await message.content[0] !== CONFIG.prefix) {
                return;
            }

            const command = message.content.match('>слово ([а-яёА-ЯЁ])');
            if (command) {
                message.edit(this.getWord(command[1].toLowerCase())).catch((error) => console.log(error));
            }
        });
    }

    private getWord(lit: string): string {
        const words = DICTIONARY[lit];
        const word = words[Math.floor(Math.random() * words.length)];
        if (this.usedWords.find((w) => w === word)) {
            return this.getWord(lit);
        } else {
            this.usedWords.push(word);
            return word;
        }
    }

}
