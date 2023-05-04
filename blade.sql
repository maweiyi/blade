CREATE DATABASE IF NOT EXISTS online_store;
CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO product(name, description, image, price) VALUES ('TV', 'Best TV', 'game.png', '1000');
INSERT INTO product(name, description, image, price) VALUES ('iPhone', 'Best iPhone', 'safe.png', '999');
INSERT INTO product(name, description, image, price) VALUES ('Chromecast', 'Best Chromecast', 'submarine.png', '30');
INSERT INTO  product(name, description, image, price) VALUES ('Glasses', 'Best Glasses', 'game.png', '100');

