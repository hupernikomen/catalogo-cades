// var catalogo = {
//     sessao: [
//         {
//             'nome': 'Polo Masculina Detalhe',
//             'tamanhos': 'Disponivel nos tamanhos P, M, G, GG',
//             'avista': '39,90',
//             'aprazo': '42,90',
//             'imgs': [
//                 {
//                     'cod': 'COD: 1010',
//                     'ft': '<img src="imgs/36.webp">'
//                 },
//                 {
//                     'cod': 'COD: 1011',
//                     'ft': '<img src="imgs/37.webp">'
//                 }
//             ]
//         },
//         {
//             'nome': 'Polo Masculina Outr',
//             'tamanhos': 'Disponivel nos tamanhos P, M, G, GG',
//             'avista': '39,90',
//             'aprazo': '42,90',
//             'imgs': [
//                 {
//                     'cod': '1',
//                     'ft': '<img src="imgs/5.webp">'
//                 }
//             ]
//         }
//     ]
// }

// catalogo.sessao.forEach((p)=> {
//     var prod = "<div class='detalhes'>";

//     prod += "<h2>" + p.nome + "</h2>";
//     prod += "<p class='descricao'>" + p.tamanhos + "</p>";
//     prod += "<span class='precoVista'>" + p.avista + "</span>";
//     prod += "<span class='precoPrazo'>" + p.aprazo + "</span>";
    
//     p.imgs.forEach((i)=> {
//         var item = "<div class='item'>";
        
//         item += i.ft;
//         item += "<span class='cod'>" + i.cod + "</span>";
//         item += "</div>";
//         $('.detalhes').append(item)
//     })
    
//     prod += "</div>";
//     $('section').append(prod);
//     console.log(prod)
// })