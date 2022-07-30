

const useCaseOne = (type: string, ...args: any) => {
    const array = [...args]
    switch ( type ) {
        case 'banner':
            return array[0]
            break
        case 'items':
            return array[1]
            break
        case 'brand':
            return array[2]
            break
        case 'category':
            return array[3]
            break
        default:
            return array[0]
    }
}

export default useCaseOne