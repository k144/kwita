/** ID string generated by crypto.randomUUID()  */
type UUID = string;

/** CSS-valid color string */
type Color = string;

/** Smallest Monetary Unit, eg. cents */
type SMU = number;

interface User {
    id: UUID;
    name: string;
    color?: Color;
}

interface ExpenseCategory {
    id: UUID;
    name: string;
    description?: string;
    color?: Color;
}

interface Expense {
    id: UUID;
    date: Date;
    amount: SMU;
    payer: User;
    title: string;
    description?: string;
    /** Users for splitting the bill, if undefined then for all */
    for?: Array<User>;
}

interface Context {
    user: User;
    users: Array<User>;
    expenses: Array<Expense>;
    expenseCategories: Array<ExpenseCategory>;
}