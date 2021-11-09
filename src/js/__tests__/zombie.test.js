import Zombie from '../zombie';
import Undead from "../undead";

test('Создание нового персонажа Zombie', () => {
    const received = new Zombie('Lena', 'Zombie');
    const expected = {
        name: 'Lena',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(received).toEqual(expected);
});

test('проверка повышения левла при health > 0', () => {
    const zombie = new Zombie('Lena', 'Zombie');
    zombie.levelUp();
    expect(2).toEqual(zombie.level);
});
test('проверка повышения левла при health < 0', () => {
    const zombie = new Zombie('Lena', 'Zombie');
    zombie.health = -1;
    expect(() => zombie.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const zombie = new Zombie('Lena', 'Zombie');
    zombie.damage(10);
    expect(91).toEqual(zombie.health);
});

test('Проверка damage при health < 0', () => {
    const zombie = new Zombie('Lena', 'Zombie');
    zombie.health = -1;
    expect(() => zombie.damage(10)).toThrow();
});
