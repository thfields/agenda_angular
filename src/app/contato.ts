export enum TipoContato {
    AMIGO    = 'Amigo(a)',
    TRABALHO = 'Trabalho',
    FAMILIA  = 'Família',
    OUTRO    = 'Outro'
}

export class Contato {
    nome: string
    tel: string
    tipo: TipoContato
    aniversario: string

    constructor(nm: string, tel: string, tipo: TipoContato, aniv: string) {
        this.nome = nm
        this.tel = tel
        this.tipo = tipo
        this.aniversario = aniv
    }
}