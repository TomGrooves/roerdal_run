export function compareString(key, order='asc') {

   return function innerSort (a, b) {

        const itemA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const itemB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (itemA > itemB){
            comparison = 1
        }
        else if (itemA < itemB){
            comparison = -1;
        }
        return (
                (order === 'desc') ? (comparison * -1) : comparison
            )
    }
}

export function compareNumber(key, order='asc') {

    return function innerSort (a, b) {
 
         const itemA = (typeof a[key] === 'number') ? Number(a[key]) : parseInt(a[key]);
         const itemB = (typeof b[key] === 'number') ? Number(b[key]) : parseInt(b[key]);
 
         let comparison = 0;
         if (itemA > itemB){
             comparison = 1
         }
         else if (itemA < itemB){
             comparison = -1;
         }
         return (
                 (order === 'desc') ? (comparison * -1) : comparison
             )
     }
 }
 