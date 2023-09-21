-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `author_id` int DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'To Kill a Mockingbird','You never really understand a person until you consider things from his point of view.',2,'2023-09-20 18:15:42'),(2,'1984','War is peace. Freedom is slavery. Ignorance is strength.',2,'2023-09-20 18:15:42'),(3,'Pride and Prejudice','It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',4,'2023-09-20 18:15:42'),(4,'The Great Gatsby','So we beat on, boats against the current, borne back ceaselessly into the past.',4,'2023-09-20 18:15:42'),(5,'The Catcher in the Rye','All morons hate it when you call them a moron.',1,'2023-09-20 18:15:42'),(6,'Harry Potter and the Sorcerer\'s Stone','It does not do to dwell on dreams and forget to live.',3,'2023-09-20 18:15:42'),(7,'The Lord of the Rings','Not all those who wander are lost.',5,'2023-09-20 18:15:42'),(8,'The Hobbit','In a hole in the ground, there lived a hobbit.',5,'2023-09-20 18:15:42'),(9,'Moby-Dick','Call me Ishmael.',5,'2023-09-20 18:15:42'),(10,'The Hitchhiker\'s Guide to the Galaxy','Don\'t panic.',2,'2023-09-20 18:15:42'),(11,'Brave New World','Happiness is a hard master—particularly other people\'s happiness.',1,'2023-09-20 18:15:42'),(12,'The Road','You forget what you want to remember, and you remember what you want to forget.',1,'2023-09-20 18:15:42'),(13,'Frankenstein','I do know that for the sympathy of one living being, I would make peace with all. I have love in me the likes of which you can scarcely imagine.',2,'2023-09-20 18:15:42'),(14,'The Shining','All work and no play makes Jack a dull boy.',1,'2023-09-20 18:15:42'),(15,'The Old Man and the Sea','But man is not made for defeat. A man can be destroyed but not defeated.',1,'2023-09-20 18:15:42'),(16,'Alice\'s Adventures in Wonderland','If you don’t know where you are going, any road can take you there.',1,'2023-09-20 18:15:42'),(17,'Fahrenheit 451','There must be something in books, things we can’t imagine, to make a woman stay in a burning house; there must be something there. You don’t stay for nothing.',1,'2023-09-20 18:15:42'),(18,'The Road Less Traveled','Life is difficult. This is a great truth, one of the greatest truths.',4,'2023-09-20 18:15:42'),(19,'The Alchemist','And, when you want something, all the universe conspires in helping you to achieve it.',3,'2023-09-20 18:15:42'),(20,'The Little Prince','One sees clearly only with the heart. What is essential is invisible to the eye.',5,'2023-09-20 18:15:42'),(21,'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe','Once a king or queen of Narnia, always a king or queen of Narnia.',2,'2023-09-20 18:15:42'),(22,'The Road Not Taken','Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.',4,'2023-09-20 18:15:42'),(23,'The Grapes of Wrath','And the great owners, who must lose their land in an upheaval, the great owners with access to history, with eyes to read history and to know the great fact: when property accumulates in too few hands it is taken away.',4,'2023-09-20 18:15:42'),(24,'One Hundred Years of Solitude','It\'s enough for me to be sure that you and I exist at this moment.',3,'2023-09-20 18:15:42'),(25,'The Giver','The worst part of holding the memories is not the pain. It\'s the loneliness of it. Memories need to be shared.',4,'2023-09-20 18:15:42'),(26,'The Art of War','The supreme art of war is to subdue the enemy without fighting.',3,'2023-09-20 18:15:42'),(27,'The Odyssey','Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.',3,'2023-09-20 18:15:42'),(28,'Crime and Punishment','Man grows used to everything, the scoundrel!',5,'2023-09-20 18:15:42'),(29,'The Sun Also Rises','You can\'t get away from yourself by moving from one place to another.',1,'2023-09-20 18:15:42'),(30,'The Picture of Dorian Gray','The only way to get rid of a temptation is to yield to it.',2,'2023-09-20 18:15:42'),(31,'The Scarlet Letter','No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.',3,'2023-09-20 18:15:42'),(32,'The Count of Monte Cristo','All human wisdom is contained in these two words - Wait and Hope.',3,'2023-09-20 18:15:42'),(33,'A Tale of Two Cities','It was the best of times, it was the worst of times.',2,'2023-09-20 18:15:42'),(34,'The Brothers Karamazov','The mystery of human existence lies not in just staying alive, but in finding something to live for.',5,'2023-09-20 18:15:42'),(35,'Anna Karenina','All happy families are alike; each unhappy family is unhappy in its own way.',2,'2023-09-20 18:15:42'),(36,'The Grapes of Wrath','I ain\'t never gonna be scared no more. I was, though.',1,'2023-09-20 18:15:42'),(37,'The Adventures of Huckleberry Finn','Persons attempting to find a motive in this narrative will be prosecuted; persons attempting to find a moral in it will be banished; persons attempting to find a plot in it will be shot.',5,'2023-09-20 18:15:42'),(38,'The Divine Comedy','In His will is our peace.',2,'2023-09-20 18:15:42'),(39,'Wuthering Heights','Whatever our souls are made of, his and mine are the same.',4,'2023-09-20 18:15:42'),(40,'The Iliad','There is the heat of Love, the pulsing rush of Longing, the lover’s whisper, irresistible—magic to make the sanest man go mad.',2,'2023-09-20 18:15:42'),(41,'The Odyssey','Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.',4,'2023-09-20 18:15:42'),(42,'The Catcher in the Rye','People always clap for the wrong things.',5,'2023-09-20 18:15:42'),(43,'The Road','You have to carry the fire.',1,'2023-09-20 18:15:42'),(44,'The Old Man and the Sea','But man is not made for defeat. A man can be destroyed but not defeated.',3,'2023-09-20 18:15:42'),(45,'One Hundred Years of Solitude','It\'s enough for me to be sure that you and I exist at this moment.',5,'2023-09-20 18:15:42'),(46,'The Giver','The worst part of holding the memories is not the pain. It\'s the loneliness of it. Memories need to be shared.',2,'2023-09-20 18:15:42'),(47,'The Art of War','The supreme art of war is to subdue the enemy without fighting.',4,'2023-09-20 18:15:42'),(48,'The Odyssey','Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.',4,'2023-09-20 18:15:42'),(49,'Crime and Punishment','Man grows used to everything, the scoundrel!',4,'2023-09-20 18:15:42'),(50,'The Sun Also Rises','You can\'t get away from yourself by moving from one place to another.',4,'2023-09-20 18:15:42');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(320) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rick@gmail.com','$2b$10$7qxproK38jx7HolPGyK9pOS2bcM2CKHSIyp8ibHJePOK/ToB0hkZu','2023-09-20 07:16:42'),(2,'sophy@gmail.com','$2b$10$rFyILmuOSLTgCtvo2P16sOwGKm7gZPfQjQAmxSFKKNxjTDSpgBRXq','2023-09-20 07:17:10'),(3,'elcent@gmail.com','$2b$10$y7ccyQHGYHkksECGFWC7Ee6JE/jiyWoOarN6jh2XGSyDOoLpzY7xG','2023-09-20 07:17:27'),(4,'tom@gmail.com','$2b$10$6Vn9aMRUGFbvjxMGYx9SD./u90IHo.9ckhKXOOcoqTDCO2kNODUhW','2023-09-20 07:17:37'),(5,'tim@gmail.com','$2b$10$F8xYj/ArFQCx5uu5RgxFP.zy2aGETstPnSfAvv3OuhR8eyzGCM.5e','2023-09-20 07:17:52');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-21 12:22:40
