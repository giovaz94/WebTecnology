<?php
    class DatabaseHelper {
        
        private $db = null;

        public function __construct($servername, $username, $password, $dbname, $port) {
            $this->db = new mysqli($servername, $username, $password, $dbname, $port);
            if($this->db->connect_error) {
                die("Connessione al db fallita");
            }
        }

        public function getRandomPost($num = 2) {
            $stmt = $this->db->prepare("SELECT idarticolo, titoloarticolo, imgarticolo FROM articolo ORDER BY RAND() LIMIT ?");
            $stmt->bind_param("i", $num);
            $stmt->execute();

            $result = $stmt->get_result();

            return $result->fetch_all(MYSQLI_ASSOC);
        }

        public function getCategories() {
            $stmt = $this->db->prepare("SELECT idcategoria, nomecategoria FROM categoria ORDER BY nomecategoria ASC");
            $stmt->execute();

            $result = $stmt->get_result();
            
            return $result->fetch_all(MYSQLI_ASSOC);
        }

        public function getPosts($n_post=-1) {
            $query = "SELECT idarticolo, titoloarticolo, imgarticolo, anteprimaarticolo, dataarticolo, nome
                        FROM articolo, autore
                        WHERE autore = idautore
                        ORDER BY dataarticolo DESC";
            if ($n_post>0) {
                $query.=" LIMIT ?";
            }
            $stmt = $this->db->prepare($query);
            if ($n_post>0) {
                $stmt->bind_param("i", $n_post);
            }
            $stmt->execute();
    
            $result = $stmt->get_result();
    
            return $result->fetch_all(MYSQLI_ASSOC);
        }
    }
?>