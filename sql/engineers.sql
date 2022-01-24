CREATE TABLE `Engineers` (
    `id` int unsigned PRIMARY KEY AUTO_INCREMENT,
    `login` varchar(16) unique NOT NULL,
    `phone` char(11) unique NOT NULL
)
ENGINE = InnoDB
CHARACTER SET 'utf8'
COLLATE 'utf8_general_ci'
