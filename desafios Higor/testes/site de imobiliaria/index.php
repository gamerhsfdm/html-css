<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>site imobilaria</title>
<meta name="keywords"content="Imoveis, apartamento, terrenos"/>
<meta name="description" content="Aqui você encontra"/>
<style type="text/css"> 

body{
    background-color: grey;
   
}
.sel{
    background-color: #ddd;
}
   

</style>
</head>
<body>
   
    <div id="top">  <!-- INICIO DIV TOP comentario aqui  --> 

    <div id="logo">Logo</div>
    <div id="logo_tel">
    <p>Entre em contato | endereço: Rua da subida n 10</p>
    <p> Tel : (21)7854-8561</p>
   </div>

</div>


    <div id="cont">
<!--
    <div id="menu">
        
    </div>
-->
    <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">Products</a>
    <a href="#contact">About</a>
    <a href="#about">Contact</a>
    </div>
    <div id="banner">
       <img src="banner.jpg"/></div>
    </div>

    <div id="menu_pesquisa">
     Pesquisa Avançada</br>

     <p><form id="form1" name="form1" method="post" action=""> 

     <label>
         <input type="radio" name="compra_venda" value="Alugar" />Comprar</label>
         <label>
             <input type="radio" name="compra_venda" value="Alugar" />
             Alugar</label>
    </p> 
    <select name="tipo" class="sel">
    <option>Tipo</option>
    <option>Casa</option>
    <option>AP</option>
    <option>Terreno</option>
    </select></br>

     <select name="quartos" class="sel">
     <option>Quartos</option>
     <option>1</option>
     <option>2</option>
     <option>3</option>
     </select></br>

     <select name="area" class="sel">
     <option>Area M²</option>
     <option>5</option>
     <option>10</option>
     <option>100</option>
     </select></br>

     <select name="preco" class="sel">
     <option>Preço</option>
     <option>Ate 100.000</option>
     <option>De 100.000 A 150.000</option>
     <option>De 200.000 A 250.000</option>
     </select></br>

     <select name="localizacao" class="sel">
     <option>Localização</option>
     <option>xxxxxx</option>
     <option>xxxxxx</option>
     <option>xxxxxx</option>
     </select></br>

     <input type="submit" value="Buscar"/>

    </form> 
    </div>

    <div id="contout">    
    <div id="cont2">
    <div id="titulo_gal">Destaques</div>

  <div id="cont3">
   <div id="foto_im"><img src="Banner-Icon-160px-Casa-Cozinha..." width="160" height="160"/></div>
   <div id="text">IMOVEL 1 2 quartos varanda de frente para a praia</div>
  </div>

    </div>
    </div>

   <div id="rodape"><div id="rodad">
       @ Copyright 2014 | Site Desenvolvido por Sites NP.
    </div></div>

</body>
</html>