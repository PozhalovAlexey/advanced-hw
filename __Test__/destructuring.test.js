test('should set default description when description is missing', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]
    };

    const result = extractAttacks(character);

    expect(result.description[0]).toBe('Описание недоступно')
})