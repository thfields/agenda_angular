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
    favorito: boolean

    constructor(nm: string, tel: string, tipo: TipoContato, aniv: string, fav: boolean) {
        this.nome = nm
        this.tel = tel
        this.tipo = tipo
        this.aniversario = aniv
        this.favorito = fav
    }
}