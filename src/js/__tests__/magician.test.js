import Magician from '../magician';
import Daemon from "../daemon";

test('Создание нового персонажа Magician', () => {
    const received = new Magician('Ann', 'Magician');
    const expected = {
        name: 'Ann',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});

test('проверка повышения левла при health > 0', () => {
    const magician = new Magician('Lena', 'Magician');
    magician.levelUp();
    expect(2).toEqual(magician.level);
});
test('проверка повышения левла при health < 0', () => {
    const magician = new Magician('Lena', 'Magician');
    magician.health = -1;
    expect(() => magician.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const magician = new Magician('Lena', 'Magician');
    magician.damage(10);
    expect(94).toEqual(magician.health);
});

test('Проверка damage при health < 0', () => {
    const magician = new Magician('Lena', 'Magician');
    magician.health = -1;
    expect(() => magician.damage(10)).toThrow();
});