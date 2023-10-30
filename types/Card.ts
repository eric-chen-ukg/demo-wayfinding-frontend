export interface CardContract {
    type: string,
    options?: Array<ButtonContract>,
    buttonLinks?: Array<ButtonLink>
}

export interface MarkdownCardContract extends CardContract {
    message: string,
    navigation?: any[]
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

export interface ButtonLink {
    id: string,
    label: string,
    url: string,
    icon?: string
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
