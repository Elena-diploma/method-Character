import Bowman from '../bowman';

test('Создание нового персонажа Bowman', () => {
    const received = new Bowman('Bob', 'Bowman');
    const expected = {
        name: 'Bob',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});

test('проверка повышения левла при health > 0', () => {
    const bowman = new Bowman('Lena', 'Bowman');
    bowman.levelUp();
    expect(2).toEqual(bowman.level);
});
test('проверка повышения левла при health < 0', () => {
    const bowman = new Bowman('Lena', 'Bowman');
    bowman.health = -1;
    expect(() => bowman.levelUp()).toThrow();
});

test('Проверка damage при health > 0', () => {
    const bowman = new Bowman('Lena', 'Bowman');
    bowman.damage(10);
    expect(92.5).toEqual(bowman.health);
});

test('Проверка damage при health < 0', () => {
    const bowman = new Bowman('Lena', 'Bowman');
    bowman.health = -1;
    expect(() => bowman.damage(10)).toThrow();
    });
