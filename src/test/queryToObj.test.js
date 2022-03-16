import { queryToObj } from "../tasks/queryToObj";


describe('query to obj', ()=>{
    test('query to obj', ()=>{
        let query =   "user.name.firstName=Bob&user.name.lastName=Smith&user.favoriteColor=Light%20Blue&experiments.theme=dark";
        let result = {
            user: {
                name: {
                    firstName: 'Bob',
                    lastName: 'Smith'
                },
                favoriteColor: 'Light Blue'
            },
            experiments: {
                theme: 'dark'
            }
        }
        expect(queryToObj(query)).toStrictEqual(result);
    })
})