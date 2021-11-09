import Undead from '../undead';
import Swordsman from "../swordsman";

test('Создание нового персонажа Undead', () => {
    const received = new Undead('Anni', 'Undead');
    const expected = {
        name: 'Anni',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});


test('проверка повышения левла при health > 0', () => {
    const undead = new Undead('Lena', 'Undead');
    undead.levelUp();
    expect(2).toEqual(undead.level);
});
test('проверка повышения левла при health < 0', () => {
    const undead = new Undead('Lena', 'Undead');
    undead.health = -1;
    expect(() => undead.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const undead = new Undead('Lena', 'Undead');
    undead.damage(10);
    expect(92.5).toEqual(undead.health);
});

test('Проверка damage при health < 0', () => {
    const undead = new Undead('Lena', 'Undead');
    undead.health = -1;
    expect(() => undead.damage(10)).toThrow();
});