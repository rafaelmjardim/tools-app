export type CepREQ = {
    id: number
    nome: string
    municipio: MunicipioREQ[]
}

type MunicipioREQ = {
    id: number
    nome: string
    microregiao: {}
}