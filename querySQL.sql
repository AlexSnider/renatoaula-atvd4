CREATE TABLE cidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL
);
INSERT INTO cidades (nome, uf) VALUES ('Sao Paulo', 'SP');
INSERT INTO cidades (nome, uf) VALUES ('Rio de Janeiro', 'RJ');
INSERT INTO cidades (nome, uf) VALUES ('Belo Horizonte', 'MG');