import type { User, Expense, ExpenseCategory } from './types'
import { writable } from 'svelte/store';

let initialUsers: Array<User> =  [
    {
        id: "679e4ddf-684f-4369-8f7b-b1db9e2976b8",
        name: "smalec"
    },
    {
        id: "f801ab89-c94f-44eb-b278-c08854e9feb3",
        name: "mruza"
    },
    {
        id: "ad9819ea-9fef-44c3-8d8a-bb680f61b9d7",
        name: "kuba"
    }
]



let defaultExpenseCategories: Array<ExpenseCategory>=[
    {
        id: "d127d779-055e-47d4-bf3b-aeda01d79c62",
        name: "Najm i czynsz"
    },
    {
        id: "8d605a7b-eb1c-4ddd-b8ad-984a0806f640",
        name: "Zakupy"
    },
    {
        id: "16afbf69-ee08-429f-98f2-05b54aedb20e",
        name: "Inne"
    }
];

export const users = writable(initialUsers);
export const expenseCategories = writable(defaultExpenseCategories);

export const user = writable(initialUsers[0]);
export const expenses = writable(new Array<Expense>);