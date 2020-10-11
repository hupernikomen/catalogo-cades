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
                },
                {
                    'cod': 'COD: 1011',
                    'ft': 'imgs/37.webp'
                }
            ]
        },
        {
            'nome': 'Polo Masculina Outro',
            'tamanhos': 'Disponivel nos tamanhos P, M, G, GG',
            'avista': '39,90',
            'aprazo': '42,90',
            'imgs': [
                {
                    'cod': '1',
                    'ft': 'imgs/5.webp'
                }
            ]
        }
    ]
}

catalogo.sessao.forEach((p)=> {
    var txt = "<div class='detalhes'>";

    txt += "<h2>" + p.nome + "</h2>";
    txt += "<p class='descricao'>" + p.tamanhos + "</p>";
    txt += "<span class='precoVista'>" + p.avista + "</span>";
    txt += "<span class='precoPrazo'>" + p.aprazo + "</span>";
    
    p.imgs.forEach((i)=> {
        var thumb = "<div class='item'>";
        
        thumb += "<img src=" + i.ft + "/>";
        thumb += "<span class='cod'>" + i.cod + "</span>";
        thumb += "</div>";
        $('.detalhes').append(thumb)
    })
    txt += "</div>";
    $('section').append(txt);
})