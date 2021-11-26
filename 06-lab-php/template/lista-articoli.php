<?php foreach($templateParams["articoli"] as $articolo) : ?>
<article>
    <header>
        <div>
            <img src="<?= UPLOAD_DIR.$articolo["imgarticolo"]?>" alt="" />
        </div>
        <h2><?= $articolo["titoloarticolo"] ?></h2>
        <p><?= $articolo["dataarticolo"]." - ".$articolo["nome"] ?></p>
    </header>
    <section>
        <p><?= $articolo["anteprimaarticolo"] ?> </p>
    </section>
    <footer>
        <a href="#">Leggi tutto</a>
    </footer>
</article>
<?php endforeach; ?>