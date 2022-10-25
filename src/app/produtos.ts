export interface IProduto {
    id: number;
    descricao: string;
    dims: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;

}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 12250, descricao: "Bandeja Quadrada de madeira com alça", dims:"L35xP35xA5cm", preco: 239.00, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-quadrada-de-madeira-com-alca.webp", quantidadeEstoque: 15 },
    { id: 3948, descricao: "Bandeja Redonda em aco inox", dims:"Ø38xA1.5cm", preco: 200.50, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-redonda-em-aco-inox.webp", quantidadeEstoque: 15 },
    { id: 12382, descricao: "Bandeja Retangular de madeira com alca", dims:"L60xP35xA5cm", preco: 549.50, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-de-madeira.webp", quantidadeEstoque: 15 },
    { id: 12132, descricao: "Bandeja Retangular de madeira com espelho", dims:"L46xP26xA5cm", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-de-madeira-com-alca.webp", quantidadeEstoque: 15 },
    { id: 12136, descricao: "Bandeja Retangular de madeira com espelho", dims:"L60xP35xA5cm", preco: 360.70, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-de-madeira-com-espelho.webp", quantidadeEstoque: 15 },
    { id: 1199, descricao: "Bandeja Retangular em aco inox espelhada", dims:"L41xP26Aa5cm", preco: 799.99, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-em-aco-inox-espelhada.webp", quantidadeEstoque: 15 },
    { id: 2750, descricao: "Bandeja Retangular em aco inox prata espelhada", dims:"L41xP26xA8cm", preco: 1250, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-em-aco-inox-prata-espelhada.webp", quantidadeEstoque: 15 },
    { id: 2538, descricao: "Bandeja Retangular em aco inox vidro", dims:"L41xP26xA5cm", preco: 580, descricaoPreco: "À vista no PIX", imagem:"./assets/bandeja-retangular-em-aco-inox-vidro.webp", quantidadeEstoque: 15 },
    { id: 12470, descricao: "Bandeja Retangular em madeira com pe e porta copos", dims:"L57xP35xA22cm", preco: 320, descricaoPreco: "À vista no PIX", imagem: "./assets/bandeja-retangular-em-madeira-com-pe-e-porta-copos.webp", quantidadeEstoque: 15 },
    { id: 2378, descricao: "Centro de mesa com pe em cristal ecológico", dims:"Ø24-5xA21cm", preco: 950, descricaoPreco: "À vista no PIX", imagem: "./assets/centro-de-mesa-com-pe-em-cristal-ecologico.webp", quantidadeEstoque: 1  },
    { id: 8468, descricao: "Centro de mesa em cristal ecológico", dims:"L23xP23xA9cm", preco: 330, descricaoPreco: "À vista no PIX", imagem: "./assets/centro-de-mesa-em-cristal-ecologico.webp", quantidadeEstoque: 15 },
    { id: 12916, descricao: "Centro de mesa em vidro fruta-cor", dims:"L15xP15xA5cm", preco: 189, descricaoPreco: "À vista no PIX", imagem: "./assets/centro-de-mesa-em-vidro.webp", quantidadeEstoque: 15 },
    { id: 12912, descricao: "Centro de mesa em vidro fumê luster", dims:"Ø15xA3cm", preco: 259.90, descricaoPreco: "À vista no PIX", imagem: "./assets/centro-de-mesa-em-vidro-transp.webp", quantidadeEstoque: 15 },
    { id: 6665, descricao: "potiche com pe em cristal", dims:"Ø17-5xA25cm", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/potiche-com-pe-em-cristal.webp", quantidadeEstoque: 15 },
    { id: 10264, descricao: "potiche em cristal ecológico", dims:"L11xP11xA11cm", preco: 220.90, descricaoPreco: "À vista no PIX", imagem: "./assets/potiche-em-cristal-ecologico.webp", quantidadeEstoque: 15 },
    { id: 7826, descricao: "Vaso em-cristal ecológico", dims:"L14xP8-2xA30cm", preco: 430, descricaoPreco: "À vista no PIX", imagem: "./assets/vaso-em-cristal-ecologico.webp", quantidadeEstoque: 15 },
    { id: 10260, descricao: "Vaso em cristal ecológico", dims:"L14xP14xA31cm", preco: 459.50, descricaoPreco: "À vista no PIX", imagem: "./assets/vaso-em-cristal-ecologico-trab.webp", quantidadeEstoque: 15 },
    { id: 13205, descricao: "Vaso murano em vidro ambar", dims:"L14xP14xA12cm", preco: 359.99, descricaoPreco: "À vista no PIX", imagem: "./assets/vaso-murano-em-vidro.webp", quantidadeEstoque: 15 },
]