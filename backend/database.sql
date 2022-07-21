-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` DATE,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `name`, `description`, `date`, `link`) VALUES
(1, 'Trombinoscope', 'Site web permettant de présenter la promo', '01/03/2022 | 31/03/2022', 'https://pixeleum.github.io/trombinoscope/'),
(2, 'Hero corporation', 'Jeu permettant de choisir héro pour affronter une série de boss', '04/04/2022 | 11/05/2022', 'https://theodep.github.io/Hero-Corporation/'),
(3, 'Postverta', 'Application mobile de lecture intégrant un jeu de carte', '24/05/2022 | 13/07/2022', 'en cours de deploiement'),
(4, 'LamaZone', 'Site web de vente montrant le coup énergétique pour chaque requète faites', '12/05/2022 | 13/05/2022', 'https://github.com/PiXeleum/2022-03-JS-Reims-hackathon-1-LamaZone.git'),
(5, 'Ptits-crackers', 'Site web permettant d améliorer la communication en entreprise', '29/06/2022 | 01/07/2022', 'https://github.com/PiXeleum/2022-03-JS-Reims-hackathon-2-ptits-crackers.git');


--
-- Index pour les tables exportées
--

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--
-- Structure de la table `techno`
--

CREATE TABLE `techno` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` varchar(255) NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Contenu de la table `techno`
--

INSERT INTO `techno` (`id`, `name`, `logo`) VALUES
(1, 'React', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'),
(2, 'JavaScript', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'),
(3, 'HTML', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'),
(4, 'Node.js', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'),
(5, 'Express', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'),
(6, 'MySQL', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'),
(7, 'CSS', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'),
(8, 'Tailwind', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `techno`
--
ALTER TABLE `techno`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `techno`
--
ALTER TABLE `techno`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
