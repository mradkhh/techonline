

export const useLoginValidation = (username: string, password: string): boolean => {
       return  (username && password) ? true : false
}