export interface CardContract {
    type: string,
    options?: Array<ButtonContract>
}

export interface MarkdownCardContract extends CardContract {
    message: string,
}

interface ColumnDefs {
    field: string
}


export interface TableCardContract extends CardContract {
    message?: string,
    data: {
        table: {
            columnDefs: ColumnDefs[],
            rowData: any[]
        }
    }
}

export interface ButtonContract {
    id: string;
    label: string;
    data?: any;
    icon?: string;
    userQuery?: string;
    description?: string;
    userText?: boolean;
}
