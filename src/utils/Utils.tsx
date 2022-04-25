
export const Utils = {
    removeDuplicates: (array: Array<string | Number>) => {
        return array.filter((item, index) => array.indexOf(item) === index)
    }
}