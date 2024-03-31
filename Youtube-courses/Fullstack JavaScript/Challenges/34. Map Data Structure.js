// 1. Create a new Map
const map = new Map();

// 2. Set these properties ('a', 'b', 'c')
// 3. Set these values (1, 2, 3)
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

// 4. Get 'a' from that map
console.log(map.get('a'));

// 5. Check the size of that map
console.log(map.size);

// 6. Delete the property 'b' & then check the size.
map.delete('b');

console.log(map);