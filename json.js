var catalogo = {
    sessao: [
        {
            'nome': 'Polo Masculina Detalhe',
            'tamanhos': 'Disponivel nos tamanhos P, M, G, GG',
            'avista': '39,90',
            'aprazo': '42,90',
            'imgs': [
                {
                    'cod': 'COD: 1010',
                    'ft': 'imgs/36.webp'
                }
            ]
        },
        {
            'nome': 'Polo Masculina Detalhe',
            'tamanhos': 'Disponivel nos tamanhos P, M, G, GG',
            'avista': '39,90',
            'aprazo': '42,90',
        }
    ]
}


catalogo.sessao.map((item) => {
    var txt = "<div class='detalhes'>";

    txt += "<h2>" + item.nome + "</h2>";
    txt += "<p class='descricao'>" + item.tamanhos + "</p>";
    txt += "<span class='precoVista'>" + item.avista + "</span>";
    txt += "<span class='precoPrazo'>" + item.aprazo + "</span>";
    txt += "</div>";

    item.imgs.map((img) => {
        var thumb = "<div class='item'>";

        thumb += "<img src=" + img.ft + "/>";
        thumb += "<span class='cod'>" + img.cod + "</span>";
        thumb += "</div>";
        $('section').append(thumb)
    })
    $('section').append(txt);
})
