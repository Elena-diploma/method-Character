import Daemon from '../daemon';
import Bowman from "../bowman";

test('Создание нового персонажа Daemon', () => {
    const received = new Daemon('Roman', 'Daemon');
    const expected = {
        name: 'Roman',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});

test('проверка повышения левла при health > 0', () => {
    const daemon = new Daemon('Lena', 'Daemon');
    daemon.levelUp();
    expect(2).toEqual(daemon.level);
});
test('проверка повышения левла при health < 0', () => {
    const daemon = new Daemon('Lena', 'Daemon');
    daemon.health = -1;
    expect(() => daemon.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const daemon = new Daemon('Lena', 'Daemon');
    daemon.damage(10);
    expect(94).toEqual(daemon.health);
});

test('Проверка damage при health < 0', () => {
    const daemon = new Daemon('Lena', 'Daemon');
    daemon.health = -1;
    expect(() => daemon.damage(10)).toThrow();
});