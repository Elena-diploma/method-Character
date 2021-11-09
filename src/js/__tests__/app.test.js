import Character from '../app';


test('Тип Character', () => {
    const received = typeof Character;
    const expected = 'function';
    expect(received).toBe(expected);
});

test('Ошибка в name', () => {
    expect(() => {
        return new Character('A', 'Bowman' );
    }).toThrow(new Error('Ошибка в name'));
});

test('Ошибка в type', () => {
    expect(() => {
        return new Character('Lena', 'Bow');
    }).toThrow(new Error('Ошибка в type'));
});
