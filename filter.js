const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
const order = ["name", "level"]

export default function sortProps(obj, order) {
    const filteredProps = Object.keys(obj).filter(prop => order.includes(prop))
    const sortedProps = [...order, ...filteredProps].sort()
    return sortedProps.map(prop => ({key: prop, value: obj[prop]}))
}

sortProps(obj, order)
console.log(obj, order)