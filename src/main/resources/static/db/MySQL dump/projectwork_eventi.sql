-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: projectwork
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventi`
--

DROP TABLE IF EXISTS `eventi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(300) DEFAULT NULL,
  `locandina` varchar(200) DEFAULT NULL,
  `descrizione` varchar(300) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `localita` varchar(100) DEFAULT NULL,
  `coordinate` varchar(100) DEFAULT NULL,
  `prezzo_intero` double DEFAULT NULL,
  `prezzo_ridotto` double DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKaxu4e6g5jhl51glcai5pcbpsk` (`categoria_id`),
  CONSTRAINT `FKaxu4e6g5jhl51glcai5pcbpsk` FOREIGN KEY (`categoria_id`) REFERENCES `categorie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventi`
--

LOCK TABLES `eventi` WRITE;
/*!40000 ALTER TABLE `eventi` DISABLE KEYS */;
INSERT INTO `eventi` VALUES (1,'Travis Scott','travis-scott.jpg','Concerto di Travis Scott','2024-05-25 21:00:00','Arena di Milano','45.4642, 9.1900',50,40,1),(2,'Drake','drake.webp','Concerto di Drake','2024-06-01 20:00:00','Stadio Olimpico, Roma','41.9321, 12.4547',60,50,1),(3,'Kendrick Lamar','kendrick-lamar.webp','Concerto di Kendrick Lamar','2024-06-10 19:30:00','Piazza del Plebiscito, Napoli','40.8366, 14.2488',55,45,1),(4,'Lil Yachty','lil-yachty.jpg','Concerto di Lil Yachty','2024-06-15 22:00:00','Pala Alpitour, Torino','45.0410, 7.6594',45,35,1),(5,'Ariana Grande','ariana-grande.png','Concerto di Ariana Grande','2024-06-20 20:30:00','Nelson Mandela Forum, Firenze','43.7828, 11.2826',70,60,1),(6,'Taylor Swift','taylor-swift.webp','Concerto di Taylor Swift','2024-06-25 19:00:00','Unipol Arena, Bologna','44.4949, 11.3426',75,65,1),(7,'Vasco Rossi','vasco-rossi.jpg','Concerto di Vasco Rossi','2024-07-01 21:30:00','Arena di Verona','45.4386, 10.9928',80,70,1),(8,'Re per una notte','re-per-una-notte.jpg','Proiezione di Re per una notte','2024-05-26 18:30:00','Cinema Adriano, Roma','41.9028, 12.4964',15,12,2),(9,'I 400 colpi','i-400-colpi.jpg','Proiezione de I 400 colpi','2024-05-27 17:45:00','Cinema Arcobaleno, Milano','45.4642, 9.1900',12,10,2),(10,'Interstellar','interstellar.jpg','Proiezione di Interstellar','2024-05-28 20:00:00','Cinema Massimo, Torino','45.0703, 7.6869',18,14,2),(11,'Inception','inception.jpg','Proiezione di Inception','2024-05-29 19:00:00','Cinema Odeon, Firenze','43.7696, 11.2558',20,16,2),(12,'Povere creature','povere-creature.jpg','Proiezione di Povere creature','2024-05-30 17:30:00','Cinema Lumière, Bologna','44.4949, 11.3426',16,13,2),(13,'Avengers: Endgame','avengers-endgame.webp','Proiezione di Avengers: Endgame','2024-05-31 20:15:00','Cinema Modernissimo, Napoli','40.8518, 14.2681',20,17,2),(14,'La Traviata','la-traviata.jpg','Spettacolo La Traviata di Giuseppe Verdi','2024-06-02 20:30:00','Teatro alla Scala, Milano','45.4654, 9.1897',35,28,3),(15,'Romeo e Giulietta','romeo-e-giulietta.webp','Spettacolo Romeo e Giulietta di William Shakespare','2024-06-05 21:00:00','Teatro dell\'Opera di Roma','41.9029, 12.4964',40,30,3),(16,'Il Lago dei Cigni','il-lago-dei-cigni.jpg','Spettacolo Il Lago dei Cigni di Pëtr Il ič Čajkovskij','2024-06-07 19:45:00','Teatro Regio, Torino','45.0703, 7.6869',45,35,3),(17,'Amleto','amleto.jpg','Spettacolo Amleto di William Shakespeare','2024-08-17 21:00:00','Teatro Greco, Siracusa','24.2156, 8.2345',35,25,3),(18,'Macbeth-William','macbeth.jpg','Spettacolo Macbeth-William di Shakespeare','2024-09-12 22:00:00','Teatro della Pergola, Firenze','41.0483, 5.4589',50,35,3),(19,'Re Lear','ReLear.jpg','Spettacolo Re Lear di William Shakespeare','2024-10-25 21:30:00','Teatro di San Carlo, Napoli','45.4591, 9.4359',45,30,3),(20,'(Basket) Lakers ― Chicago Bulls','basket-lakers-vs-chicago-bulls.jpg','Partita di basket dei Lakers contro i Chicago Bulls','2024-06-08 20:00:00','Unipol Arena, Bologna','44.4949, 11.3426',30,25,4),(21,'(Calcio) Chieti ― Sulmona','calcio-chieti-vs-sulmona.jpg','Partita di calcio tra Chieti e Sulmona','2024-06-09 18:30:00','Mediolanum Forum, Milano','45.4642, 9.1900',50,40,4),(22,'(Golf) Tiger Woods ― Arnold Palmer','golf-tiger-woods-vs-arnold-palmer.webp','Match di tennis di Tiger Woods contro Arnold Palmer','2024-06-12 14:30:00','Golf Club Parco di Roma','41.9029, 12.4964',25,20,4),(23,'(Tennis) Federer ― Sinner','tennis-federer-vs-sinner.webp','Match di tennis fra Federer e Sinner','2024-06-14 16:00:00','Stadio San Paolo, Napoli','40.8518, 14.2681',20,15,4),(24,'(Calcio) Italia ― Spagna','calcio-italia-spagna.webp','Partita di calcio Italia contro Spagna','2024-06-16 21:15:00','Stadio Artemio Franchi, Firenze','43.7696, 11.2558',20,15,4),(25,'Mostra Leonardo da Vinci','mostra-leonardo-da-vinci.jpg','Mostra di Leonardo da Vinci','2024-06-18 09:30:00','Galleria degli Uffizi, Firenze','43.7696, 11.2558',25,18,5),(26,'Mostra Raffaello','mostra-raffaello.jpg','Mostra di Raffaello','2024-06-20 11:00:00','Scuderie del Quirinale, Roma','41.9028, 12.4964',28,22,5),(27,'Mostra Caravaggio','mostra-caravaggio.jpg','Mostra di Caravaggio','2024-06-22 10:30:00','Pinacoteca di Brera, Milano','45.4654, 9.1897',30,24,5),(28,'Mostra Michelangelo','mostra-michelangelo.jpg','Mostra di Michelangelo','2024-06-24 09:45:00','Musei Civici, Venezia','45.4408, 12.3155',26,20,5),(29,'Mostra Botticelli','mostra-botticelli.webp','Mostra di Botticelli','2024-06-26 11:30:00','Museo di Capodimonte, Napoli','40.8518, 14.2681',27,21,5),(30,'Circo Orfei','circo-orfei.jpg','Spettacolo di Circo Orfei','2024-06-27 17:00:00','Piazza Castello, Torino','45.0703, 7.6869',20,15,6),(31,'Circo Medrano','circo-medrano.jpg','Spettacolo di Circo Medrano','2024-06-28 18:00:00','Parco Nord, Bologna','44.4949, 11.3426',22,17,6),(32,'Circo Acquatico Bellucci','circo-acquatico-bellucci.jpg','Spettacolo di Circo Acquatico Bellucci','2024-06-29 16:30:00','Circo Massimo, Roma','41.8894, 12.4884',25,18,6),(33,'Circo Americano','circo-americano.jpg','Spettacolo di Circo Americano','2024-06-30 18:15:00','Parco Sempione, Milano','45.4726, 9.1794',24,19,6),(34,'Circo di Mosca','circo-di-mosca.jpg','Spettacolo di Circo di Mosca','2024-07-01 17:45:00','Parco Virgiliano, Napoli','40.8213, 14.1891',23,18,6),(35,'Fiera del Libro','fiera-del-libro.jpg','Fiera del Libro','2024-07-03 09:00:00','Fiera di Bologna','44.4949, 11.3426',15,12,7),(36,'Fiera dell\'Artigianato','fiera-dell-artigianato.jpg','Fiera dell\'Artigianato','2024-07-05 09:30:00','Fortezza da Basso, Firenze','43.7828, 11.2558',18,14,7),(37,'Fiera del Mobile','fiera-del-mobile.png','Fiera del Mobile','2024-07-07 10:00:00','Fiera Milano, Milano','45.4654, 9.1897',20,16,7),(38,'Fiera dell\'Automobile','fiera-dell-automobile.jpg','Fiera dell\'Automobile','2024-07-09 11:00:00','Lingotto Fiere, Torino','45.0410, 7.6594',25,20,7),(39,'Fiera del Giardinaggio','fiera-del-giardinaggio.jpg','Fiera del Giardinaggio','2024-07-11 09:45:00','Fiera di Roma','41.9028, 12.4964',15,12,7),(40,'Sagra della Porchetta','sagra-della-porchetta.jpg','Sagra della Porchetta','2024-07-12 11:30:00','Piazza di Corte, Ariccia','41.7176, 12.6673',10,8,7),(41,'Sagra della Castagna','sagra-della-castagna.jpg','Sagra della Castagna','2024-07-13 12:00:00','Piazza Galimberti, Cuneo','44.3892, 7.5510',12,10,7),(42,'Sagra del Vino','sagra-del-vino.jpg','Sagra del Vino','2024-07-14 13:00:00','Piazza Grande, Montepulciano','43.7866, 11.9783',14,11,7),(43,'Sagra della Salsiccia','sagra-della-salsiccia.jpg','Sagra della Salsiccia','2024-07-15 11:15:00','Piazza San Benedetto, Norcia','42.7919, 13.0947',11,9,7),(44,'Sagra del Tartufo','sagra-del-tartufo.jpg','Sagra del Tartufo','2024-07-16 14:00:00','Piazza Risorgimento, Alba','44.7003, 8.0352',20,15,7),(45,'Gardaland','gardaland.jpg','Giornata a Gardaland','2024-07-18 10:00:00','Gardaland, Verona','45.4636, 10.7192',40,35,8),(46,'Mirabilandia','mirabilandia.jpg','Giornata a Mirabilandia','2024-07-20 09:30:00','Mirabilandia, Ravenna','44.3651, 12.2925',38,30,8),(47,'Etnaland','etnaland.jpg','Giornata a Etnaland','2024-07-22 11:00:00','Etnaland, Catania','37.5079, 14.9367',35,28,8),(48,'Rainbow MagicLand','rainbow-magicland.webp','Giornata a Rainbow MagicLand','2024-07-24 10:30:00','Rainbow MagicLand, Roma','41.8054, 12.9296',42,35,8),(49,'Leolandia','leolandia.jpg','Giornata a Leolandia','2024-07-26 09:45:00','Leolandia, Bergamo','45.6045, 9.6003',37,30,8),(50,'Luca Ravenna','luca-ravenna.webp','Spettacolo comico di Luca Ravenna','2024-07-27 21:30:00','Teatro degli Arcimboldi, Milano','45.5059, 9.2132',25,20,9),(51,'Daniele Fabbri','daniele-fabbri.jpg','Spettacolo comico di Daniele Fabbri','2024-07-28 20:15:00','Teatro Olimpico, Roma','41.9028, 12.4964',22,18,9),(52,'Stefano Rapone','stefano-rapone.jpeg','Spettacolo comico di Stefano Rapone','2024-07-29 19:00:00','Teatro San Carlo, Napoli','40.8396, 14.2473',20,16,9),(53,'Gabriel Iglesias','gabriel-iglesias.jpg','Spettacolo comico di Gabriel Iglesias','2024-07-30 21:45:00','Teatro Verdi, Firenze','43.7696, 11.2558',28,22,9),(54,'Saverio Raimondo','saverio-raimondo.jpg','Spettacolo comico di Saverio Raimondo','2024-08-01 20:00:00','Teatro Duse, Bologna','44.4949, 11.3426',24,19,9),(55,'Maurizio Crozza','maurizio-crozza.webp','Spettacolo comico di Maurizio Crozza','2024-08-03 19:30:00','Teatro Carlo Felice, Genova','44.4056, 8.9463',30,25,9),(56,'Luciana Litizzetto','luciana-litizzetto.jpg','Spettacolo comico di Luciana Litizzetto','2024-08-05 22:00:00','Teatro Regio, Torino','45.0703, 7.6869',32,26,9);
/*!40000 ALTER TABLE `eventi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-27 11:12:53
