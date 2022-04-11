import Link from 'next/link';

export const wine = [
  // Seafood
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/guerrieri-guerriero-del-mare/w/7135154"
        passHref
      >
        Guerrieri Guerriero del Mare
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Thunfisch',
    tag: ['Seafood', 'Thunfisch', 'Trocken'],
    src: '/wine/Guerrieri Guerriero del Mare.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/chateau-la-bertrande-cadillac/w/1690945"
        passHref
      >
        Château La Bertrande Cadillac
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Säuerlich'],
    type: 'Dessertwein',
    pairsWith: 'Thunfisch',
    tag: ['Seafood', 'Thunfisch', 'Süß'],
    src: '/wine/Château La Bertrande Cadillac.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/de-von-winning-chardonnay-i/w/3701413"
        passHref
      >
        Von Winning Chardonnay
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Rotwein',
    pairsWith: 'Lachs',
    tag: ['Seafood', 'Lachs', 'Trocken'],
    src: '/wine/Von Winning Chardonnay.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/domaine-cazes-rivesaltes-ambre-vin-doux-naturel/w/20227"
        passHref
      >
        Cazes Rivesaltes Ambré Vin Doux Naturel
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Säuerlich'],
    type: 'Likörwein',
    pairsWith: 'Lachs',
    tag: ['Seafood', 'Lachs', 'Süß'],
    src: '/wine/Cazes Rivesaltes Ambré Vin Doux Naturel.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/luis-seabra-granito-cru-alvarinho/w/2182048"
        passHref
      >
        Luis Seabra Granito Cru Alvarinho
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Muscheln',
    tag: ['Seafood', 'Muscheln', 'Trocken'],
    src: '/wine/Luis Seabra Granito Cru Alvarinho.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/planeta-passito-di-noto/w/1203830"
        passHref
      >
        Planeta Passito di Noto
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Dessertwein',
    pairsWith: 'Muscheln',
    tag: ['Seafood', 'Muscheln', 'Süß'],
    src: '/wine/Planeta Passito di Noto.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/domaine-laporte-la-comtesse-sancerre/w/1183619"
        passHref
      >
        Laporte La Comtesse Sancerre
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Hummer',
    tag: ['Seafood', 'Hummer', 'Trocken'],
    src: '/wine/Laporte La Comtesse Sancerre.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/roccolo-grassi-la-broia-recioto-di-soave/w/1871403"
        passHref
      >
        Roccolo Grassi La Broia Recioto di Soave
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Säuerlich'],
    type: 'Dessertwein',
    pairsWith: 'Hummer',
    tag: ['Seafood', 'Hummer', 'Süß'],
    src: '/wine/Roccolo Grassi La Broia Recioto di Soave.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/collet-blanc-de-blancs-premier-cru-champagne/w/6959667"
        passHref
      >
        Blanc de Blancs Premier Cru Champagne
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Schaumwein',
    pairsWith: 'Krabben',
    tag: ['Seafood', 'Krabben', 'Trocken'],
    src: '/wine/Blanc de Blancs Premier Cru Champagne.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/casa-vinicola-firriato-l-ecru-sicilia-passito/w/1302210"
        passHref
      >
        Firriato L Ecrù Sicilia Passito
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Dessertwein',
    pairsWith: 'Krabben',
    tag: ['Seafood', 'Krabben', 'Süß'],
    src: '/wine/Firriato L Ecrù Sicilia Passito.png',
  },
  //   fleisch:
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/tabali-talinay-chardonnay/w/7199216"
        passHref
      >
        Tabali Talinay Chardonnay
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Hähnchen',
    tag: ['Fleisch', 'Hähnchen', 'Trocken'],
    src: '/wine/Tabali Talinay Chardonnay.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/guerrieri-l-amico-ciliegia/w/2198538"
        passHref
      >
        Guerrieri L Amico Ciliegia
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Dessertwein',
    pairsWith: 'Hähnchen',
    tag: ['Fleisch', 'Hähnchen', 'Süß'],
    src: '/wine/Guerrieri L Amico Ciliegia',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/guerrieri-guerriero-della-terra/w/6331780"
        passHref
      >
        Guerriero della Terra
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Ente',
    tag: ['Fleisch', 'Ente', 'Trocken'],
    src: '/wine/Guerriero della Terra.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/bread-and-butter-pinot-noir/w/1724151"
        passHref
      >
        Bread & Butter Pinot Noir
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Ente',
    tag: ['Fleisch', 'Ente', 'Süß'],
    src: '/wine/Bread & Butter Pinot Noir.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/prunotto-bansella-nizza/w/5811554?year=2019"
        passHref
      >
        Prunotto Bansella Nizza
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Rotwein',
    pairsWith: 'Schwein',
    tag: ['Fleisch', 'Schwein', 'Trocken'],
    src: '/wine/Prunotto Bansella Nizza 2019.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/cl-el-principal-calicanto/w/1179830"
        passHref
      >
        El Principal Calicanto
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Schwein',
    tag: ['Fleisch', 'Schwein', 'Süß'],
    src: '/wine/El Principal Calicanto.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/schola-sarmenti-cubardi-primitivo/w/3875071"
        passHref
      >
        Schola Sarmenti Cubardi Primitivo
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Lamm',
    tag: ['Fleisch', 'Lamm', 'Süß'],
    src: '/wine/Schola Sarmenti Cubardi Primitivo.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/quinta-do-paral-vinhas-velhas-tinto/w/7335944"
        passHref
      >
        Quinta do Paral Vinhas Velhas Tinto
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Lamm',
    tag: ['Fleisch', 'Lamm', 'Trocken'],
    src: '/wine/Quinta do Paral Vinhas Velhas Tinto.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/constantia-glen-five-constantia/w/1721874"
        passHref
      >
        Constantia Glen Five
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Rotwein',
    pairsWith: 'Rind',
    tag: ['Fleisch', 'Rind', 'Trocken'],
    src: '/wine/Constantia Glen Five.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/ferreira-late-bottled-vintage-port/w/75987"
        passHref
      >
        Ferreira Late Bottled Vintage Port
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Weich'],
    type: 'Likörwein',
    pairsWith: 'Rind',
    tag: ['Fleisch', 'Rind', 'Süß'],
    src: '/wine/Ferreira Late Bottled Vintage Port.png',
  },
  //   vegetarisch:
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/laberinto-maule-valley-cenizas-de-laberinto-sauvignon-blanc/w/1245989"
        passHref
      >
        Laberinto Sauvignon Blanc
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Salat',
    tag: ['Vegetarisch', 'Salat', 'Trocken'],
    src: '/wine/Laberinto Sauvignon Blanc.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/keermont-fleurfontein/w/1474945"
        passHref
      >
        Keermont Fleurfontein
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Säuerlich'],
    type: 'Dessertwein',
    pairsWith: 'Salat',
    tag: ['Vegetarisch', 'Salat', 'Süß'],
    src: '/wine/Keermont Fleurfontein.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/bernardus-winery-chardonnay/w/590"
        passHref
      >
        Bernardus Chardonnay
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Weißwein',
    pairsWith: 'Kartoffeln',
    tag: ['Vegetarisch', 'Kartoffeln', 'Süß'],
    src: '/wine/Bernardus Chardonnay.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/pietro-colosi-passito-sicilia/w/1897545"
        passHref
      >
        Colosi Passito
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Kartoffeln',
    tag: ['Vegetarisch', 'Kartoffeln', 'Trocken'],
    src: '/wine/Colosi Passito.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/markowitsch-redmont/w/96901"
        passHref
      >
        Markowitsch Redmont
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Pilze',
    tag: ['Vegetarisch', 'Pilze', 'Süß'],
    src: '/wine/Markowitsch Redmont.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/gesellmann-opus-eximium/w/11260"
        passHref
      >
        Gesellmann Opus Eximium
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Rotwein',
    pairsWith: 'Pilze',
    tag: ['Vegetarisch', 'Pilze', 'Trocken'],
    src: '/wine/Gesellmann Opus Eximium.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/brookdale-estate-chenin-blanc/w/7388820"
        passHref
      >
        Brookdale Estate Chenin Blanc
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Chillis',
    tag: ['Vegetarisch', 'Chillis', 'Trocken'],
    src: '/wine/Brookdale Estate Chenin Blanc.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/bernardins-muscat-de-beaumes-de-venise/w/1159397"
        passHref
      >
        Bernardins Muscat de Beaumes de Venise
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Säuerlich'],
    type: 'Likörwein',
    pairsWith: 'Chillis',
    tag: ['Vegetarisch', 'Chillis', 'Süß'],
    src: '/wine/Bernardins Muscat de Beaumes de Venise.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/vie-di-romans-vineyards-chardonnay/w/1084872"
        passHref
      >
        Vie di Romans Chardonnay
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Pasta',
    tag: ['Vegetarisch', 'Pasta', 'Trocken'],
    src: '/wine/Vie di Romans Chardonnay.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/epicuro-susumaniello-puglia/w/5806264"
        passHref
      >
        Epicuro Susumaniello
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Rotwein',
    pairsWith: 'Pasta',
    tag: ['Vegetarisch', 'Pasta', 'Süß'],
    src: '/wine/Epicuro Susumaniello.png',
  },

  //   käse:
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/little-beauty-sauvignon-blanc/w/1758778"
        passHref
      >
        Little Beauty Sauvignon Blanc
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Ziegenkäse',
    tag: ['Käse', 'Ziegenkäse', 'Trocken'],
    src: '/wine/Little Beauty Sauvignon Blanc.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/domane-wachau-v-d-n-gruner-veltliner/w/4628284"
        passHref
      >
        Domäne Wachau V.D.N Grüner Veltliner
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Säuerlich'],
    type: 'Likörwein',
    pairsWith: 'Ziegenkäse',
    tag: ['Käse', 'Ziegenkäse', 'Süß'],
    src: '/wine/Domäne Wachau V.D.N Grüner Veltliner.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/fr-billaud-simon-chablis-tete-d-or/w/1172948"
        passHref
      >
        Billaud-Simon Chablis Tête dOr
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Parmesan',
    tag: ['Käse', 'Parmesan', 'Trocken'],
    src: '/wine/Billaud-Simon Chablis Tête dOr.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/coume-del-mas-galateo-banyuls/w/1246341"
        passHref
      >
        Coume del Mas Galateo Banyuls
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Weich'],
    type: 'Likörwein',
    pairsWith: 'Parmesan',
    tag: ['Käse', 'Parmesan', 'Süß'],
    src: '/wine/Coume del Mas Galateo Banyuls.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/tramin-stoan-alto-adige/w/2055461"
        passHref
      >
        Tramin Stoan
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säurehaltig'],
    type: 'Weißwein',
    pairsWith: 'Cheddar',
    tag: ['Käse', 'Cheddar', 'Trocken'],
    src: '/wine/Tramin Stoan.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/lustau-san-emilio-pedro-ximenez-sherry-solera-reserva/w/1170133"
        passHref
      >
        Lustau San Emilio Pedro Ximenez
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Säurehaltig'],
    type: 'Likörwein',
    pairsWith: 'Cheddar',
    tag: ['Käse', 'Cheddar', 'Süß'],
    src: '/wine/Lustau San Emilio Pedro Ximenez.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/chateau-rieussec-sauternes-premier-grand-cru-classe/w/1135215"
        passHref
      >
        Château Rieussec Sauternes
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Säuerlich'],
    type: 'Dessertwein',
    pairsWith: 'Blauschimmel',
    tag: ['Käse', 'Blauschimmel', 'Süß'],
    src: '/wine/Château Rieussec Sauternes.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/montonale-orestilla/w/1946304"
        passHref
      >
        Montonale Orestilla
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Blauschimmel',
    tag: ['Käse', 'Blauschimmel', 'Trocken'],
    src: '/wine/Montonale Orestilla.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/brannland-iscider/w/1882027"
        passHref
      >
        Brännland Iscider
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Weich'],
    type: 'Apfelwein',
    pairsWith: 'Brie',
    tag: ['Käse', 'Brie', 'Süß'],
    src: '/wine/Brännland Iscider.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/mosi-wines-tinashe-chenin/w/6889474"
        passHref
      >
        Mosi Wines Tinashe Chenin
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Brie',
    tag: ['Käse', 'Brie', 'Trocken'],
    src: '/wine/Mosi Wines Tinashe Chenin.png',
  },

  //   nachtisch:
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/familia-torres-vina-esmeralda/w/2628"
        passHref
      >
        Familia Torres Viña Esmeralda
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Säuerlich'],
    type: 'Dessetwein',
    pairsWith: 'Früchte',
    tag: ['Nachtisch', 'Früchte', 'Süß'],
    src: '/wine/Familia Torres Viña Esmeralda.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/nitida-coronata-integration/w/1397807"
        passHref
      >
        Nitída Coronata Integration
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Früchte',
    tag: ['Nachtisch', 'Früchte', 'Trocken'],
    src: '/wine/Nitída Coronata Integration.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/viticoltori-dell-acquese-asti/w/1568562"
        passHref
      >
        Acquesi Asti
      </Link>
    ),
    tasteProfile: ['Üppig', 'Süß', 'Zart'],
    type: 'Schaumwein',
    pairsWith: 'Schokolade',
    tag: ['Nachtisch', 'Schokolade', 'Süß'],
    src: '/wine/Acquesi Asti.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/matassa-brutal-rouge/w/6418657"
        passHref
      >
        Matassa Brutal Rouge
      </Link>
    ),
    tasteProfile: ['Leicht', 'Trocken', 'Säuerlich'],
    type: 'Rotmwein',
    pairsWith: 'Schokolade',
    tag: ['Nachtisch', 'Schokolade', 'Trocken'],
    src: '/wine/Matassa Brutal Rouge.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/it-canti-moscato-d-asti/w/2198945"
        passHref
      >
        Canti Moscato dAsti
      </Link>
    ),
    tasteProfile: ['Leicht', 'Süß', 'Zart'],
    type: 'Schaumwein',
    pairsWith: 'Kuchen',
    tag: ['Nachtisch', 'Kuchen', 'Süß'],
    src: '/wine/Canti Moscato dAsti.png',
  },
  {
    name: (
      <Link
        href="https://www.vivino.com/DE/de/dornier-donatus-white/w/1151477"
        passHref
      >
        Dornier Donatus White
      </Link>
    ),
    tasteProfile: ['Üppig', 'Trocken', 'Säuerlich'],
    type: 'Weißwein',
    pairsWith: 'Kuchen',
    tag: ['Nachtisch', 'Kuchen', 'Trocken'],
    src: '/wine/Dornier Donatus White.png',
  },
];
