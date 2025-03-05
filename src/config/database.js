import sqlite from 'sqlite';

const db = new sqlite3.Database('library_db.sqlite', () => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado com sucesso ao banco de dados SQLite.');
    }
})

export default db;