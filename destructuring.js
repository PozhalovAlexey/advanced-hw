const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
        }
    ]
}

function extractAttacks({special}) {
    const extractedAttacks = special.map(({id, name, description = 'Описание недоступно', icon}) => ({
        id,
        name,
        description,
        icon
    }));
    return extractedAttacks
}

const result = extractAttacks(character)