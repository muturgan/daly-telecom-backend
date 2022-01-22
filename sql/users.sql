CREATE TABLE `Users` (
    `id` int unsigned PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(64) DEFAULT NULL,
    `address` varchar(64) DEFAULT NULL,
    `phone` varchar(16) DEFAULT NULL,
    `mobile` varchar(16) DEFAULT NULL,
    `kross` int unsigned DEFAULT NULL,
    `magistral` int unsigned DEFAULT NULL,
    `raspred` int unsigned DEFAULT NULL,
    `adsl` int unsigned DEFAULT NULL,
    `boxes` text,
    `latitude` double DEFAULT NULL,
    `longitude` double DEFAULT NULL
)
ENGINE = InnoDB
CHARACTER SET 'utf8'
COLLATE 'utf8_general_ci'
