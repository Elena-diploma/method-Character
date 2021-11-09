import Swordsman from '../swordsman';
import Magician from "../magician";

test('Создание нового персонажа Swordsman', () => {
    const received = new Swordsman('Bob', 'Swordsman');
    const expected = {
        name: 'Bob',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(received).toEqual(expected);
});

test('проверка повышения левла при health > 0', () => {
    const swordsman = new Swordsman('Lena', 'Swordsman');
    swordsman.levelUp();
    expect(2).toEqual(swordsman.level);
});
test('проверка повышения левла при health < 0', () => {
    const swordsman = new Swordsman('Lena', 'Swordsman');
    swordsman.health = -1;
    expect(() => swordsman.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const swordsman = new Swordsman('Lena', 'Swordsman');
    swordsman.damage(10);
    expect(91).toEqual(swordsman.health);
});

test('Проверка damage при health < 0', () => {
    const swordsman = new Swordsman('Lena', 'Swordsman');
    swordsman.health = -1;
    expect(() => swordsman.damage(10)).toThrow();
});